/* ==========================================================================
   OceanScene — il mare della hero di Principe Pescatore.

   Cosa fa:   superficie del mare con onde di Gerstner calcolate nel vertex
              shader, luce del sole sulle creste, foschia all'orizzonte che si
              fonde con il cielo in CSS. Il galeone del Principe (galleon.js)
              galleggia seguendo le onde (la stessa funzione d'onda è replicata in JS).
   Perché:    il mare è il mondo del marchio; il galeone con il logo sulle vele
              e il Principe al timone apre il racconto del viaggio.
   Assunzioni: il canvas sta dentro un container position:relative a tutta
              altezza; il cielo è un gradiente CSS dietro al canvas (alpha).
              Il colore HORIZON qui sotto deve restare uguale a --orizzonte in CSS.

   Esposto come global PPOcean (bundle IIFE, così funziona anche da file://).
   ========================================================================== */

import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  PlaneGeometry,
  ShaderMaterial,
  Mesh,
  Vector2,
  Vector3,
  Vector4,
  HemisphereLight,
  DirectionalLight,
  SRGBColorSpace,
  PCFSoftShadowMap,
  NeutralToneMapping,
  PMREMGenerator,
  Timer,
  MathUtils,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Galleon } from './galleon.js';

// --- Palette (valori sRGB "grezzi": lo shader li scrive così come sono) -----
const rgb = (hex) => new Vector3(((hex >> 16) & 255) / 255, ((hex >> 8) & 255) / 255, (hex & 255) / 255);
// toni presi dal pack: blu del nastro per l'acqua, pergamena per cielo e foschia
const HORIZON = 0xE8CC8E;      // = --orizzonte in style.css
const SKY_ZENITH = 0xD9B36A;   // pergamena calda riflessa sulle onde
const WATER_DEEP = 0x0A2342;   // blu del nastro, scurito
const WATER_SHALLOW = 0x245C80;
const SUN_COLOR = 0xFFE2A8;
const WATER_SCATTER = 0x3E8A8C; // verde-azzurro della luce dentro le creste
const FOAM_COLOR = 0xF4EBD6;    // schiuma color crema, non bianco freddo

// --- Onde: direzione (x,z), ripidità (0..1), lunghezza d'onda in unità scena -
// Quattro onde con direzioni diverse evitano la ripetizione "a binario".
const WAVES = [
  { dir: [1.0, 0.35], steepness: 0.15, length: 12.0 },
  { dir: [0.6, 1.0], steepness: 0.12, length: 7.0 },
  { dir: [-0.4, 0.9], steepness: 0.09, length: 4.0 },
  { dir: [0.9, -0.5], steepness: 0.06, length: 2.3 },
];
const GRAVITY = 9.8;
const WAVE_TIME_SCALE = 0.55; // rallenta il mare: più calmo, più "da cartolina"

// Precalcolo per shader e JS: k, velocità di fase, ampiezza, direzione normalizzata
const waveData = WAVES.map(({ dir, steepness, length }) => {
  const k = (2 * Math.PI) / length;
  const phaseSpeed = Math.sqrt(GRAVITY / k);
  const d = new Vector2(dir[0], dir[1]).normalize();
  return { k, phaseSpeed, amplitude: steepness / k, steepness, dirX: d.x, dirZ: d.y };
});

const PLANE_SIZE = 120;
const PLANE_SEGMENTS = 150; // ~45k triangoli: dentro il budget di 50k

