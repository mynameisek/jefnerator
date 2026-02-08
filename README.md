# JEFNERATOR LEAKS

Satirical fake "leaked email" generator inspired by the Epstein Files media coverage. Enter anyone's name, hit generate, get DOJ-style declassified email screenshots featuring real VIP names from public documents.

**100% fake. 100% funny. 0% real.**

Live: [jefnerator.com](https://jefnerator.com)

## Stack

Vite + React 18 — static SPA deployed on Vercel.

## Architecture

```
src/
├── data/           Static data (no backend)
│   ├── vips.js         49 VIPs with tags (politics, finance, inner, culture...)
│   ├── patterns.js     17 message categories, 13 topic weights
│   └── locations.js    Cities, islands, coded locations, subjects, devices
│
├── engine/         Generation logic
│   ├── generator.js    Seeded PRNG → deterministic batch generation
│   └── utils.js        randomChoice, vipRef, randomDate
│
├── templates/      8 email visual styles
│   ├── Gmail, Outlook, Formal, ReplyChain,
│   ├── Truncated, Encoding, Political, Caution
│   ├── EmailPreview.jsx    Style → template router
│   └── RedactBar.jsx       Black redaction bars
│
├── components/
│   ├── GallerySwipe.jsx    Fullscreen gallery (swipe mobile, arrows desktop)
│   ├── DownloadButton.jsx  PNG export via html-to-image
│   └── ShareButtons.jsx    Twitter, WhatsApp, Copy link
│
├── App.jsx         Orchestrator: form, URL params, seed, gallery
├── main.jsx        Entry point + Vercel Analytics
└── styles/app.css  Animations, responsive
```

## Generation Flow

1. User inputs name/email/topic → clicks Generate
2. A random seed is created, overrides `Math.random` via mulberry32 PRNG
3. `generateBatch()` creates 7 conversations, each with:
   - Random email template style
   - Pattern category picked from topic weights
   - VIP names, locations, dates injected dynamically
   - Target name sprinkled in ~30% of messages with noisy variations
4. `Math.random` restored — same seed always produces same output

## Shareable URLs

Every generation produces a deterministic URL:

```
jefnerator.com/?name=Samuel&topic=aquarium&seed=1738948271
```

Opening a seeded URL auto-generates the same emails and opens gallery mode. Every share = a site visitor instead of a lost PNG.

| Param | Effect |
|-------|--------|
| `name` | Pre-fills target name |
| `email` | Pre-fills target email |
| `topic` | Selects category |
| `seed` | Deterministic generation + auto gallery |

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
npx vercel --prod
```

## Disclaimer

This is satire protected under free speech. All generated content is entirely fictional and auto-generated. No real emails were declassified. VIP names used are public figures whose names appeared in widely-reported public documents.

## Author

Created by [3k1Tc80 KingOfTroll](https://jefnerator.com)
