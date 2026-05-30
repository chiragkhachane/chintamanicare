/**
 * "Living Field of Care" — the hero centerpiece.
 * A GPU point cloud that breathes on a curl-like drift, reacts to the cursor,
 * and slowly morphs between symbolic forms (sphere, DNA helix, ring, wave).
 * Loaded only on capable desktops (see lib/motion.ts gating); never blocks LCP.
 */
import * as THREE from "three";

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uMix;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform vec3 uMouse;
  attribute vec3 aTarget0;
  attribute vec3 aTarget1;
  attribute vec3 aRand;
  varying float vDepth;
  varying float vRand;

  void main() {
    vRand = aRand.x;
    vec3 pos = mix(aTarget0, aTarget1, uMix);

    // Organic breathing drift (cheap pseudo-curl from layered trig).
    float t = uTime * 0.5 + aRand.y * 6.2831;
    pos.x += sin(t + pos.y * 1.3) * 0.06 * (0.4 + aRand.z);
    pos.y += cos(t * 1.1 + pos.z * 1.1) * 0.06 * (0.4 + aRand.x);
    pos.z += sin(t * 0.9 + pos.x * 1.2) * 0.06 * (0.4 + aRand.y);

    // Cursor repulsion in the xy plane.
    vec2 toMouse = pos.xy - uMouse.xy;
    float d = length(toMouse);
    float influence = smoothstep(1.6, 0.0, d);
    pos.xy += normalize(toMouse + 0.0001) * influence * 0.5;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixelRatio * (300.0 / vDepth) * (0.45 + aRand.x * 0.9);
  }
`;

const FRAG = /* glsl */ `
  precision mediump float;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uOpacity;
  varying float vDepth;
  varying float vRand;

  void main() {
    // Soft round sprite.
    vec2 c = gl_PointCoord - 0.5;
    float dist = length(c);
    if (dist > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, dist);

    float depthMix = clamp((vDepth - 3.0) / 6.0, 0.0, 1.0);
    vec3 col = mix(uColorB, uColorA, mix(depthMix, vRand, 0.4));
    gl_FragColor = vec4(col, alpha * uOpacity);
  }
