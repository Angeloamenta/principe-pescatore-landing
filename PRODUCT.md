# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: consumers who find the Principe Pescatore pouch in the frozen aisle of the supermarket and want to know what is inside, how to cook it, and whether it is worth buying again. They are doing the everyday shop and cooking on a weeknight, often on a phone.

Secondary: retail buyers, category managers and purchasing offices of Italian supermarket chains. They get one compact "Per la distribuzione" band before the footer: a short paragraph, the brand profile PDF, the sales contact and the Marca Bologna 2027 stand. No buyer form or logistics table on the consumer page (decided 2026-11-17).

## Product Purpose

Principe Pescatore is Comavicla's line of frozen fish in pouches for everyday shopping. The landing presents the range, shows how simple it is to cook, and makes the brand recognizable on the shelf. Success means a consumer recognizes the pouch, understands how to use each product, and comes back to buy it.

## Positioning

Principe Pescatore is the everyday frozen-fish line. It stands on price for the weekly shop, a range of species people buy all year, and a recognizable explorer-themed pack with the Prince character. Any claim beyond that (sourcing, processing, certifications) is unconfirmed.

## Operating Context

- The pack is the brand's main touchpoint: claim "Porta il mare sulla tavola!", parchment map, navy ribbon with gold letters, coral ring around the product photo window, the Prince illustration.
- Range (6 references): Fette di salmone Keta, Tranci di pesce spada, Filetti di nasello, Filetti di trota iridea, Cozze cilene sgusciate, Cozze cilene a mezzo guscio. The two mussel products are still to be confirmed.
- Trade fair: Marca Bologna 2027 (dates, hall and stand not yet known). A 45" 16:9 video for the stand videowall is planned, readable without sound.
- The page is currently a mockup with placeholder data.

## Capabilities and Constraints

- Static site: `index.html`, CSS in `assets/css/style.css`, JS bundled with esbuild from `src/` (GSAP, ScrollTrigger, Lenis, three.js for the hero sea). Bundles must be rebuilt, never hand-edited.
- The contact form has no endpoint yet (TODO in `src/main.js`).
- Language: Italian.
- Undecided / to be supplied by the client: pack weights, cooking times, logistics data (pieces per carton, cartons per pallet, shelf life), product photos, final video, brand profile PDF, company legal details, sales contact, privacy policy.
- Unverified claims currently in the copy, all to confirm with Comavicla: portions are individually frozen and can be taken out one at a time; swordfish steaks are already cleaned and skinless; volumes are planned over the year with the retailer; point-of-sale materials (posters, shelf stoppers, crowners) exist.

## Brand Commitments

- Name: "Il Principe Pescatore" / Principe Pescatore. Claim from the pack: "Porta il mare sulla tavola!".
- The Prince character and the logo with ribbon, taken from the pack PDF (`Fish_Atelier_Generica_A.pdf`, page 2). The character in the PDF is small (351×340 px): the illustrator's original is needed for large uses.
- The page's materials and colors come from the pack (see BRIEF.md).

## Evidence on Hand

- Pack assets extracted from the PDF: `assets/img/` (logo, Prince, parchment, map, pack front), `assets/brand/` (SVG and PNG logo).
- No product photos, no real video, no testimonials, no certifications, no sales figures, no retailer list. Do not invent any of these.

## Product Principles

1. The pouch in the aisle comes first: the page should make the pack easier to recognize, not compete with it.
2. Cooking must look as simple as it is; every product gets a practical way to cook it.
3. Plain, warm Italian copy for people doing the shopping; no marketing superlatives.
4. State only what Comavicla confirms; placeholders stay visibly placeholders.
5. Principe Pescatore and Fish Atelier are not connected: no cross-links or references between the two pages.
