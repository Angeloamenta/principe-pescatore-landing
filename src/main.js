/* ==========================================================================
   Principe Pescatore · Landing v2 — orchestrazione della pagina.

   Cosa fa:   smooth scroll (Lenis) agganciato a GSAP ScrollTrigger, ingresso
              della hero, immersione della camera nel mare, video che si
              allarga, gamma che scorre in orizzontale, lente sul planisfero.
   Perché:    tre momenti forti (mare, video, gamma) invece di tante
              animazioni tiepide su ogni sezione.
   Assunzioni: la pagina funziona anche senza JS; con prefers-reduced-motion
              niente smooth scroll, niente pin, mare fermo su un fotogramma.
   ========================================================================== */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const SELECTORS = {
  header: '[data-header]',
  hero: '[data-hero]',
  heroStage: '[data-ocean]',
  heroLines: '.hero-title .line > span',
  heroFade: '[data-hero-fade]',
  heroDive: '[data-hero-dive]',
  videoStage: '[data-video-stage]',
  videoFrame: '[data-video-frame]',
  gammaSection: '[data-gamma]',
  gammaTrack: '[data-gamma-track]',
  gammaProgress: '[data-gamma-progress]',
  heroMap: '[data-hero-map]',
  heroMapInk: '[data-hero-map-ink]',
  rotta: '[data-rotta]',
  rottaMasks: '[data-rotta-mask]',
  rottaPath: '[data-rotta-path]',
  barca: '[data-barca]',
  tappaPins: '[data-tappa-pin]',
  tappe: '[data-tappe] [data-tappa]',
  pouches: '.pack',
};

const OCEAN_SCRIPT = 'assets/js/ocean.bundle.js';
const DESKTOP_QUERY = '(min-width: 861px)';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.add('js');
if (reducedMotion) document.documentElement.classList.add('no-scroll-motion');

