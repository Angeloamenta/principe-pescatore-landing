# Il Principe Pescatore — Brief landing (v4, allineata al pack)

## Da dove viene lo stile
Dal file del pack (`Fish_Atelier_Generica_A.pdf`, pagina 2). Il pack del Principe è una **carta dell'esploratore**: pergamena ocra, planisfero antico seppia, corda, nastro blu notte con lettere oro, il Principe illustrato, titolo "PORTA IL MARE SULLA TAVOLA!" in serif condensato marrone, anello corallo attorno alla finestra della foto.
La landing ora usa gli stessi materiali, presi direttamente dal PDF.

## Asset estratti dal PDF (`assets/img`, `assets/brand`)
| File | Cosa è | Come è stato ricavato |
|---|---|---|
| `logo-principe-1400.webp` / `-700.webp` | logo con nastro e personaggio, sfondo trasparente | isolato il blocco del logo nel content stream, tolte le ombre in "moltiplica" pensate per la pergamena |
| `brand/logo-principe.svg` | stesso logo, vettoriale (personaggio incorporato come immagine) | per grafica e stampa |
| `principe.webp` | il personaggio da solo (351×340 px nel PDF: non ingrandirlo oltre) | immagine + maschera di trasparenza |
| `pergamena.jpg` | texture di pergamena senza corde | centro dello sfondo del retro |
| `mappa.webp` | planisfero seppia | va usato in `mix-blend-mode: multiply` sulla pergamena |
| `pack-fronte.jpg` / `-600.webp` | fronte del pack (245 mm) | render del pannello frontale, rifilato |

Il personaggio nel PDF è piccolo: per hero e video servirà il file originale dell'illustratore. Sul galeone uso il mezzobusto del pack scontornato (`principe-timone.webp`): con l'illustrazione a figura intera dell'illustratore lo si mette al timone in piedi.

## Palette (campionata dal pack)
| Token | Valore | Uso |
|---|---|---|
| `--pergamena` | `#E4C37B` | sfondo principale (con texture) |
| `--pergamena-chiara` / `--carta` | `#F3E3BD` / `#FBF3DF` | sezioni di lettura, fogli, form |
| `--seppia` | `#3C2415` | titoli e testo (8,5:1 sulla pergamena) |
| `--seppia-2` | `#5E3F25` | testo secondario (5,6:1) |
| `--nastro` | `#0D2C52` | blu del nastro: CTA, sezioni scure, mare |
| `--oro-chiaro` | `#E2B85F` | titoli su blu (7,5:1) |
| `--corallo` | `#E26033` | anello della foto, rotta, dettagli. **Non come testo** (contrasto insufficiente): per testo usare `--corallo-scuro` `#B3401C` su carta |
| `--orizzonte` | `#E8CC8E` | foschia del mare: deve restare uguale a `HORIZON` in `ocean-scene.js` |

## Font
- **Titoli:** **Lilita One** (OFL), un solo peso, tondo e grasso. Usato per tutti i titoli, dalla hero alle schede (`--font-display`, `--font-titolo`).
- **Testi:** **Figtree** (OFL) variabile, tondo e corsivo: testi, etichette, dati e bottoni (`--font-text`, `--font-cond`). I pesi 400/500/600/700 escono dallo stesso file.
- Scelta richiesta da Angelo il 19/11/2026; prima erano Roboto Serif condensato + Fira Sans (vicini al Bernard MT / Frutiger del pack).

## Struttura
Header (il logo piccolo compare scorrendo) · Hero: logo, claim del pack, mare WebGL color nastro sotto un cielo di pergamena con il planisfero, il galeone del Principe (logo sulla vela maestra, il Principe al timone) al posto dei pack in acqua (richiesta del 19/11/2026) · Il viaggio: carta nautica di pergamena stesa sul blu, il Principe percorre la rotta, poi il video · Bandierine (alfabeto nautico nei colori del marchio) · Gamma: i 6 pack veri con il nome nel cerchio della foto · Dal freezer alla tavola · Per i buyer: argomenti + manifesto di carico + brand profile · Contatti: biglietto d'imbarco · Footer

## Placeholder da sostituire
Testi Lorem · foto prodotto nei cerchi dei pack (nella gamma è `.pack-foto`) · video · PDF brand profile · date e stand Marca · formati e dati logistici · endpoint del form (TODO in `src/main.js`)

## Il viaggio del Principe (mappa)
- Planisfero della hero, rotta in 5 tappe con il prodotto di ogni zona: Atlantico del Sud (nasello), Cile (cozze), Pacifico del Nord (salmone Keta), Oceano Indiano (pesce spada), ritorno in Italia (trota iridea).
- Confermati dalla pagina: Keta = Pacifico, cozze = Cile. **Da confermare con il cliente** le zone di nasello, pesce spada e trota (allevamento): in pagina hanno l'etichetta "da confermare". Se cambiano, si spostano i segnaposto e la rotta in `index.html` (coordinate della mappa 1800×929).
