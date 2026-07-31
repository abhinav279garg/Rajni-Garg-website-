# Rajni Garg — Handmade craft archive

A bilingual, mobile-first digital home for Rajni Garg’s real handmade work. This release is deliberately enquiry-led: it presents a provenance-controlled archive, Rajni ji’s story and learning invitation without inventing prices, availability or delivery dates.

## What is included

- English and Hindi content with a persistent language switch
- Responsive editorial homepage and filtered craft archive
- Seven evidence-backed craft/process records using seven approved documentary photographs
- Accessible craft-detail dialogs
- Privacy-preserving enquiry builder that opens WhatsApp only after explicit visitor action
- Clear human-approval boundaries for price, timing and feasibility
- Privacy notice and a clear statement that the optional AI assistant is a future phase
- No framework, analytics SDK, cookies, database, AI agent or build dependency

## Current public-site scope

The public website is the complete static frontend: editorial home, story, filterable archive, craft details, learning pathways, enquiry journey, WhatsApp handoff, privacy controls and bilingual mobile behavior. The future AI agent, admin portal and WhatsApp Cloud API automation are intentionally outside this release.

## Run locally

Serve the folder with any static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Hosting

Upload the repository root to any static Hostinger site or point the domain document root at this directory. No Node.js runtime is required.

## WhatsApp handoff

The enquiry builder opens WhatsApp with a prepared message and lets the visitor choose the recipient. A dedicated WhatsApp Business destination can be introduced later through protected deployment configuration; no personal phone number is committed to this public repository.

## Content and media rules

- Google Drive remains the private source archive.
- Only selected documentary images are copied into `assets/`.
- The private source archive and its file identifiers are not exposed in this public repository.
- Only the seven approved documentary image copies are included here.
- Do not add AI-staged imagery, third-party references, price overlays or consent-sensitive photographs.
- Rajni ji or an authorised family member must confirm any future availability, custom feasibility, final price or delivery date.

## Repository

Canonical source: `abhinav279garg/Rajni-Garg-website-`