/* ---------- Smooth scroll ---------- */
let lenis = null;
if (!reducedMotion) {
  // lerp basso = scroll morbido ma non "galleggiante"; anchors gestisce i link #id
  lenis = new Lenis({ lerp: 0.1, anchors: { offset: -72 } });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ---------- Header: ombra solo dopo lo scroll (stato, non decorazione) ---------- */
const header = document.querySelector(SELECTORS.header);
// (non uso ScrollTrigger qui: a fine pagina si disattiva e l'header tornerebbe trasparente)
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

/* ---------- Hero: ingresso + mare ---------- */
function playHeroIntro() {
  if (reducedMotion) return;
  gsap.timeline({ defaults: { ease: 'expo.out' } })
    .from(SELECTORS.heroLines, { yPercent: 110, duration: 1.1, stagger: 0.08 })
    .from(SELECTORS.heroFade, { autoAlpha: 0, y: 14, duration: 0.8, stagger: 0.06, ease: 'power2.out' }, '-=0.75');
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function startOcean() {
  const stage = document.querySelector(SELECTORS.heroStage);
  if (!stage) return;

  try {
    await loadScript(OCEAN_SCRIPT); // three.js arriva dopo il primo paint
  } catch (error) {
    return; // resta il mare statico in CSS
  }
  const { OceanScene, supportsWebGL } = window.PPOcean || {};
  if (!OceanScene || !supportsWebGL()) return;

  const ocean = new OceanScene(stage, {
    reducedMotion,
    onReady: () => stage.classList.add('is-live'),
  });
  await ocean.init();

  if (reducedMotion) return;
  // immersione: mentre la hero esce, la camera scende a pelo d'acqua
  ScrollTrigger.create({
    trigger: SELECTORS.hero,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => ocean.setDive(self.progress),
  });
}

function setupHeroDive() {
  if (reducedMotion) return;
  // il testo sale e sfuma, il blu dello "scafo" sale da sotto: si entra in acqua
  gsap.timeline({
    scrollTrigger: { trigger: SELECTORS.hero, start: 'top top', end: 'bottom top', scrub: true },
  })
    .to('.hero-content', { yPercent: -18, autoAlpha: 0, ease: 'none' }, 0)
    .to(SELECTORS.heroMap, { yPercent: 14, ease: 'none' }, 0) // la carta sale più lenta del testo
    .fromTo(SELECTORS.heroDive, { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power1.in', duration: 0.55 }, 0.15);
}

/* ---------- Il viaggio: il video si allarga fino al bordo ---------- */
function setupVideoStage() {
  const stage = document.querySelector(SELECTORS.videoStage);
  const frame = document.querySelector(SELECTORS.videoFrame);
  if (!stage || !frame || reducedMotion) return;

  gsap.fromTo(frame,
    { scale: 0.72, borderRadius: 28 },
    {
      scale: 1,
      borderRadius: 0,
      ease: 'none',
      scrollTrigger: { trigger: stage, start: 'top 85%', end: 'top 10%', scrub: true },
    }
  );
}

/* ---------- Il viaggio: la rotta si disegna, il Principe la percorre, a ogni tappa appare il prodotto ---------- */
/** dove la rotta tocca ogni segnaposto, come frazione della lunghezza: misurato sul path, in ordine */
function measureStops(path, pins) {
  const total = path.getTotalLength();
  const SAMPLES = 900;
  const stops = [];
  let from = 0;
  for (const pin of pins) {
    const { e: x, f: y } = pin.transform.baseVal.consolidate().matrix;
    let best = { distance: Infinity, length: from };
    // si cerca solo dopo la tappa precedente: la quinta (Italia) coincide con il porto di partenza
    for (let i = 0; i <= SAMPLES; i++) {
      const length = from + ((total - from) * i) / SAMPLES;
      const point = path.getPointAtLength(length);
      const distance = (point.x - x) ** 2 + (point.y - y) ** 2;
      if (distance < best.distance) best = { distance, length };
    }
    stops.push(best.length / total);
    from = best.length;
  }
  return stops;
}

function setupRotta() {
  const section = document.querySelector(SELECTORS.rotta);
  const masks = gsap.utils.toArray(SELECTORS.rottaMasks);
  const path = document.querySelector(SELECTORS.rottaPath);
  const barca = document.querySelector(SELECTORS.barca);
  if (!section || !masks.length || !path || !barca) return;

  const pins = gsap.utils.toArray(SELECTORS.tappaPins);
  const tappe = gsap.utils.toArray(SELECTORS.tappe);
  const stops = measureStops(path, pins);
  const totalLength = path.getTotalLength();

  // la rotta ha due tratti (prima e dopo la traversata del Pacifico): ognuno si rivela solo quando tocca a lui
  const segmentLengths = masks.map((mask) => mask.getTotalLength());
  const revealRoute = (progress) => {
    let travelled = progress * totalLength;
    masks.forEach((mask, index) => {
      const share = gsap.utils.clamp(0, 1, travelled / segmentLengths[index]);
      mask.style.strokeDashoffset = String(1 - share);
      travelled -= segmentLengths[index];
    });
  };

  let activeIndex = -1;
  const markReached = (progress) => {
    let lastReached = -1;
    stops.forEach((threshold, index) => {
      const reached = progress >= threshold - 0.004;
      if (reached) lastReached = index;
      pins[index]?.classList.toggle('is-reached', reached);
    });
    // prima della tappa 1 mostriamo già il suo prodotto: è la prossima destinazione
    const nextActive = Math.max(0, lastReached);
    if (nextActive !== activeIndex) {
      tappe.forEach((tappa, index) => tappa.classList.toggle('is-active', index === nextActive));
      activeIndex = nextActive;
    }
  };

  // il Principe: posizione sul path; vicino ai bordi della carta (traversata del Pacifico) sfuma e riappare
  const BOAT_END = 0.985;     // si ferma un attimo prima del segnaposto 5, che resta leggibile
  const MAX_TILT_DEG = 6;     // il ritratto dondola appena, come su una barca
  const EDGE_FADE = 90;       // unità della carta (larga 1800)
  const placeBoat = (progress) => {
    const along = Math.min(progress, 1) * BOAT_END * totalLength;
    const point = path.getPointAtLength(along);
    const ahead = path.getPointAtLength(Math.min(along + 8, totalLength));
    const slopeDeg = (Math.atan2(ahead.y - point.y, ahead.x - point.x) * 180) / Math.PI;
    const tilt = gsap.utils.clamp(-MAX_TILT_DEG, MAX_TILT_DEG, slopeDeg * 0.5);
    barca.setAttribute('transform', `translate(${point.x.toFixed(1)} ${point.y.toFixed(1)}) rotate(${tilt.toFixed(1)})`);
    const edgeDistance = Math.min(point.x, 1800 - point.x);
    barca.style.opacity = String(gsap.utils.clamp(0, 1, (edgeDistance - 30) / EDGE_FADE));
  };

  if (reducedMotion) {
    // versione statica: rotta completa, il Principe a casa, tutte le tappe in elenco
    placeBoat(1);
    markReached(1);
    tappe.forEach((tappa) => tappa.classList.remove('is-active'));
    return;
  }

  section.classList.add('is-pinned');
  const journey = { progress: 0 };
  revealRoute(0);
  markReached(0);
  gsap.to(journey, {
    progress: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${stops.length * 70}%`, // circa una schermata di scroll ogni tappa
      pin: true,
      scrub: 0.8,
      onRefresh: () => markReached(journey.progress),
    },
    onUpdate: () => {
      revealRoute(journey.progress);
      markReached(journey.progress);
    },
  });

  placeBoat(0);
  gsap.ticker.add(() => placeBoat(journey.progress));
}

/* ---------- Gamma: le buste seguono il puntatore (solo mouse) ---------- */
function setupPouchTilt() {
  if (reducedMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  gsap.utils.toArray(SELECTORS.pouches).forEach((pouch) => {
    gsap.set(pouch, { transformPerspective: 900 });
    const rotateX = gsap.quickTo(pouch, 'rotationX', { duration: 0.5, ease: 'power3.out' });
    const rotateY = gsap.quickTo(pouch, 'rotationY', { duration: 0.5, ease: 'power3.out' });

    pouch.addEventListener('pointermove', (event) => {
      const bounds = pouch.getBoundingClientRect();
      const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;  // -0.5..0.5
      const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;
      rotateY(relativeX * 14);
      rotateX(relativeY * -10);
      pouch.style.setProperty('--sheen', `${50 - relativeX * 60}%`); // il riflesso scorre col movimento
    });
    pouch.addEventListener('pointerleave', () => {
      rotateX(0);
      rotateY(0);
      pouch.style.removeProperty('--sheen');
    });
  });
}

/* ---------- Gamma: scorrimento orizzontale bloccato (solo desktop) ---------- */
/**
 * Nel pin la gamma occupa una schermata: le card devono starci intere (busta, nome, dati, testo).
 * La busta è alta 285/245 volte la larghezza; il resto della card cambia altezza con la larghezza
 * (i nomi lunghi vanno a capo), quindi misuriamo due volte.
 */
const PACK_HEIGHT_RATIO = 285 / 245;
const CARD_WIDTH = { min: 220, max: 304 }; // sotto i 220px la busta non si legge più
const CARD_BOTTOM_GAP = 24;
function measureCardWidth(section, cards) {
  const sectionTop = section.getBoundingClientRect().top;
  const cardTop = cards[0].getBoundingClientRect().top - sectionTop;
  const tallestText = Math.max(...cards.map((card) => card.offsetHeight - card.querySelector('.pack').offsetHeight));
  return (window.innerHeight - CARD_BOTTOM_GAP - cardTop - tallestText) / PACK_HEIGHT_RATIO;
}
function fitGammaCards(section, track) {
  const cards = gsap.utils.toArray('.prodotto', track);
  if (!cards.length) return;
  section.classList.remove('is-compact');
  for (let pass = 0; pass < 3; pass++) {
    const width = measureCardWidth(section, cards);
    // se anche alla larghezza minima non ci sta, togliamo la descrizione e riproviamo
    if (width < CARD_WIDTH.min && !section.classList.contains('is-compact')) {
      section.classList.add('is-compact');
      continue;
    }
    section.style.setProperty('--card-w', `${Math.floor(gsap.utils.clamp(CARD_WIDTH.min, CARD_WIDTH.max, width))}px`);
  }
}

function setupGammaRail() {
  const section = document.querySelector(SELECTORS.gammaSection);
  const track = document.querySelector(SELECTORS.gammaTrack);
  const progressBar = document.querySelector(SELECTORS.gammaProgress);
  if (!section || !track || reducedMotion) return;

  const media = gsap.matchMedia();
  media.add(DESKTOP_QUERY, () => {
    const distance = () => track.scrollWidth - track.clientWidth;
    section.classList.add('is-pinned');
    // misuriamo prima di ogni ricalcolo di ScrollTrigger (resize, font caricati): la distanza dipende dalle card
    const fit = () => fitGammaCards(section, track);
    fit();
    ScrollTrigger.addEventListener('refreshInit', fit);

    const tween = gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => progressBar && gsap.set(progressBar, { scaleX: self.progress }),
      },
    });

    return () => {
      ScrollTrigger.removeEventListener('refreshInit', fit);
      section.style.removeProperty('--card-w');
      section.classList.remove('is-compact');
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(track, { clearProps: 'transform' });
      section.classList.remove('is-pinned');
    };
  });
}

/* ---------- Hero: lente sul planisfero che segue il puntatore (solo mouse) ---------- */
function setupMapLens() {
  const hero = document.querySelector(SELECTORS.hero);
  const map = document.querySelector(SELECTORS.heroMap);
  const ink = document.querySelector(SELECTORS.heroMapInk);
  if (!hero || !map || !ink || reducedMotion) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  // la lente arriva in ritardo sul puntatore: si muove come una lente tenuta in mano
  const lens = { x: 60, y: 25 };
  const apply = () => {
    ink.style.setProperty('--mx', `${lens.x.toFixed(2)}%`);
    ink.style.setProperty('--my', `${lens.y.toFixed(2)}%`);
  };
  const moveX = gsap.quickTo(lens, 'x', { duration: 0.9, ease: 'power3.out', onUpdate: apply });
  const moveY = gsap.quickTo(lens, 'y', { duration: 0.9, ease: 'power3.out', onUpdate: apply });

  hero.addEventListener('pointermove', (event) => {
    const bounds = map.getBoundingClientRect();
    moveX(((event.clientX - bounds.left) / bounds.width) * 100);
    moveY(((event.clientY - bounds.top) / bounds.height) * 100);
    map.classList.add('is-lens');
  });
  hero.addEventListener('pointerleave', () => map.classList.remove('is-lens'));
}

/* ---------- Avvio ---------- */
playHeroIntro();
setupHeroDive();
setupRotta();
setupVideoStage();
setupGammaRail();
setupPouchTilt();
setupMapLens();

// il mare parte quando il browser è libero: il testo della hero è già leggibile
const idle = window.requestIdleCallback || ((callback) => setTimeout(callback, 200));
idle(() => startOcean());

// i font cambiano le misure: ricalcoliamo pin e distanze quando sono pronti
document.fonts?.ready.then(() => ScrollTrigger.refresh());