const vertexShader = /* glsl */ `
  // Onde di Gerstner (GPU Gems, cap. 1): spostano il vertice anche in orizzontale,
  // così le creste si stringono e le gole si allargano come nel mare vero.
  precision highp float;

  uniform float uTime;
  uniform vec4 uWaveA; // xy = direzione, z = k, w = ampiezza
  uniform vec4 uWaveB;
  uniform vec4 uWaveC;
  uniform vec4 uWaveD;
  uniform vec4 uSpeeds; // velocità di fase per onda
  uniform vec4 uSteep;  // ripidità per onda (serve per la normale)

  varying vec3 vWorldPos;
  varying vec3 vNormal;
  varying float vHeight;

  void addWave(vec4 wave, float speed, float steep, vec3 basePos,
               inout vec3 displaced, inout vec3 tangent, inout vec3 binormal) {
    vec2 dir = wave.xy;
    float k = wave.z;
    float amplitude = wave.w;
    float phase = k * (dot(dir, basePos.xz) - speed * uTime);
    float cosP = cos(phase);
    float sinP = sin(phase);

    displaced.x += dir.x * amplitude * cosP;
    displaced.y += amplitude * sinP;
    displaced.z += dir.y * amplitude * cosP;

    tangent  += vec3(-dir.x * dir.x * steep * sinP, dir.x * steep * cosP, -dir.x * dir.y * steep * sinP);
    binormal += vec3(-dir.x * dir.y * steep * sinP, dir.y * steep * cosP, -dir.y * dir.y * steep * sinP);
  }

  void main() {
    vec3 basePos = (modelMatrix * vec4(position, 1.0)).xyz;
    vec3 displaced = basePos;
    vec3 tangent = vec3(1.0, 0.0, 0.0);
    vec3 binormal = vec3(0.0, 0.0, 1.0);

    addWave(uWaveA, uSpeeds.x, uSteep.x, basePos, displaced, tangent, binormal);
    addWave(uWaveB, uSpeeds.y, uSteep.y, basePos, displaced, tangent, binormal);
    addWave(uWaveC, uSpeeds.z, uSteep.z, basePos, displaced, tangent, binormal);
    addWave(uWaveD, uSpeeds.w, uSteep.w, basePos, displaced, tangent, binormal);

    vNormal = normalize(cross(binormal, tangent));
    vWorldPos = displaced;
    vHeight = displaced.y;
    gl_Position = projectionMatrix * viewMatrix * vec4(displaced, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float uTime;
  // colori (sRGB grezzi)
  uniform vec3 uHorizon;
  uniform vec3 uZenith;
  uniform vec3 uDeep;
  uniform vec3 uShallow;
  uniform vec3 uSunColor;
  uniform vec3 uScatter;
  uniform vec3 uFoam;
  // luce e atmosfera
  uniform vec3 uSunDir;
  uniform float uFogNear;
  uniform float uFogFar;
  uniform float uMaxAmplitude; // somma delle ampiezze: normalizza l'altezza per la schiuma
  uniform vec3 uPacks[3];      // x, z, scala: tre punti lungo lo scafo, schiuma sulla linea di galleggiamento

  varying vec3 vWorldPos;
  varying vec3 vNormal;
  varying float vHeight;

  // value noise: rompe la regolarità di increspature e schiuma
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  // increspature fini: somma di onde corte con derivata analitica (pendenza in x e z)
  vec2 rippleSlope(vec2 p, float t) {
    vec2 slope = vec2(0.0);
    vec2 d1 = normalize(vec2(0.83, 0.56)); slope += d1 * 3.1 * 0.020 * cos(dot(d1, p) * 3.1 + t * 2.3);
    vec2 d2 = normalize(vec2(-0.41, 0.91)); slope += d2 * 4.7 * 0.014 * cos(dot(d2, p) * 4.7 + t * 2.9);
    vec2 d3 = normalize(vec2(0.97, -0.24)); slope += d3 * 7.3 * 0.009 * cos(dot(d3, p) * 7.3 + t * 3.6);
    vec2 d4 = normalize(vec2(-0.73, -0.68)); slope += d4 * 11.0 * 0.006 * cos(dot(d4, p) * 11.0 + t * 4.4);
    vec2 d5 = normalize(vec2(0.12, 0.99)); slope += d5 * 17.0 * 0.004 * cos(dot(d5, p) * 17.0 + t * 5.3);
    return slope;
  }

  void main() {
    vec3 toCamera = cameraPosition - vWorldPos;
    float distanceToCamera = length(toCamera);
    vec3 viewDir = toCamera / distanceToCamera;

    // macchie di vento: dove la brezza increspa di più e dove l'acqua è quasi liscia
    float wind = noise(vWorldPos.xz * 0.18 + vec2(uTime * 0.04, uTime * 0.02));
    float detail = (1.0 - smoothstep(4.0, 34.0, distanceToCamera)) * mix(0.45, 1.25, wind);
    vec2 slope = rippleSlope(vWorldPos.xz, uTime) * detail;
    vec3 normal = normalize(vNormal + vec3(-slope.x, 0.0, -slope.y) * 2.7);

    // Fresnel di Schlick: a incidenza radente l'acqua riflette il cielo
    float facing = clamp(dot(normal, viewDir), 0.0, 1.0);
    float fresnel = 0.02 + 0.98 * pow(1.0 - facing, 5.0);

    vec3 reflected = reflect(-viewDir, normal);
    vec3 skyColor = mix(uHorizon, uZenith, clamp(reflected.y * 1.6, 0.0, 1.0));

    // corpo dell'acqua: blu del nastro nelle gole, più chiaro e trasparente sulle creste
    float heightRatio = clamp(vHeight / uMaxAmplitude * 0.5 + 0.5, 0.0, 1.0);
    vec3 waterColor = mix(uDeep, uShallow, smoothstep(0.3, 1.0, heightRatio));

    // luce che attraversa le creste quando guardiamo verso il sole (subsurface finto)
    float towardSun = pow(clamp(dot(-viewDir, uSunDir) * 0.5 + 0.5, 0.0, 1.0), 3.0);
    float crest = smoothstep(0.5, 0.95, heightRatio);
    waterColor += uScatter * crest * (0.25 + 0.75 * towardSun) * 0.55;

    // il riflesso cresce con la distanza: vicino resta blu, lontano diventa cielo
    float reflectAmount = fresnel * mix(0.35, 0.8, smoothstep(6.0, 30.0, distanceToCamera));
    vec3 color = mix(waterColor, skyColor, reflectAmount);

    // sole: alone largo sull'acqua + brillii netti sulle increspature
    float sunDot = max(dot(reflected, uSunDir), 0.0);
    float sheen = pow(sunDot, 24.0) * 0.18;
    float glitter = pow(sunDot, 600.0) * 1.9 * (1.0 - smoothstep(10.0, 45.0, distanceToCamera));
    color += uSunColor * (sheen + glitter);

    // schiuma sulle creste più alte, spezzata dal rumore (niente fasce uniformi)
    float foamNoise = noise(vWorldPos.xz * 1.6 + vec2(uTime * 0.3, -uTime * 0.2));
    float crestFoam = smoothstep(0.8, 0.97, heightRatio + (foamNoise - 0.5) * 0.22);
    crestFoam *= smoothstep(0.35, 0.75, foamNoise);

    // schiuma attorno allo scafo: tre ellissi in fila lungo la chiglia, con il bordo frastagliato
    float packFoam = 0.0;
    for (int i = 0; i < 3; i++) {
      vec2 offset = (vWorldPos.xz - uPacks[i].xy) / (vec2(0.9, 0.7) * uPacks[i].z);
      float ring = length(offset) + (noise(vWorldPos.xz * 4.0 + uTime * 0.6) - 0.5) * 0.45;
      packFoam = max(packFoam, 1.0 - smoothstep(0.6, 1.1, ring));
    }
    packFoam *= smoothstep(0.2, 0.6, noise(vWorldPos.xz * 6.0 - uTime * 0.4)) * 0.6 + 0.4;

    float foam = clamp(crestFoam * 0.6 + packFoam * 0.9, 0.0, 1.0);
    color = mix(color, uFoam, foam);

    // foschia: il mare lontano si scioglie nel colore dell'orizzonte del CSS
    float fog = smoothstep(uFogNear, uFogFar, distanceToCamera);
    color = mix(color, uHorizon, fog);

    gl_FragColor = vec4(color, 1.0);
  }
`;

