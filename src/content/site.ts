/**
 * CHINTAMANI HOSPITAL — language-neutral facts and config.
 *
 * All translatable COPY lives in src/content/i18n.ts. This file holds only
 * data that does not change between English / Marathi / Hindi: phone numbers,
 * the opening schedule (for the live "Open now" indicator), map links, the
 * form key, and brand identifiers.
 *
 * Confirmed from the clinic signboard / public listings. Items marked TODO
 * must be confirmed by the client before launch; nothing fabricated ships.
 */

export const site = {
  name: "Chintamani Hospital",
  shortName: "Chintamani",
  legalName: "Chintamani Hospital & Dental Clinic",

  contact: {
    phones: [
      { label: "020 6529 0882", tel: "+912065290882" },
      { label: "74478 44036", tel: "+917447844036" },
    ],
    // WhatsApp is how most patients here actually prefer to reach a clinic.
    whatsapp: { number: "917447844036", display: "74478 44036" },
    email: "tusharkhachane@yahoo.com",
    // Real Google Business pin (lat/lng from the place URL). Keyless embed.
    coords: { lat: 18.6648821, lng: 73.8055101 },
    mapEmbed:
      "https://maps.google.com/maps?q=Chintamani%20Hospital%20Spine%20Road%20Chinchwad&ll=18.6648821,73.8055101&z=16&output=embed",
    // One-tap turn-by-turn directions to the exact pin.
    mapLink:
      "https://www.google.com/maps/dir/?api=1&destination=18.6648821,73.8055101",
    // Google Business profile, reviews tab open.
    reviewsUrl:
      "https://www.google.com/maps/place/Chintamani+Hospital/@18.6648821,73.8055101,17z/data=!4m8!3m7!1s0x3bc2b7882a66e871:0xea9c7da9f52090cb!9m1!1b1",
    // Verifiable aggregate (Justdial: 4.7 over ~19 reviews). TODO(client):
    // update to the live Google rating/count if it differs.
    rating: { value: "4.7", scale: "5", count: 19 },
  },

  // Machine-readable OPD schedule, used by the client to show Open now / Closed.
  // Times are local (Asia/Kolkata) minutes from midnight. dow: 0=Sun ... 6=Sat.
  // TODO(client): confirm exact session timings (transcribed from the signboard).
  schedule: {
    days: [1, 2, 3, 4, 5, 6], // Monday to Saturday
    windows: [
      [9 * 60, 13 * 60 + 30], // 9:00 AM - 1:30 PM
      [17 * 60, 20 * 60 + 30], // 5:00 PM - 8:30 PM
    ],
  },

  // Anchor targets reused across components.
  href: {
    appointment: "#appointment",
  },

  appointment: {
    // TODO(client): create a free Web3Forms access key at https://web3forms.com
    // and paste it here. Until then the form runs in safe preview mode (no send).
    web3formsKey: "",
  },

  // REAL Google reviews (public): name, avatar, the actual words, and the
  // reviewer's total Google review count (a credibility signal). Lightly
  // cleaned for spelling only; meaning preserved verbatim.
  reviews: [
    {
      name: "Sanjay Joshi", count: 484,
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjVJYl2qsim3Spw2wIigwuJFpBIFLc1nTSYjM7DgKTgUgUV3zl8Dlg=w96-h96-p-rp-mo-br100",
      quote: "The most experienced and ethical surgeon, as per my experience. He is a Consultant General Surgeon, Laparoscopic Surgeon, and Endoscopist.",
    },
    {
      name: "Deepak C", count: 11,
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjXqFO_1dQT8iF7Dd8TFaQvfGBq0712cXGi9K0mFqOda8rfsP-HN=w96-h96-p-rp-mo-br100",
      quote: "The doctor is very supportive, skilled, and kind. You will not see much marketing here, just genuine care.",
    },
    {
      name: "Jagannath Joshi", count: 3,
      photo: "https://lh3.googleusercontent.com/a/ACg8ocIMajtGyrtvjSFNHV_rKtIRDjA_j9-kyWyhP-U-Ogyv5KcjoQ=w96-h96-p-rp-mo-br100",
      quote: "Good hospital staff, and the doctor is very patient-friendly. Best diagnosis of pain, reliable and sure about the cure.",
    },
    {
      name: "Siddhesh Deoji", count: 5,
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjUPk8o2Qxxde38-yB8WxcMwUAjKoC7RiG68UZ9RVuVItcAdwCU=w96-h96-p-rp-mo-br100",
      quote: "Doctors and staff are very supportive and caring. Clean and decent environment.",
    },
    {
      name: "Shishir Paratane", count: 13,
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjWlPEVvlsD3mqQZHUTjcc7lgK9qNicVBtOylZNOv1Y3i-FhRTkcYg=w96-h96-p-rp-mo-br100",
      quote: "Nice clinic. The doctor is very caring and experienced.",
    },
  ],

  // DRAFT: add verified social profiles when available.
  social: [] as { icon: string; href: string; label: string }[],
} as const;

export type Site = typeof site;

/** WhatsApp deep link with an optional prefilled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