`;

function cssColor(varName: string, fallback: string): THREE.Color {
  const v = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  try {
    return new THREE.Color(v || fallback);
  } catch {
    return new THREE.Color(fallback);
  }
}

// ---- Shape generators (each returns N*3 floats) ----
function sphere(n: number, r = 2.5): Float32Array {
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const rr = r * (0.85 + Math.random() * 0.15);
    a[i * 3] = rr * Math.sin(phi) * Math.cos(theta);
    a[i * 3 + 1] = rr * Math.sin(phi) * Math.sin(theta);
    a[i * 3 + 2] = rr * Math.cos(phi);
  }
  return a;
}

function helix(n: number): Float32Array {
  const a = new Float32Array(n * 3);
  const turns = 3.2;
  const height = 5.2;
  const radius = 1.5;
  for (let i = 0; i < n; i++) {
    const strand = i % 2;
    const t = i / n;
    const angle = t * turns * 2 * Math.PI + strand * Math.PI;
    const jitter = (Math.random() - 0.5) * 0.25;
    a[i * 3] = Math.cos(angle) * (radius + jitter);
    a[i * 3 + 1] = (t - 0.5) * height;
    a[i * 3 + 2] = Math.sin(angle) * (radius + jitter);
  }
  return a;
}

function ring(n: number): Float32Array {
  const a = new Float32Array(n * 3);
  const R = 2.4;
  const r = 0.55;
  for (let i = 0; i < n; i++) {
    // Leave a gap to echo the "C" monogram.
    const u = Math.random() * 1.72 * Math.PI - 0.86 * Math.PI;
    const v = Math.random() * 2 * Math.PI;
    const rr = r * (0.7 + Math.random() * 0.3);
    a[i * 3] = (R + rr * Math.cos(v)) * Math.cos(u);
    a[i * 3 + 1] = (R + rr * Math.cos(v)) * Math.sin(u);
    a[i * 3 + 2] = rr * Math.sin(v);
  }
  return a;
}

function wave(n: number): Float32Array {
  const a = new Float32Array(n * 3);
  const size = 5.2;
  for (let i = 0; i < n; i++) {
    const x = (Math.random() - 0.5) * size;
    const z = (Math.random() - 0.5) * size;
    const y = Math.sin(x * 1.1) * 0.5 + Math.cos(z * 1.3) * 0.5;
    a[i * 3] = x;
    a[i * 3 + 1] = y;
    a[i * 3 + 2] = z;
  }
  return a;
}

export async function mountHeroField(canvas: HTMLCanvasElement): Promise<void> {
  const N = Math.min(20000, Math.floor((window.innerWidth * window.innerHeight) / 110));
  const shapes = [sphere(N), helix(N), ring(N), wave(N)];

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(dpr);

  const sizeOf = () => ({ w: canvas.clientWidth || window.innerWidth, h: canvas.clientHeight || window.innerHeight });
  let { w, h } = sizeOf();
  renderer.setSize(w, h, false);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
  camera.position.set(0, 0, 6.4);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("aTarget0", new THREE.BufferAttribute(shapes[0], 3));
  geo.setAttribute("aTarget1", new THREE.BufferAttribute(shapes[1], 3));
  geo.setAttribute("position", new THREE.BufferAttribute(shapes[0].slice(), 3));
  const rand = new Float32Array(N * 3);
  for (let i = 0; i < N * 3; i++) rand[i] = Math.random();
  geo.setAttribute("aRand", new THREE.BufferAttribute(rand, 3));

  const uniforms = {
    uTime: { value: 0 },
    uMix: { value: 0 },
    uSize: { value: 1.9 },
    uPixelRatio: { value: dpr },
    uMouse: { value: new THREE.Vector3(99, 99, 0) },
    uOpacity: { value: 0 },
    uColorA: { value: cssColor("--accent-soft", "#2dd4bf") },
    uColorB: { value: cssColor("--accent", "#0f766e") },
  };

  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending, // reads as teal dust on a light bg (additive blows out to white)
  });

  const points = new THREE.Points(geo, material);
  scene.add(points);

  // Morph cycling between shapes.
  let from = 0;
  let to = 1;
  let cycleT = 0;
  const CYCLE = 6.5; // seconds per morph

  // Cursor → world plane.
  const mouseNDC = new THREE.Vector2(2, 2);
  const targetMouse = new THREE.Vector3(99, 99, 0);
  const onPointer = (e: PointerEvent) => {
    mouseNDC.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseNDC.y = -((e.clientY / window.innerHeight) * 2 - 1);
    targetMouse.set(mouseNDC.x * 3.4, mouseNDC.y * 2.2, 0);
  };
  window.addEventListener("pointermove", onPointer, { passive: true });

  const onResize = () => {
    const s = sizeOf();
    w = s.w;
    h = s.h;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  };
  window.addEventListener("resize", onResize);

  const clock = new THREE.Clock();
  let intro = 0;
  let raf = 0;

  const tick = () => {
    const dt = Math.min(clock.getDelta(), 0.05);
    uniforms.uTime.value += dt;

    // Fade in once.
    intro = Math.min(1, intro + dt * 0.6);
    // Fade the whole field out as the hero scrolls away.
    const heroH = window.innerHeight;
    const scrolled = Math.min(1, Math.max(0, window.scrollY / heroH));
    uniforms.uOpacity.value = intro * (1 - scrolled * 0.9) * 0.7;

    // Morph progress.
    cycleT += dt;
    const p = cycleT / CYCLE;
    uniforms.uMix.value = p * p * (3 - 2 * p); // smoothstep
    if (cycleT >= CYCLE) {
      cycleT = 0;
      from = to;
      to = (to + 1) % shapes.length;
      (geo.getAttribute("aTarget0") as THREE.BufferAttribute).copyArray(shapes[from]);
      (geo.getAttribute("aTarget1") as THREE.BufferAttribute).copyArray(shapes[to]);
      geo.getAttribute("aTarget0").needsUpdate = true;
      geo.getAttribute("aTarget1").needsUpdate = true;
      uniforms.uMix.value = 0;
    }

    // Ease mouse, gentle auto-rotation, subtle parallax toward cursor.
    uniforms.uMouse.value.lerp(targetMouse, 0.08);
    points.rotation.y += dt * 0.06;
    points.rotation.x = mouseNDC.y * 0.12;
    points.rotation.z = mouseNDC.x * 0.04;

    renderer.render(scene, camera);
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  // Pause when tab hidden to save battery.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else {
      clock.getDelta();
      raf = requestAnimationFrame(tick);
    }
  });
}