/* --------------------------------------------------------------------------
   Funzione d'onda in JS: stessa matematica dello shader, per far galleggiare
   il galeone. Restituisce lo spostamento verticale in (x, z) al tempo t.
   Nota: Gerstner sposta anche in orizzontale; per la nave basta l'altezza
   campionata nel punto, l'errore non si vede.
   -------------------------------------------------------------------------- */
function waveHeightAt(x, z, time) {
  let height = 0;
  for (const wave of waveData) {
    const phase = wave.k * (wave.dirX * x + wave.dirZ * z - wave.phaseSpeed * time);
    height += wave.amplitude * Math.sin(phase);
  }
  return height;
}

/* --------------------------------------------------------------------------
   Scena
   -------------------------------------------------------------------------- */
// punti lungo la chiglia (coordinate della nave) dove nasce la schiuma
const FOAM_POINTS = [-1.05, 0, 1.0];
// rotta: la nave si allontana verso sinistra, la poppa con il Principe resta vicina a noi
const SHIP_YAW = -0.5;

// Inquadrature: la camera scende verso l'acqua con lo scroll ("immersione")
// lookY più alto della camera = sguardo verso l'alto: l'orizzonte scende sotto il testo
// due inquadrature: lo schermo verticale ha bisogno di un orizzonte più basso sotto il testo
const CAMERA_START_LANDSCAPE = { y: 1.3, z: 9.5, lookY: 3.25 };
const CAMERA_START_PORTRAIT = { y: 1.3, z: 9.5, lookY: 4.4 };
const CAMERA_DIVE = { y: 0.3, z: 6.5, lookY: 0.15 };

