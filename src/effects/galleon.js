/* ==========================================================================
   Galleon — il galeone del Principe, costruito in codice (niente modelli da caricare).

   Cosa fa:   scafo in legno con fasciame in rilievo, cinte, cannoni, gallerie di
              poppa; tre alberi con vele color tela e il logo sulla vela maestra,
              sartiame con griselle, bandierine. Sul cassero, al timone, il Principe:
              l'illustrazione del pack usata come texture su un volume in rilievo
              (mappa di profondità calcolata dalla sagoma), illuminato come il resto.
   Perché:    il cliente non voleva le buste in acqua: il galeone racconta il viaggio
              del Principe (la sezione successiva) e porta il logo dentro la scena.
   Assunzioni: coordinate locali della nave: la prua guarda verso -X, +Y in alto,
              +Z è il fianco di dritta. La nave è lunga circa 3 unità.
              Le immagini arrivano come data URL (bundle), così funzionano anche da file://.
   ========================================================================== */

import {
  BufferGeometry,
  Float32BufferAttribute,
  PlaneGeometry,
  CylinderGeometry,
  TorusGeometry,
  SphereGeometry,
  BoxGeometry,
  ShapeGeometry,
  Shape,
  MeshStandardMaterial,
  MeshBasicMaterial,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  Group,
  CanvasTexture,
  SRGBColorSpace,
  DoubleSide,
  Vector3,
  TubeGeometry,
  CatmullRomCurve3,
  RepeatWrapping,
} from 'three';

import logoUrl from '../../assets/img/logo-principe-700.webp';
import bodyUrl from '../../assets/img/principe-corpo.webp';
import bodyDepthUrl from '../../assets/img/principe-corpo-rilievo.png';
import armRightUrl from '../../assets/img/principe-braccio-sx.webp';      // il braccio a sinistra di chi guarda
import armRightDepthUrl from '../../assets/img/principe-braccio-sx-rilievo.png';
import armLeftUrl from '../../assets/img/principe-braccio-dx.webp';
import armLeftDepthUrl from '../../assets/img/principe-braccio-dx-rilievo.png';

// --- Palette del pack -------------------------------------------------------
const WOOD = '#6B3E22';
const WOOD_DARK = '#432414';
const WOOD_LIGHT = '#8A5530';
const NAVY = '#0D2C52';
const GOLD = '#C2923F';
const GOLD_LIGHT = '#E2B85F';
const CORAL = '#E26033';
const IRON = '#23201D';

// --- Misure dello scafo (unità scena) ---------------------------------------
const HULL_LENGTH = 3.0;
const HULL_BEAM = 0.92;
const HULL_DRAFT = 0.36;       // quanto scende sotto il livello del mare
const HULL_STATIONS = 28;      // sezioni lungo la lunghezza
const HULL_PROFILE = 14;       // punti su mezza sezione, dalla murata alla chiglia
const TRANSOM_HALF = HULL_BEAM / 2; // mezza larghezza massima dello specchio di poppa (per gli uv)

// Pezzi dell'illustrazione a T (pixel dell'immagine a metà risoluzione, generati da tools/principe-parti.py):
// origine del ritaglio (x0, y0) e perno di rotazione dentro il ritaglio
const FIGURE_PARTS = {
  body: { x0: 183, y0: 1, pivot: [109.5, 664] },          // perno: tra i piedi
  armViewerLeft: { x0: 3, y0: 120, pivot: [237, 15] },    // perno: spalla
  armViewerRight: { x0: 355, y0: 121, pivot: [-12.5, 14] },
};
const FIGURE_HEIGHT = 1.12; // in unità scena: in scala con il cassero
const ARM_LOWER = 1.22;     // radianti: da braccia a T a braccia verso il timone
const ARM_FORWARD = 0.5;    // quanto le braccia vengono in avanti, verso la ruota

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

/* --------------------------------------------------------------------------
   Forma dello scafo: tutto dipende da t (0 = prua, 1 = poppa)
   -------------------------------------------------------------------------- */
function halfBeamAt(t) {
  // prua affilata, pancia piena, poppa tagliata dallo specchio
  if (t < 0.5) return (HULL_BEAM / 2) * Math.pow(Math.sin((t / 0.5) * Math.PI / 2), 0.62);
  const back = (t - 0.5) / 0.5;
  return (HULL_BEAM / 2) * (1 - 0.24 * back * back);
}

function sheerAt(t) {
  // insellatura: la murata sale verso il castello di prua e soprattutto verso il cassero di poppa
  let height = 0.46;
  if (t < 0.3) height += 0.2 * Math.pow(1 - t / 0.3, 2);
  if (t > 0.58) height += 0.56 * Math.pow((t - 0.58) / 0.42, 1.6);
  return height;
}

function keelDepthAt(t) {
  return HULL_DRAFT * Math.min(1, t / 0.12 + 0.15);
}

/** fattore di larghezza lungo la mezza sezione: u = 0 murata, u = 1 chiglia */
function sectionWidth(u) {
  if (u < 0.3) return 0.86 + 0.14 * Math.sin((u / 0.3) * Math.PI / 2); // la murata rientra un po' in alto
  return Math.pow(Math.cos(((u - 0.3) / 0.7) * Math.PI / 2), 0.75);
}

