# catchbookapp.com

Static website for **Catch Book** (iPhone fishing log), served by GitHub Pages at https://catchbookapp.com.
Plain HTML + one CSS file. No JavaScript, trackers, analytics, cookies, external fonts or CDNs.

| File | Page |
|---|---|
| `index.html` | Landing page (features, pricing, FAQ) |
| `privacy.html` | Privacy Policy (linked from the app and App Store Connect) |
| `terms.html` | Terms of Use (Apple Standard EULA + subscription terms) |
| `support.html` | Support / FAQ (App Store Connect "Support URL") |
| `404.html` | Not-found page |
| `CNAME` | Custom domain for GitHub Pages: `catchbookapp.com` |

Edit the HTML directly; there is no build step. Contact address used everywhere: `support@catchbookapp.com`.

## Screenshots (`assets/screens/`)
`catches.webp` is a **real iPhone screenshot** (resized to 786 × 1704, converted from Display P3 to sRGB, metadata stripped, WebP quality 88). The others are **illustrative mockups with sample data**, rendered from `_mockups/screens.html` (not published). To use real screenshots, replace the files **keeping the same names** (or change the `src` in `index.html` if you change the format):

| File | Screen |
|---|---|
| `log-catch.png` | Log a Catch, with conditions filled in |
| `map.png` | Map tab with a filter applied |
| `catches.webp` | My Catches list (**real screenshot**) |
| `catch-detail.png` | Catch details showing "Last fished here" |
| `dashboard.png` | Dashboard |
| `conditions.png` | Conditions tab: Right Now (with v1.3 Waves) + Your Best Conditions with the app's 8 factors ("5 of 8"), sample data, station name only (no coordinates) |
| `forecast.png` | v1.3 Wind & Waves forecast sheet (Pro), matching `MarineForecastView`; made-up round coordinates (26°00.0′N 83°00.0′W) and sample numbers |
| `paywall.png` | Catch Book Pro paywall (not on the site yet; handy for App Store Connect review) |

Any iPhone portrait screenshot works (the page frames it with CSS and crops to a 393:852 ratio). To keep the site fast, shrink them first, e.g. on a Mac: `sips -Z 1704 *.png` (about 786 × 1704). Use demo data, not real spots. When all screenshots are real, remove the "illustrative mockups" note (`mock-note`) in `index.html`.

To re-render the mockups: open `_mockups/screens.html` in Chrome, or render each `#id` element at 2× with a headless browser (puppeteer: `element.screenshot()`).

## App Store badge
The app is live (Oct 23, 2026): `index.html` links Apple's official "Download on the App Store" badge (`assets/img/download-on-the-app-store.svg`, from developer.apple.com, unmodified) to https://apps.apple.com/us/app/catch-book-fishing-log/id6820796721.


## v1.1 site wording (do not merge yet)
Branch `v1.1-site` updates the marketing, pricing, support, terms, and privacy pages for Catch Book v1.1 (unlimited free logging; Pro unlocks Dashboard insights and GPX). **Do not merge to `main` or deploy until v1.1 is live on the App Store** — `main` is the live site and must keep matching v1.0 (5 free catches) while that build is in review.

## v1.3 site (branch `v1.3-site`, do not merge yet)
Adds the **New in 1.3** hero link and the **Wind & wave forecast, built in** section (`#forecast`) with the value comparison, waves in Conditions/features/pricing/FAQ, a Support section `#forecast`, Terms "What you get", and the Open-Meteo privacy/credit changes. **Merge to `main` only when Apple approves 1.3 and Nick says so.** Update the Terms and Privacy effective dates when publishing. Mockups re-rendered from `_mockups/screens.html` (`#forecast`, `#conditions`) at 2× with headless Chrome (puppeteer `element.screenshot()`).

## Hosting
GitHub Pages from `main` / root, custom domain `catchbookapp.com`, HTTPS enforced.
DNS: apex `A` records 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 (optional `AAAA` 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153) and `www` `CNAME` niko-underwood.github.io.