export class OceanScene {
  constructor(container, options = {}) {
    this.container = container;
    this.reducedMotion = Boolean(options.reducedMotion);
    this.onReady = options.onReady || (() => {});

    this.pointerTarget = new Vector2(0, 0);
    this.pointerCurrent = new Vector2(0, 0);
    this.diveProgress = 0;
    this.isVisible = true;
    this.elapsed = 0;

    this.handleResize = this.handleResize.bind(this);
    this.handlePointer = this.handlePointer.bind(this);
    this.renderFrame = this.renderFrame.bind(this);
  }

  async init() {
    this.renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // retina senza cap = fragment shader in ginocchio
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.outputColorSpace = SRGBColorSpace;
    // il tone mapping tocca solo i materiali standard (la nave): lo shader del mare scrive i suoi colori così come sono
    this.renderer.toneMapping = NeutralToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    // ombre morbide: solo la nave le proietta, su se stessa (vele sul ponte, Principe sul cassero)
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap;
    this.renderer.domElement.classList.add('ocean-canvas');
    this.renderer.domElement.setAttribute('aria-hidden', 'true');
    this.container.appendChild(this.renderer.domElement);

    this.scene = new Scene();
    this.camera = new PerspectiveCamera(38, 1, 0.1, 200);
    this.cameraStart = CAMERA_START_LANDSCAPE;
    this.lookTarget = new Vector3(0, CAMERA_START_LANDSCAPE.lookY, -6);

    this.createOcean();
    await this.createGalleon();
    this.createLights();

    this.timer = new Timer();
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    if (!this.reducedMotion) window.addEventListener('pointermove', this.handlePointer, { passive: true });

    this.visibilityObserver = new IntersectionObserver(([entry]) => {
      this.isVisible = entry.isIntersecting;
    });
    this.visibilityObserver.observe(this.container);

    if (this.reducedMotion) {
      // una sola immagine ferma: niente onde in movimento né camera che si sposta
      this.elapsed = 4.2;
      this.update(0);
      this.renderer.render(this.scene, this.camera);
    } else {
      this.renderer.setAnimationLoop(this.renderFrame);
    }
    this.onReady();
  }