function buildHullGeometry() {
  const positions = [];
  const uvs = [];
  const indices = [];
  const ring = HULL_PROFILE * 2; // dritta (murata → chiglia) + sinistra (chiglia → murata)

  for (let i = 0; i <= HULL_STATIONS; i++) {
    const t = i / HULL_STATIONS;
    const x = -HULL_LENGTH / 2 + t * HULL_LENGTH;
    const top = sheerAt(t);
    const depth = keelDepthAt(t);
    const halfBeam = halfBeamAt(t);
    for (let side = 0; side < 2; side++) {
      for (let j = 0; j < HULL_PROFILE; j++) {
        const u = side === 0 ? j / (HULL_PROFILE - 1) : 1 - j / (HULL_PROFILE - 1);
        const y = top - u * (top + depth);
        const z = halfBeam * sectionWidth(u) * (side === 0 ? 1 : -1);
        positions.push(x, y, z);
        // v misura l'altezza reale, così fasce e cannoniere restano dritte lungo lo scafo
        uvs.push(t, (y + HULL_DRAFT) / (1.42 + HULL_DRAFT));
      }
    }
  }
  for (let i = 0; i < HULL_STATIONS; i++) {
    for (let j = 0; j < ring - 1; j++) {
      const a = i * ring + j;
      const b = (i + 1) * ring + j;
      indices.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

/** specchio di poppa: chiude lo scafo dietro, con la stessa sezione dell'ultima stazione */
function buildTransomGeometry() {
  const t = 1;
  const top = sheerAt(t);
  const depth = keelDepthAt(t);
  const halfBeam = halfBeamAt(t);
  const shape = new Shape();
  for (let j = 0; j < HULL_PROFILE; j++) {
    const u = j / (HULL_PROFILE - 1);
    const y = top - u * (top + depth);
    const z = halfBeam * sectionWidth(u);
    if (j === 0) shape.moveTo(z, y); else shape.lineTo(z, y);
  }
  for (let j = HULL_PROFILE - 1; j >= 0; j--) {
    const u = j / (HULL_PROFILE - 1);
    shape.lineTo(-halfBeam * sectionWidth(u), top - u * (top + depth));
  }
  const geometry = new ShapeGeometry(shape);
  // uv dalle coordinate della forma: tutta la poppa in un quadrato di texture
  const uv = geometry.attributes.uv;
  for (let i = 0; i < uv.count; i++) {
    uv.setXY(i, (uv.getX(i) + TRANSOM_HALF) / (TRANSOM_HALF * 2), (uv.getY(i) + HULL_DRAFT) / (sheerAt(1) + HULL_DRAFT));
  }
  geometry.rotateY(Math.PI / 2); // la forma era nel piano XY: la giriamo nel piano ZY
  geometry.translate(HULL_LENGTH / 2, 0, 0);
  return geometry;
}

/** ponte: una striscia che segue l'insellatura, un po' sotto la murata (così la murata fa da parapetto) */
function buildDeckGeometry() {
  const positions = [];
  const uvs = [];
  const indices = [];
  const steps = HULL_STATIONS;
  for (let i = 0; i <= steps; i++) {
    const t = 0.04 + (i / steps) * 0.96;
    const x = -HULL_LENGTH / 2 + t * HULL_LENGTH;
    const y = sheerAt(t) - 0.1;
    const halfWidth = halfBeamAt(t) * 0.84;
    positions.push(x, y, halfWidth, x, y, -halfWidth);
    uvs.push(t * 6, 1, t * 6, 0);
  }
  for (let i = 0; i < steps; i++) {
    const a = i * 2;
    indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

/** punto sulla superficie esterna dello scafo, a una certa altezza: serve per cinte e cannoni */
function hullSurfacePoint(t, y, side, outward = 0) {
  const top = sheerAt(t);
  const depth = keelDepthAt(t);
  const u = Math.min(1, Math.max(0, (top - y) / (top + depth)));
  const z = (halfBeamAt(t) * sectionWidth(u) + outward) * side;
  return new Vector3(-HULL_LENGTH / 2 + t * HULL_LENGTH, y, z);
}

/* --------------------------------------------------------------------------
   Texture disegnate su canvas
   -------------------------------------------------------------------------- */
function makeTexture(canvas) {
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

/** fasciame: tavole orizzontali, fascia blu del nastro con filetti oro, fila di cannoniere */
function drawHullTexture() {
  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  const vToY = (v) => height * (1 - v); // v = 0 in basso

  ctx.fillStyle = WOOD;
  ctx.fillRect(0, 0, width, height);
  // tavole: righe scure con giunti sfalsati
  const plank = 13;
  for (let y = 0, row = 0; y < height; y += plank, row++) {
    ctx.fillStyle = row % 2 ? 'rgba(255,220,170,0.05)' : 'rgba(0,0,0,0.06)';
    ctx.fillRect(0, y, width, plank);
    ctx.fillStyle = 'rgba(30,14,6,0.45)';
    ctx.fillRect(0, y, width, 1.5);
    for (let x = (row * 97) % 160; x < width; x += 160) ctx.fillRect(x, y, 1.5, plank);
  }

  // altezze in unità scena → v (stessa formula degli uv dello scafo)
  const heightToV = (y) => (y + HULL_DRAFT) / (1.42 + HULL_DRAFT);
  // fascia blu sotto la murata
  const bandTop = vToY(heightToV(0.4));
  const bandBottom = vToY(heightToV(0.27));
  ctx.fillStyle = NAVY;
  ctx.fillRect(0, bandTop, width, bandBottom - bandTop);
  ctx.fillStyle = GOLD;
  ctx.fillRect(0, bandTop - 4, width, 4);
  ctx.fillRect(0, bandBottom, width, 4);

  // cannoniere nella fascia: sportelli rossi corallo con cornice oro (solo nella parte centrale)
  const portSize = (bandBottom - bandTop) * 0.62;
  for (let x = width * 0.24; x < width * 0.72; x += width * 0.075) {
    const y = (bandTop + bandBottom) / 2 - portSize / 2;
    ctx.fillStyle = GOLD;
    ctx.fillRect(x - 3, y - 3, portSize + 6, portSize + 6);
    ctx.fillStyle = '#1B0F08';
    ctx.fillRect(x, y, portSize, portSize);
  }

  // linea di galleggiamento: carena più scura (si vede quando l'onda si abbassa)
  ctx.fillStyle = '#2B1A10';
  ctx.fillRect(0, vToY(heightToV(0.02)), width, height);
  ctx.fillStyle = 'rgba(243,227,189,0.35)';
  ctx.fillRect(0, vToY(heightToV(0.02)) - 3, width, 3);

  // capodibanda oro in cima alla murata (le murate arrivano più in alto a poppa: sfumiamo verso l'alto)
  ctx.fillStyle = WOOD_LIGHT;
  ctx.fillRect(0, 0, width, vToY(heightToV(0.62)));
  return makeTexture(canvas);
}

/** rilievo del fasciame: le fughe tra le tavole diventano solchi sotto la luce */
function drawHullBump() {
  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, width, height);
  const plank = 13;
  for (let y = 0, row = 0; y < height; y += plank, row++) {
    ctx.fillStyle = '#3a3a3a';
    ctx.fillRect(0, y, width, 2);
    for (let x = (row * 97) % 160; x < width; x += 160) ctx.fillRect(x, y, 2, plank);
    // venatura: leggere variazioni dentro la tavola
    ctx.fillStyle = row % 2 ? '#8a8a8a' : '#777';
    ctx.fillRect(0, y + 4, width, 3);
  }
  const texture = new CanvasTexture(canvas);
  texture.anisotropy = 4;
  return texture;
}

/** tavolato del ponte: listelli chiari con le fughe scure */
function drawDeckTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#B48450';
  ctx.fillRect(0, 0, 256, 256);
  for (let y = 0, row = 0; y < 256; y += 18, row++) {
    ctx.fillStyle = row % 2 ? 'rgba(255,230,190,0.08)' : 'rgba(60,30,10,0.08)';
    ctx.fillRect(0, y, 256, 18);
    ctx.fillStyle = 'rgba(50,25,10,0.55)';
    ctx.fillRect(0, y, 256, 2);
    ctx.fillRect((row * 83) % 256, y, 2, 18);
  }
  const texture = makeTexture(canvas);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  return texture;
}

/** specchio di poppa: blu nastro, cornice oro, galleria di finestre illuminate */
function drawTransomTexture() {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const heightToY = (y) => size * (1 - (y + HULL_DRAFT) / (sheerAt(1) + HULL_DRAFT));
  ctx.fillStyle = WOOD;
  ctx.fillRect(0, 0, size, size);
  // pannello blu nella parte alta, dove la poppa è più larga
  const top = heightToY(sheerAt(1) - 0.04);
  const bottom = heightToY(0.3);
  ctx.fillStyle = NAVY;
  ctx.fillRect(size * 0.08, top, size * 0.84, bottom - top);
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 8;
  ctx.strokeRect(size * 0.08, top, size * 0.84, bottom - top);
  // finestre: tre archi con luce calda
  const windowWidth = size * 0.16;
  const windowHeight = (bottom - top) * 0.34;
  for (let i = 0; i < 3; i++) {
    const x = size * (0.24 + i * 0.26) - windowWidth / 2;
    const y = top + (bottom - top) * 0.22;
    ctx.fillStyle = GOLD;
    ctx.fillRect(x - 5, y - 5, windowWidth + 10, windowHeight + 10);
    const glow = ctx.createLinearGradient(0, y, 0, y + windowHeight);
    glow.addColorStop(0, '#FFE6A6');
    glow.addColorStop(1, '#E2A04A');
    ctx.fillStyle = glow;
    ctx.fillRect(x, y, windowWidth, windowHeight);
    ctx.fillStyle = NAVY;
    ctx.fillRect(x + windowWidth / 2 - 2, y, 4, windowHeight);
  }
  // filetto oro più in basso, come sulla fiancata
  ctx.fillStyle = GOLD;
  ctx.fillRect(0, heightToY(0.27), size, 6);
  ctx.fillStyle = '#2B1A10';
  ctx.fillRect(0, heightToY(0.02), size, size);
  return makeTexture(canvas);
}

/** galleria di poppa sul fianco: pannello blu con finestre calde e cornice oro */
function drawGalleryTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 160;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = NAVY;
  ctx.fillRect(0, 0, 256, 160);
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = 10;
  ctx.strokeRect(5, 5, 246, 150);
  for (let i = 0; i < 3; i++) {
    const x = 28 + i * 72;
    ctx.fillStyle = GOLD;
    ctx.fillRect(x - 4, 36, 56, 76);
    const glow = ctx.createLinearGradient(0, 40, 0, 108);
    glow.addColorStop(0, '#FFE6A6');
    glow.addColorStop(1, '#D98E3E');
    ctx.fillStyle = glow;
    ctx.fillRect(x, 40, 48, 68);
    ctx.fillStyle = NAVY;
    ctx.fillRect(x + 22, 40, 4, 68);
    ctx.fillRect(x, 72, 48, 3);
  }
  return makeTexture(canvas);
}

/** tela della vela: pannelli verticali, bordi rinforzati, logo al centro */
function drawSailTexture(logoImage, { width, height, withLogo }) {
  const pxPerUnit = 640;
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(width * pxPerUnit);
  canvas.height = Math.round(height * pxPerUnit);
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  const cloth = ctx.createLinearGradient(0, 0, 0, h);
  cloth.addColorStop(0, '#F6EBD0');
  cloth.addColorStop(1, '#E6D3AA');
  ctx.fillStyle = cloth;
  ctx.fillRect(0, 0, w, h);

  // ferzi: strisce di tela cucite in verticale
  const panels = Math.round(width * 7);
  for (let i = 1; i < panels; i++) {
    const x = (i / panels) * w;
    ctx.fillStyle = 'rgba(120,80,40,0.16)';
    ctx.fillRect(x - 1, 0, 2, h);
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.fillRect(x + 1, 0, 1, h);
  }
  // gratile: bordo cucito tutto attorno
  ctx.strokeStyle = 'rgba(120,80,40,0.45)';
  ctx.lineWidth = 10;
  ctx.strokeRect(5, 5, w - 10, h - 10);
  // matafioni: fila di puntini di terzaroli vicino al pennone
  ctx.fillStyle = 'rgba(90,60,30,0.5)';
  for (let x = w * 0.06; x < w * 0.95; x += w * 0.045) {
    ctx.beginPath();
    ctx.arc(x, h * 0.12, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  if (withLogo) {
    // la nave si allontana: vediamo il retro della vela, quindi il logo va disegnato specchiato
    ctx.save();
    ctx.translate(w, 0);
    ctx.scale(-1, 1);
    if (logoImage) {
      const logoWidth = w * 0.92;
      const logoHeight = logoWidth * (logoImage.height / logoImage.width);
      ctx.drawImage(logoImage, (w - logoWidth) / 2, h * 0.54 - logoHeight / 2, logoWidth, logoHeight);
    } else {
      // senza immagine: il nome sul nastro blu
      ctx.fillStyle = NAVY;
      ctx.fillRect(w * 0.08, h * 0.38, w * 0.84, h * 0.3);
      ctx.fillStyle = GOLD_LIGHT;
      ctx.font = `400 ${Math.round(h * 0.12)}px "Lilita One", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('Il Principe Pescatore', w / 2, h * 0.57);
    }
    ctx.restore();
  }
  return makeTexture(canvas);
}

/** bandierina a coda di rondine: blu nastro con bordo oro */
function drawPennantTexture(color) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 256, 64);
  ctx.fillStyle = GOLD_LIGHT;
  ctx.fillRect(0, 0, 256, 6);
  ctx.fillRect(0, 58, 256, 6);
  return makeTexture(canvas);
}

/* --------------------------------------------------------------------------
   Vele: piano suddiviso, gonfiato verso prua. La forma si aggiorna a ogni frame
   (poche centinaia di vertici) per un respiro leggero della tela.
   -------------------------------------------------------------------------- */
const SAIL_SEGMENTS_X = 14;
const SAIL_SEGMENTS_Y = 10;

class Sail {
  constructor({ width, height, depth, material, phase, triangular = false }) {
    this.geometry = new PlaneGeometry(width, height, SAIL_SEGMENTS_X, SAIL_SEGMENTS_Y);
    if (triangular) this.makeTriangular(width, height);
    this.base = this.geometry.attributes.position.array.slice();
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.phase = phase;
    this.mesh = new Mesh(this.geometry, material);
    this.update(0);
  }

  /** fiocco: stringiamo i vertici verso l'alto, così il piano diventa un triangolo */
  makeTriangular(width, height) {
    const positions = this.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const v = positions[i + 1] / height + 0.5; // 0 in basso, 1 in alto
      positions[i] = -width / 2 + (positions[i] + width / 2) * (1 - v);
    }
  }

  update(time) {
    const positions = this.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const u = this.base[i] / this.width + 0.5;        // 0..1 lungo il pennone
      const v = this.base[i + 1] / this.height + 0.5;   // 0 in basso, 1 al pennone
      // pancia massima a un terzo dell'altezza; in alto la tela è legata al pennone
      const across = Math.max(0, 1 - Math.pow(2 * u - 1, 2)); // max: evita pow di un negativo per arrotondamento
      const along = Math.sin(Math.PI * (1 - v) * 0.78);
      const breathe = 1 + Math.sin(time * 1.3 + this.phase) * 0.06;
      const ripple = Math.sin(time * 3.1 + u * 5 + v * 3 + this.phase) * 0.012 * (1 - v);
      positions[i + 2] = this.depth * Math.pow(across, 0.85) * along * breathe + ripple;
    }
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.computeVertexNormals();
  }
}

/* --------------------------------------------------------------------------
   Il galeone
   -------------------------------------------------------------------------- */
// alberi: x sullo scafo, altezza della testa d'albero, vele dal basso verso l'alto
const MASTS = [
  { name: 'trinchetto', x: -0.82, height: 2.45, sails: [
    { y: 1.08, width: 1.22, height: 0.8, logo: false },
    { y: 1.82, width: 0.92, height: 0.56, logo: false },
  ] },
  { name: 'maestra', x: 0.08, height: 2.95, sails: [
    { y: 1.16, width: 1.62, height: 1.06, logo: true },
    { y: 2.14, width: 1.16, height: 0.66, logo: false },
  ] },
  { name: 'mezzana', x: 0.86, height: 2.05, sails: [] },
];

export class Galleon {
  constructor() {
    this.group = new Group();
    this.sails = [];
    this.pennants = [];
    this.disposables = [];
    // rotazione dei pennoni: la nave si allontana, le vele piene di vento girate verso chi guarda
    this.brace = -0.8;
  }

  async init() {
    const load = (url) => loadImage(url).catch(() => null);
    const [logoImage, ...figureImages] = await Promise.all([
      load(logoUrl),
      load(bodyUrl), load(bodyDepthUrl),
      load(armRightUrl), load(armRightDepthUrl),
      load(armLeftUrl), load(armLeftDepthUrl),
    ]);

    this.buildHull();
    this.buildMasts(logoImage);
    this.buildRigging();
    this.buildHelm(figureImages.every(Boolean) ? figureImages : null);

    // tutto proietta e riceve ombre: è l'ombra delle vele sul ponte che dà profondità alla nave
    this.group.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
    return this;
  }

  track(...items) {
    this.disposables.push(...items);
    return items[0];
  }

  buildHull() {
    this.woodMaterial = this.track(new MeshStandardMaterial({ color: WOOD_DARK, roughness: 0.75 }));
    this.goldMaterial = this.track(new MeshStandardMaterial({ color: GOLD, roughness: 0.32, metalness: 0.75 }));
    const navyMaterial = this.track(new MeshStandardMaterial({ color: NAVY, roughness: 0.55 }));
    this.navyMaterial = navyMaterial;

    const hullMaterial = this.track(new MeshStandardMaterial({
      map: this.track(drawHullTexture()),
      bumpMap: this.track(drawHullBump()),
      bumpScale: 1.6,
      roughness: 0.72,
      metalness: 0.02,
      side: DoubleSide,
    }));
    this.group.add(new Mesh(this.track(buildHullGeometry()), hullMaterial));

    const transomMaterial = this.track(new MeshStandardMaterial({ map: this.track(drawTransomTexture()), roughness: 0.6, side: DoubleSide }));
    this.group.add(new Mesh(this.track(buildTransomGeometry()), transomMaterial));

    const deckMaterial = this.track(new MeshStandardMaterial({ map: this.track(drawDeckTexture()), roughness: 0.85, side: DoubleSide }));
    this.group.add(new Mesh(this.track(buildDeckGeometry()), deckMaterial));

    this.buildWales();
    this.buildCannons();
    this.buildQuarterGalleries();

    // bompresso: l'asta che sporge dalla prua
    const bowsprit = new Mesh(this.track(new CylinderGeometry(0.025, 0.045, 1.1, 10)), this.woodMaterial);
    bowsprit.position.set(-HULL_LENGTH / 2 - 0.32, 0.78, 0);
    bowsprit.rotation.z = Math.PI / 2 - 0.32;
    this.group.add(bowsprit);
    this.bowspritTip = new Vector3(-HULL_LENGTH / 2 - 0.84, 0.95, 0);

    // tre fanali di poppa in oro
    const lanternGeometry = this.track(new SphereGeometry(0.055, 16, 10));
    const postGeometry = this.track(new CylinderGeometry(0.012, 0.012, 0.22, 6));
    for (const z of [-0.26, 0, 0.26]) {
      const lift = z === 0 ? 0.36 : 0.3;
      const lantern = new Mesh(lanternGeometry, this.goldMaterial);
      lantern.position.set(HULL_LENGTH / 2 - 0.02, sheerAt(1) + lift, z);
      this.group.add(lantern);
      const post = new Mesh(postGeometry, this.woodMaterial);
      post.position.set(HULL_LENGTH / 2 - 0.02, sheerAt(1) + lift - 0.13, z);
      this.group.add(post);
    }
  }

  /** cinte: listoni sporgenti lungo lo scafo, danno spessore alla fiancata */
  buildWales() {
    const wales = [
      { y: 0.4, radius: 0.02, material: this.goldMaterial },
      { y: 0.27, radius: 0.018, material: this.goldMaterial },
      { y: 0.1, radius: 0.024, material: this.woodMaterial },
    ];
    for (const side of [1, -1]) {
      for (const wale of wales) {
        const points = [];
        for (let i = 0; i <= 40; i++) {
          const t = 0.03 + (i / 40) * 0.965;
          // vicino alla prua la cinta deve stare sotto l'insellatura
          const y = Math.min(wale.y + (t > 0.6 ? 0.05 * (t - 0.6) : 0), sheerAt(t) - 0.04);
          points.push(hullSurfacePoint(t, y, side, wale.radius * 0.6));
        }
        const geometry = this.track(new TubeGeometry(new CatmullRomCurve3(points), 80, wale.radius, 6, false));
        this.group.add(new Mesh(geometry, wale.material));
      }
      // capodibanda: corrimano in cima alla murata, segue l'insellatura
      const railPoints = [];
      for (let i = 0; i <= 50; i++) {
        const t = 0.02 + (i / 50) * 0.975;
        railPoints.push(hullSurfacePoint(t, sheerAt(t), side, -0.004));
      }
      const railGeometry = this.track(new TubeGeometry(new CatmullRomCurve3(railPoints), 100, 0.022, 6, false));
      this.group.add(new Mesh(railGeometry, this.woodMaterial));
    }
  }

  /** cannoni che sporgono dalle cannoniere disegnate nella fascia blu */
  buildCannons() {
    const ironMaterial = this.track(new MeshStandardMaterial({ color: IRON, roughness: 0.45, metalness: 0.7 }));
    const barrel = this.track(new CylinderGeometry(0.019, 0.025, 0.16, 10));
    for (const side of [1, -1]) {
      for (let t = 0.24 + 0.0375 * 0.62; t < 0.72; t += 0.075) {
        const point = hullSurfacePoint(t, 0.335, side, 0.035);
        const cannon = new Mesh(barrel, ironMaterial);
        cannon.position.copy(point);
        cannon.rotation.x = (Math.PI / 2) * side; // il cilindro nasce verticale: lo puntiamo fuori bordo
        this.group.add(cannon);
      }
    }
  }

  /** gallerie di poppa sui due fianchi: piccoli balconi chiusi con le finestre accese */
  buildQuarterGalleries() {
    const texture = this.track(drawGalleryTexture());
    const faceMaterial = this.track(new MeshStandardMaterial({ map: texture, roughness: 0.5 }));
    const geometry = this.track(new BoxGeometry(0.36, 0.2, 0.08));
    const capGeometry = this.track(new CylinderGeometry(0.0, 0.07, 0.12, 4, 1));
    for (const side of [1, -1]) {
      const t = 0.9;
      const point = hullSurfacePoint(t, 0.66, side, 0.04);
      const materials = [this.navyMaterial, this.navyMaterial, this.goldMaterial, this.goldMaterial, faceMaterial, faceMaterial];
      const gallery = new Mesh(geometry, materials);
      gallery.position.copy(point);
      gallery.rotation.y = side > 0 ? 0 : Math.PI;
      this.group.add(gallery);
      // cupoletta oro sotto la galleria
      const cap = new Mesh(capGeometry, this.goldMaterial);
      cap.position.set(point.x, point.y - 0.16, point.z);
      cap.rotation.x = Math.PI;
      cap.rotation.y = Math.PI / 4;
      this.group.add(cap);
    }
  }

  buildMasts(logoImage) {
    const mastGeometry = this.track(new CylinderGeometry(0.028, 0.045, 1, 10));
    const yardGeometry = this.track(new CylinderGeometry(0.016, 0.016, 1, 6));
    const topGeometry = this.track(new CylinderGeometry(0.11, 0.08, 0.07, 12));
    let phase = 0;

    for (const mast of MASTS) {
      const t = (mast.x + HULL_LENGTH / 2) / HULL_LENGTH;
      const deckY = sheerAt(t) - 0.1;
      const mastMesh = new Mesh(mastGeometry, this.woodMaterial);
      mastMesh.scale.y = mast.height;
      mastMesh.position.set(mast.x, deckY + mast.height / 2, 0);
      this.group.add(mastMesh);
      mast.topY = deckY + mast.height;
      mast.deckY = deckY;

      // coffa a metà albero
      const top = new Mesh(topGeometry, this.woodMaterial);
      top.position.set(mast.x, deckY + mast.height * 0.62, 0);
      this.group.add(top);

      // pennone + vela: il gruppo ruota attorno all'albero (bracciatura)
      for (const sailSpec of mast.sails) {
        const yard = new Group();
        // pennone appena a poppavia dell'albero: guardando la nave da dietro l'albero resta dietro la tela e non taglia il logo
        yard.position.set(mast.x + 0.05, deckY + sailSpec.y + sailSpec.height / 2, 0);
        yard.rotation.y = this.brace;
        this.group.add(yard);

        const yardMesh = new Mesh(yardGeometry, this.woodMaterial);
        yardMesh.scale.y = sailSpec.width * 1.08;
        yardMesh.rotation.x = Math.PI / 2; // il cilindro nasce verticale: lo stendiamo lungo Z
        yard.add(yardMesh);

        const texture = this.track(drawSailTexture(logoImage, { width: sailSpec.width, height: sailSpec.height, withLogo: sailSpec.logo }));
        const material = this.track(new MeshStandardMaterial({ map: texture, roughness: 0.92, side: DoubleSide }));
        // pancia verso poppa (profondità negativa): la parte convessa della tela guarda verso di noi
        const sail = new Sail({ width: sailSpec.width, height: sailSpec.height, depth: -sailSpec.height * 0.24, material, phase: phase += 1.3 });
        this.track(sail.geometry);
        sail.mesh.rotation.y = -Math.PI / 2;            // larghezza lungo Z; la faccia anteriore guarda verso prua (-X)
        sail.mesh.position.y = -sailSpec.height / 2 - 0.02;
        yard.add(sail.mesh);
        this.sails.push(sail);
      }

      // bandierina in testa d'albero
      const pennantTexture = this.track(drawPennantTexture(mast.name === 'maestra' ? CORAL : NAVY));
      const pennantMaterial = this.track(new MeshStandardMaterial({ map: pennantTexture, roughness: 0.8, side: DoubleSide }));
      const pennant = new Sail({ width: 0.5, height: 0.1, depth: 0, material: pennantMaterial, phase: phase += 0.7 });
      this.track(pennant.geometry);
      pennant.mesh.position.set(mast.x + 0.25, mast.topY - 0.02, 0);
      pennant.isPennant = true;
      this.group.add(pennant.mesh);
      this.pennants.push(pennant);
    }

    // fiocco tra il bompresso e il trinchetto
    const jibTexture = this.track(drawSailTexture(null, { width: 0.8, height: 1.1, withLogo: false }));
    const jibMaterial = this.track(new MeshStandardMaterial({ map: jibTexture, roughness: 0.92, side: DoubleSide }));
    const jib = new Sail({ width: 0.8, height: 1.1, depth: 0.12, material: jibMaterial, phase: 4, triangular: true });
    this.track(jib.geometry);
    jib.mesh.position.set(-HULL_LENGTH / 2 - 0.02, 1.38, 0);
    jib.mesh.rotation.y = Math.PI; // la tela guarda di lato, nel piano dello scafo
    this.group.add(jib.mesh);
    this.sails.push(jib);

  }

  /** sartiame: stralli tra gli alberi e sartie verso le murate (semplici linee, 1px) */
  buildRigging() {
    const points = [];
    const push = (a, b) => points.push(a.x, a.y, a.z, b.x, b.y, b.z);
    const [fore, main, mizzen] = MASTS;
    const head = (mast, f = 1) => new Vector3(mast.x, mast.deckY + mast.height * f, 0);

    push(head(fore, 0.95), this.bowspritTip);
    push(head(main, 0.97), head(fore, 0.95));
    push(head(mizzen, 0.95), head(main, 0.97));

    // sartie: tre per lato dalla coffa alla murata
    for (const mast of MASTS) {
      const t = (mast.x + HULL_LENGTH / 2) / HULL_LENGTH;
      const halfBeam = halfBeamAt(t) * 0.88;
      const top = head(mast, 0.62);
      for (const side of [1, -1]) {
        // la mezzana non ha sartie sul lato verso di noi: passerebbero davanti al Principe
        if (mast.name === 'mezzana' && side > 0) continue;
        const feet = [-0.18, -0.06, 0.06, 0.18].map((dx) => new Vector3(mast.x + dx, sheerAt(t + dx / HULL_LENGTH), halfBeam * side));
        feet.forEach((foot) => push(top, foot));
        // griselle: i gradini di corda tra una sartia e l'altra
        for (let f = 0.12; f < 0.9; f += 0.075) {
          for (let k = 0; k < feet.length - 1; k++) {
            push(feet[k].clone().lerp(top, f), feet[k + 1].clone().lerp(top, f));
          }
        }
      }
    }
    const geometry = this.track(new BufferGeometry());
    geometry.setAttribute('position', new Float32BufferAttribute(points, 3));
    const material = this.track(new LineBasicMaterial({ color: 0x2b1a10, transparent: true, opacity: 0.75 }));
    this.group.add(new LineSegments(geometry, material));
  }

  /** cassero: murate alte con balaustri, il Principe e il timone tra le sue mani */
  buildHelm(figureImages) {
    const standT = 0.9;
    const standX = -HULL_LENGTH / 2 + standT * HULL_LENGTH;
    const deckY = sheerAt(standT) - 0.1;
    // il Principe guarda verso la dritta, un po' verso poppa: cioè verso chi guarda la scena
    const facing = 0.3;

    this.buildQuarterdeckBulwarks();

    const figure = new Group();
    // un filo verso dritta: l'albero di mezzana resta dietro di lui
    figure.position.set(standX, deckY, 0.1);
    figure.rotation.y = facing;
    this.group.add(figure);

    // dove stanno le mani (coordinate della figura): senza immagini usiamo una posa di riserva
    let hands = [new Vector3(-0.2, 0.62, 0.2), new Vector3(0.2, 0.62, 0.2)];
    if (figureImages) hands = this.buildPrincipe(figure, figureImages);

    // timone: ruota a raggi con le maniglie; centro tra le mani, maniglie dove arrivano le dita
    const center = hands[0].clone().add(hands[1]).multiplyScalar(0.5);
    const reach = hands[0].distanceTo(hands[1]) / 2;
    const wheel = new Group();
    const rimRadius = reach * 0.78;
    wheel.add(new Mesh(this.track(new TorusGeometry(rimRadius, 0.016, 10, 32)), this.woodMaterial));
    const spokeGeometry = this.track(new CylinderGeometry(0.008, 0.006, reach * 2, 6));
    const knobGeometry = this.track(new SphereGeometry(0.015, 8, 6));
    for (let i = 0; i < 4; i++) {
      const spoke = new Mesh(spokeGeometry, this.woodMaterial);
      spoke.rotation.z = (i / 4) * Math.PI;
      wheel.add(spoke);
    }
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const knob = new Mesh(knobGeometry, this.woodMaterial);
      knob.position.set(Math.cos(angle) * reach, Math.sin(angle) * reach, 0);
      wheel.add(knob);
    }
    const hub = new Mesh(this.track(new CylinderGeometry(0.035, 0.035, 0.05, 14)), this.goldMaterial);
    hub.rotation.x = Math.PI / 2;
    wheel.add(hub);
    wheel.position.copy(center);
    wheel.position.z += 0.015; // la ruota appena davanti ai palmi
    figure.add(wheel);
    this.wheelSpin = wheel;

    const pedestal = new Mesh(this.track(new BoxGeometry(0.07, 1, 0.07)), this.navyMaterial);
    pedestal.scale.y = center.y;
    pedestal.position.set(center.x, center.y / 2, center.z - 0.04);
    figure.add(pedestal);
  }

  /**
   * Il Principe a figura intera. L'illustrazione a T è divisa in corpo e due braccia;
   * ogni pezzo fa da texture su una superficie gonfiata secondo la sua mappa di profondità.
   * Le braccia ruotano dalle spalle (giù e in avanti) fino alla ruota.
   * Restituisce la posizione delle due mani, per costruirci intorno il timone.
   */
  buildPrincipe(figure, [bodyImage, bodyDepth, armVLImage, armVLDepth, armVRImage, armVRDepth]) {
    const pixel = FIGURE_HEIGHT / bodyImage.height; // unità scena per pixel dell'illustrazione
    const body = this.buildRelief(bodyImage, bodyDepth, { pixel, pivot: FIGURE_PARTS.body.pivot, depth: 0.12, segments: 64 });
    figure.add(body);

    const bodyPivot = FIGURE_PARTS.body;
    const shoulder = (part) => new Vector3(
      (part.x0 + part.pivot[0] - (bodyPivot.x0 + bodyPivot.pivot[0])) * pixel,
      ((bodyPivot.y0 + bodyPivot.pivot[1]) - (part.y0 + part.pivot[1])) * pixel,
      -0.015, // spalle appena dietro il busto: l'attacco del braccio resta nascosto
    );

    const hands = [];
    const arms = [
      { image: armVLImage, depth: armVLDepth, part: FIGURE_PARTS.armViewerLeft, side: -1 },
      { image: armVRImage, depth: armVRDepth, part: FIGURE_PARTS.armViewerRight, side: 1 },
    ];
    for (const { image, depth, part, side } of arms) {
      const arm = this.buildRelief(image, depth, { pixel, pivot: part.pivot, depth: 0.05, segments: 48 });
      arm.position.copy(shoulder(part));
      // prima giù (attorno a Z), poi in avanti (attorno a X): ordine XYZ = Rz applicata per prima
      arm.rotation.set(-ARM_FORWARD, 0, side < 0 ? ARM_LOWER : -ARM_LOWER, 'XYZ');
      figure.add(arm);

      // il palmo: poco prima della punta delle dita, a metà altezza della manica
      const tipX = side < 0 ? 0 : image.width;
      const palm = new Vector3(
        (tipX - side * 22 - part.pivot[0]) * pixel,
        (part.pivot[1] - image.height * 0.55) * pixel,
        0.03,
      );
      arm.updateMatrix();
      hands.push(palm.applyMatrix4(arm.matrix));
    }
    return hands;
  }

  /** superficie in rilievo da un'immagine e dalla sua mappa di profondità, con un retro scuro per lo spessore */
  buildRelief(image, depthImage, { pixel, pivot, depth, segments }) {
    const width = image.width * pixel;
    const height = image.height * pixel;
    const segmentsX = segments;
    const segmentsY = Math.max(4, Math.round(segments * (height / width)));

    const canvas = document.createElement('canvas');
    canvas.width = depthImage.width;
    canvas.height = depthImage.height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(depthImage, 0, 0);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const sampleDepth = (u, v) => {
      const x = Math.min(canvas.width - 1, Math.round(u * (canvas.width - 1)));
      const y = Math.min(canvas.height - 1, Math.round((1 - v) * (canvas.height - 1)));
      return pixels[(y * canvas.width + x) * 4] / 255;
    };

    const geometry = this.track(new PlaneGeometry(width, height, segmentsX, segmentsY));
    const positions = geometry.attributes.position;
    const uvs = geometry.attributes.uv;
    for (let i = 0; i < positions.count; i++) {
      positions.setZ(i, sampleDepth(uvs.getX(i), uvs.getY(i)) * depth);
    }
    // il perno (in pixel del ritaglio) diventa l'origine
    geometry.translate(-(pivot[0] - image.width / 2) * pixel, (pivot[1] - image.height / 2) * pixel, 0);
    geometry.computeVertexNormals();

    const texture = this.track(new CanvasTexture(image));
    texture.colorSpace = SRGBColorSpace;
    texture.anisotropy = 8;
    // un po' di emissione: l'illustrazione ha già le sue ombre dipinte, la luce della scena le completa
    const frontMaterial = this.track(new MeshStandardMaterial({ map: texture, emissiveMap: texture, emissive: 0x666666, roughness: 0.8, alphaTest: 0.5 }));
    const backMaterial = this.track(new MeshStandardMaterial({ map: texture, color: 0x2a3550, roughness: 0.9, alphaTest: 0.5 }));

    const relief = new Group();
    const front = new Mesh(geometry, frontMaterial);
    const back = new Mesh(geometry, backMaterial);
    back.scale.z = -0.55; // stessa sagoma schiacciata all'indietro: visto di sbieco ha spessore
    relief.add(front, back);
    return relief;
  }

  /** murate del cassero più alte: pannello blu, balaustri oro, corrimano. Nascondono la base del Principe */
  buildQuarterdeckBulwarks() {
    const height = 0.24;
    const balusterGeometry = this.track(new CylinderGeometry(0.011, 0.016, height * 0.8, 8));
    for (const side of [1, -1]) {
      const positions = [];
      const indices = [];
      const railPoints = [];
      const steps = 16;
      for (let i = 0; i <= steps; i++) {
        const t = 0.64 + (i / steps) * 0.355;
        const point = hullSurfacePoint(t, sheerAt(t), side, -0.03);
        positions.push(point.x, point.y - 0.02, point.z, point.x, point.y + height, point.z);
        railPoints.push(new Vector3(point.x, point.y + height + 0.012, point.z + 0.012 * side));
        if (i < steps) {
          const a = i * 2;
          indices.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
        }
        // balaustri all'esterno del pannello
        if (i % 1 === 0) {
          const baluster = new Mesh(balusterGeometry, this.goldMaterial);
          baluster.position.set(point.x, point.y + height * 0.48, point.z + 0.02 * side);
          this.group.add(baluster);
        }
      }
      const geometry = this.track(new BufferGeometry());
      geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
      geometry.setIndex(indices);
      geometry.computeVertexNormals();
      const panel = new Mesh(geometry, this.track(new MeshStandardMaterial({ color: NAVY, roughness: 0.55, side: DoubleSide })));
      this.group.add(panel);
      const rail = this.track(new TubeGeometry(new CatmullRomCurve3(railPoints), 40, 0.02, 6, false));
      this.group.add(new Mesh(rail, this.woodMaterial));
    }
    // specchio: il corrimano chiude la poppa
    const sternRail = new Mesh(this.track(new BoxGeometry(0.04, 0.04, halfBeamAt(1) * 1.72)), this.woodMaterial);
    sternRail.position.set(HULL_LENGTH / 2 - 0.03, sheerAt(1) + height, 0);
    this.group.add(sternRail);
  }

  /** chiamato a ogni frame: tela che respira, bandierine che sventolano, timone che si muove */
  update(time) {
    for (const sail of this.sails) sail.update(time);
    for (const pennant of this.pennants) {
      const positions = pennant.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const u = pennant.base[i] / pennant.width + 0.5;
        positions[i + 2] = Math.sin(time * 5 + u * 7 + pennant.phase) * 0.05 * u;
        // coda di rondine: la punta si stringe
        positions[i + 1] = pennant.base[i + 1] * (1 - u * 0.75);
      }
      pennant.geometry.attributes.position.needsUpdate = true;
      pennant.geometry.computeVertexNormals();
    }
    // il timone corregge la rotta: oscillazione lenta della ruota
    if (this.wheelSpin) this.wheelSpin.rotation.z = Math.sin(time * 0.4) * 0.5;
  }

  dispose() {
    for (const item of this.disposables) item.dispose?.();
    this.group.removeFromParent();
  }
}
