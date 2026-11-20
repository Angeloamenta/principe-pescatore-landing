# Landing Principe Pescatore — v2

## Aprire la pagina
Funziona anche con doppio clic su `index.html` (i bundle sono IIFE, non moduli): logo e Principe del galeone sono dentro `ocean.bundle.js` come data URL, quindi la hero è completa anche da file://.
Per vedere i pack veri (e avere la console pulita) aprila da un server locale: Live Server in VS Code, oppure `npx serve .`.

## Struttura
```
index.html
assets/css/style.css        stile (token in :root)
assets/js/main.bundle.js    build di src/main.js  (GSAP, ScrollTrigger, Lenis)
assets/js/ocean.bundle.js   build di src/effects/ocean-scene.js (three.js), caricato in lazy
assets/fonts/               font self-hosted (OFL): Lilita One per i titoli, Figtree per i testi
assets/img/                 asset estratti dal PDF del pack (logo, pergamena, mappa, fronte pack, personaggio)
assets/brand/               logo in SVG e PNG ad alta risoluzione, per la grafica
src/main.js                 orchestrazione: scroll, pin, form
src/effects/ocean-scene.js  scena del mare (classe OceanScene: init / update / dispose)
v1/                         prima versione statica, per confronto
```

## Modificare il JS
```
npm install
npm run build     # rigenera i due bundle in assets/js
npm run watch     # solo main.js, durante lo sviluppo
```
Non modificare a mano i file `*.bundle.js`: si modificano i sorgenti in `src/` e si rilancia la build.

## Regolazioni rapide del mare (`src/effects/ocean-scene.js`)
- `WAVES`: ripidità e lunghezza delle onde (più ripidità = mare più mosso)
- `WAVE_TIME_SCALE`: velocità del mare
- `CAMERA_START.lookY`: alza/abbassa l'orizzonte
- `src/effects/galleon.js`: il galeone della hero (scafo con fasciame in rilievo, cinte, cannoni, gallerie di poppa, vele con il logo, sartiame, il Principe al timone). `MASTS` definisce alberi e vele, `logo: true` mette il logo sulla vela.
- Il Principe al timone: l'illustrazione a figura intera (`principe-posa-t.png`, braccia a T) è divisa da `tools/principe-parti.py` in corpo e due braccia (`principe-corpo.webp`, `principe-braccio-sx/dx.webp`) con le loro mappe di profondità (`*-rilievo.png`, più chiaro = più in fuori). In `galleon.js` ogni pezzo diventa un rilievo e le braccia ruotano dalle spalle fino al timone (`ARM_LOWER`, `ARM_FORWARD`, altezza `FIGURE_HEIGHT`).
- `SHIP_YAW` e `this.ship.userData.layout` in `ocean-scene.js`: rotta, posizione e scala della nave per desktop, tablet e telefono
- `HORIZON` / `SKY_ZENITH`: devono coincidere con `--orizzonte` / `--cielo-zenit` nel CSS
