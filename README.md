# Rajni Garg — Handmade craft archive

A bilingual, mobile-first digital home for Rajni Garg’s real handmade work. This first release is deliberately enquiry-led: it presents a provenance-controlled archive and learning invitation without inventing prices, availability or delivery dates.

## What is included

- English and Hindi content with a persistent language switch
- Responsive editorial homepage and filtered craft archive
- Six evidence-backed craft/process records
- Accessible craft-detail dialogs
- Privacy-preserving enquiry builder that opens WhatsApp only after explicit visitor action
- Clear human-approval boundaries for price, timing and feasibility
- Privacy and AI transparency notices
- No framework, analytics SDK, cookies, database or build dependency

## Run locally

Serve the folder with any static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Hosting

Upload the repository root to any static Hostinger site or point the domain document root at this directory. No Node.js runtime is required.

## Configuration

The WhatsApp destination is the constant `WHATSAPP_NUMBER` at the top of `app.js`. Replace it before launch if the dedicated WhatsApp Business number differs.

## Content and media rules

- Google Drive remains the private source archive.
- Only selected documentary images are copied into `assets/`.
- Original Drive IDs and provenance are recorded in `docs/asset-manifest.md`.
- Do not add AI-staged imagery, third-party references, price overlays or consent-sensitive photographs.
- Rajni ji or an authorised family member must confirm any future availability, custom feasibility, final price or delivery date.

## Repository

Canonical source: `abhinav279garg/Rajni-Garg-website-`
