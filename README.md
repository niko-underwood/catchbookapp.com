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
The images there are **illustrative mockups with sample data**, rendered from `_mockups/screens.html` (not published). To use real screenshots, replace the files **keeping the same names**:

| File | Screen |
|---|---|
| `log-catch.png` | Log a Catch, with conditions filled in |
| `map.png` | Map tab with a filter applied |
| `catches.png` | Catches list with month + species filter |
| `catch-detail.png` | Catch details showing "Last fished here" |
| `dashboard.png` | Dashboard |
| `paywall.png` | Catch Book Pro paywall (not on the site yet; handy for App Store Connect review) |

Any iPhone portrait screenshot works (the page frames it with CSS and crops to a 393:852 ratio). To keep the site fast, shrink them first, e.g. on a Mac: `sips -Z 1704 *.png` (about 786 × 1704). Use demo data, not real spots. When the screenshots are real, remove the "Screens shown are illustrative mockups" line in `index.html`.

To re-render the mockups: open `_mockups/screens.html` in Chrome, or render each `#id` element at 2× with a headless browser (puppeteer: `element.screenshot()`).

## App Store badge
`index.html` has a "Coming soon" placeholder with an HTML comment. When the app is live, replace it with Apple's official "Download on the App Store" badge (from https://developer.apple.com/app-store/marketing/guidelines/) linking to `https://apps.apple.com/app/id<APP ID>`, and update the "When can I get Catch Book?" FAQ answer.

## Hosting
GitHub Pages from `main` / root, custom domain `catchbookapp.com`, HTTPS enforced.
DNS: apex `A` records 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 (optional `AAAA` 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153) and `www` `CNAME` niko-underwood.github.io.