  createOcean() {
    const geometry = new PlaneGeometry(PLANE_SIZE, PLANE_SIZE, PLANE_SEGMENTS, PLANE_SEGMENTS);
    geometry.rotateX(-Math.PI / 2);

    const toVec4 = (wave) => new Vector4(wave.dirX, wave.dirZ, wave.k, wave.amplitude);
    const perWave = (key) => new Vector4(...waveData.map((w) => w[key]));
    const sunDir = new Vector3(-0.35, 0.28, -1).normalize();

    this.oceanMaterial = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uWaveA: { value: toVec4(waveData[0]) },
        uWaveB: { value: toVec4(waveData[1]) },
        uWaveC: { value: toVec4(waveData[2]) },
        uWaveD: { value: toVec4(waveData[3]) },
        uSpeeds: { value: perWave('phaseSpeed') },
        uSteep: { value: perWave('steepness') },
        uHorizon: { value: rgb(HORIZON) },
        uZenith: { value: rgb(SKY_ZENITH) },
        uDeep: { value: rgb(WATER_DEEP) },
        uShallow: { value: rgb(WATER_SHALLOW) },
        uSunColor: { value: rgb(SUN_COLOR) },
        uScatter: { value: rgb(WATER_SCATTER) },
        uFoam: { value: rgb(FOAM_COLOR) },
        uPacks: { value: [new Vector3(0, 0, 0), new Vector3(0, 0, 0), new Vector3(0, 0, 0)] },
        uSunDir: { value: sunDir },
        uFogNear: { value: 14 },
        uFogFar: { value: 52 },
        uMaxAmplitude: { value: waveData.reduce((sum, w) => sum + w.amplitude, 0) },
      },
    });
    this.ocean = new Mesh(geometry, this.oceanMaterial);
    this.ocean.position.z = -PLANE_SIZE / 2 + 14; // il bordo vicino passa poco sotto la camera
    this.ocean.frustumCulled = false; // lo spostamento in shader esce dal bounding box originale
    this.scene.add(this.ocean);
  }

  async createGalleon() {
    this.galleon = await new Galleon().init();
    this.ship = this.galleon.group;
    this.ship.rotation.order = 'YXZ'; // prima la rotta, poi beccheggio e rollio
    this.scene.add(this.ship);
    this.foamPoint = new Vector3();
  }

  createLights() {
    // riflessi morbidi per oro e legno lucido: un ambiente "stanza" generato, niente HDR da scaricare
    const pmrem = new PMREMGenerator(this.renderer);
    this.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
    this.scene.environment = this.environment;
    this.scene.environmentIntensity = 0.35;

    this.scene.add(new HemisphereLight(0xf3e3bd, 0x0d2c52, 1.0));
    // sole basso da sinistra: modella la curva dello scafo e getta le ombre delle vele sul ponte
    this.sun = new DirectionalLight(0xffe2a8, 2.6);
    this.sunOffset = new Vector3(-5, 5.5, 4.5);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const shadowCamera = this.sun.shadow.camera;
    shadowCamera.left = -3; shadowCamera.right = 3; shadowCamera.top = 3.5; shadowCamera.bottom = -2.5;
    shadowCamera.near = 1; shadowCamera.far = 20;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.02;
    this.sun.shadow.radius = 3;
    this.scene.add(this.sun, this.sun.target);
  }

  handleResize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;

    // la nave sta a destra del testo su desktop, al centro (più piccola e più lontana) su telefono
    const isPortrait = this.camera.aspect < 1;
    const isNarrowLandscape = !isPortrait && this.camera.aspect < 1.5; // tablet orizzontale, laptop 4:3
    this.camera.fov = isPortrait ? 52 : 38;
    // telefono: nave più vicina e più piccola, così resta sotto i bottoni; tablet verticale: un po' più grande
    const isPhone = this.camera.aspect < 0.6;
    // telefoni bassi (sotto 800px): il testo occupa quasi tutto, la nave si avvicina e scende ancora
    const isShortPhone = isPhone && height < 800;
    this.ship.userData.layout = isShortPhone
      ? { x: 0.45, z: 3.1, scale: 0.32 }
      : isPhone ? { x: 0.5, z: 1.6, scale: 0.5 }
      : isPortrait ? { x: 0.9, z: 0.8, scale: 0.82 }
      : isNarrowLandscape ? { x: 2.15, z: 0.7, scale: 0.8 } : { x: 2.05, z: 0.9, scale: 1 };
    this.lookTargetX = isPortrait ? 0 : 0.6;
    this.cameraStart = isPortrait ? CAMERA_START_PORTRAIT : isNarrowLandscape ? { ...CAMERA_START_LANDSCAPE, lookY: 2.75 } : CAMERA_START_LANDSCAPE;
    this.camera.updateProjectionMatrix();
  }

  handlePointer(event) {
    this.pointerTarget.set((event.clientX / window.innerWidth) * 2 - 1, (event.clientY / window.innerHeight) * 2 - 1);
  }

  /** progress 0..1: 0 = hero ferma, 1 = camera a pelo d'acqua (chiamato da ScrollTrigger) */
  setDive(progress) {
    this.diveProgress = MathUtils.clamp(progress, 0, 1);
  }

  update(deltaSeconds) {
    this.elapsed += deltaSeconds;
    const waveTime = this.elapsed * WAVE_TIME_SCALE;
    this.oceanMaterial.uniforms.uTime.value = waveTime;

    // camera: posizione base interpolata con l'immersione + leggera parallasse dal mouse
    this.pointerCurrent.lerp(this.pointerTarget, 1 - Math.pow(0.001, deltaSeconds)); // smorzamento indipendente dal framerate
    const dive = this.diveProgress * this.diveProgress * (3 - 2 * this.diveProgress); // smoothstep: parte e arriva morbida
    this.camera.position.set(
      this.pointerCurrent.x * 0.45,
      MathUtils.lerp(this.cameraStart.y, CAMERA_DIVE.y, dive) - this.pointerCurrent.y * 0.15,
      MathUtils.lerp(this.cameraStart.z, CAMERA_DIVE.z, dive)
    );
    this.lookTarget.x = this.lookTargetX;
    this.lookTarget.y = MathUtils.lerp(this.cameraStart.lookY, CAMERA_DIVE.lookY, dive);
    this.camera.lookAt(this.lookTarget);

    // galeone: galleggia sull'onda, beccheggia (prua-poppa) e rolla (fianco-fianco) con la pendenza
    const { x, z, scale } = this.ship.userData.layout;
    const lengthHalf = 1.2 * scale;
    const beamHalf = 0.45 * scale;
    const forward = new Vector2(-Math.cos(SHIP_YAW), Math.sin(SHIP_YAW)); // direzione della prua sul mare
    const side = new Vector2(forward.y, -forward.x);
    const height = waveHeightAt(x, z, waveTime);
    const bowHeight = waveHeightAt(x + forward.x * lengthHalf, z + forward.y * lengthHalf, waveTime);
    const sternHeight = waveHeightAt(x - forward.x * lengthHalf, z - forward.y * lengthHalf, waveTime);
    const starboardHeight = waveHeightAt(x + side.x * beamHalf, z + side.y * beamHalf, waveTime);
    const portHeight = waveHeightAt(x - side.x * beamHalf, z - side.y * beamHalf, waveTime);
    // una nave pesante segue l'onda a metà: smorziamo inclinazioni e sollevamento
    // segni: la prua è verso -X locale, la dritta verso +Z locale
    const pitch = -Math.atan2(bowHeight - sternHeight, lengthHalf * 2) * 0.55;
    const roll = -Math.atan2(starboardHeight - portHeight, beamHalf * 2) * 0.35 + Math.sin(this.elapsed * 0.7) * 0.015;
    this.ship.scale.setScalar(scale);
    this.ship.position.set(x, (height + (bowHeight + sternHeight) / 2) * 0.5 - 0.09, z); // un po' più immersa: la nave ha peso
    this.ship.rotation.set(roll, SHIP_YAW, pitch);

    this.galleon.update(this.elapsed);
    // il sole segue la nave: la mappa d'ombra copre solo lei, così resta nitida
    this.sun.target.position.copy(this.ship.position);
    this.sun.position.copy(this.ship.position).add(this.sunOffset);

    // schiuma lungo la chiglia (posizioni nel mondo)
    const foamUniforms = this.oceanMaterial.uniforms.uPacks.value;
    FOAM_POINTS.forEach((localX, index) => {
      this.foamPoint.set(localX, 0, 0);
      this.ship.localToWorld(this.foamPoint);
      foamUniforms[index].set(this.foamPoint.x, this.foamPoint.z, 0.62 * scale);
    });
  }

  renderFrame(timestamp) {
    this.timer.update(timestamp);
    const delta = Math.min(this.timer.getDelta(), 0.05); // dopo un tab in background non facciamo salti
    if (!this.isVisible || document.hidden) return;
    this.update(delta);
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.renderer.setAnimationLoop(null);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('pointermove', this.handlePointer);
    this.visibilityObserver?.disconnect();
    this.ocean.geometry.dispose();
    this.oceanMaterial.dispose();
    this.galleon.dispose();
    this.environment?.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}

/** Ritorna true se il browser può creare un contesto WebGL */
export function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch (error) {
    return false;
  }
}
