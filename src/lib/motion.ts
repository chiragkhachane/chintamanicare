/**
 * Lightweight site behavior for Chintamani Hospital.
 * Motion is deliberately absent: the public site should feel calm and direct.
 */
import { site } from "../content/site";

/* ---------- Nav: solid state once scrolled past the top ---------- */
function initNav() {
  const nav = document.querySelector<HTMLElement>("[data-nav]");
  const sentinel = document.querySelector<HTMLElement>("[data-nav-sentinel]");
  if (!nav || !sentinel) return;
  const io = new IntersectionObserver(
    ([entry]) => nav.classList.toggle("is-scrolled", !entry.isIntersecting),
    { rootMargin: "0px" }
  );
  io.observe(sentinel);
}

/* ---------- Live open status, computed in Asia/Kolkata ----------
   When closed we say when it next OPENS ("Opens at 5:00 PM" / "Opens Monday
   at 9:00 AM"), never a bare "Closed" that reads like the place shut down. */
const DOW: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function nowInIST(): { dow: number; mins: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata", hour12: false, weekday: "short", hour: "2-digit", minute: "2-digit",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  let hh = parseInt(get("hour"), 10);
  if (hh === 24) hh = 0;
  return { dow: DOW[get("weekday")] ?? 0, mins: hh * 60 + parseInt(get("minute"), 10) };
}

function fmtTime(mins: number): string {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = ((h + 11) % 12) + 1;
  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`;
}

function initOpenStatus() {
  const { days, windows } = site.schedule;
  const { dow, mins } = nowInIST();
  const open = days.includes(dow) && windows.some(([o, c]) => mins >= o && mins < c);

  // Next opening: a later window today, else the first window on the next open day.
  let daysAhead = -1;
  let startMins = 0;
  if (!open) {
    const laterToday = days.includes(dow) ? windows.map((w) => w[0]).find((o) => o > mins) : undefined;
    if (laterToday !== undefined) { daysAhead = 0; startMins = laterToday; }
    else {
      for (let i = 1; i <= 7; i++) {
        if (days.includes((dow + i) % 7)) { daysAhead = i; startMins = windows[0][0]; break; }
      }
    }
  }

  const locale = document.documentElement.lang || "en-IN";
  document.querySelectorAll<HTMLElement>("[data-open-badge]").forEach((el) => {
    const label = el.querySelector<HTMLElement>("[data-open-label]");
    el.classList.toggle("is-closed", !open);
    if (!label) return;
    if (open) { label.textContent = el.dataset.open || ""; return; }
    const t = fmtTime(startMins);
    if (daysAhead === 0) {
      label.textContent = (el.dataset.opensToday || "").replace("{t}", t);
    } else if (daysAhead > 0) {
      const target = new Date(Date.now() + daysAhead * 86400000);
      const day = new Intl.DateTimeFormat(locale, { timeZone: "Asia/Kolkata", weekday: "long" }).format(target);
      label.textContent = (el.dataset.opensDay || "").replace("{d}", day).replace("{t}", t);
    } else {
      label.textContent = el.dataset.closed || "";
    }
  });
}

/* ---------- Native <details> disclosures: close on outside click / Escape / link ---------- */
function initDisclosures() {
  const items = Array.from(document.querySelectorAll<HTMLDetailsElement>("details[data-disclosure]"));
  if (!items.length) return;
  document.addEventListener("click", (e) => {
    items.forEach((d) => { if (d.open && !d.contains(e.target as Node)) d.open = false; });
  });
  document.addEventListener("keydown", (e) => {
    if ((e as KeyboardEvent).key === "Escape") items.forEach((d) => (d.open = false));
  });
  items.forEach((d) =>
    d.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => (d.open = false)))
  );
}

export function initMotion() {
  initNav();
  initOpenStatus();
  initDisclosures();
}
