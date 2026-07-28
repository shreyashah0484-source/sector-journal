# The Ledger — setup & maintenance guide

A simple site for your ongoing sector research journal. Three files, no build step, free hosting.

## What's in here
- `index.html` — the site itself (design, layout, logic). You shouldn't need to touch this.
- `entries.js` — **the only file you edit day-to-day.** Each entry is one block in a list.
- `README.md` — this file.

## Putting it online with GitHub Pages (free, takes ~10 minutes)

1. **Create a GitHub account** at github.com if you don't have one already.
2. **Create a new repository:**
   - Click the `+` in the top right → "New repository"
   - Name it something like `sector-journal` (or `yourname.github.io` if you want it as your main personal site)
   - Keep it Public, don't add a README (you already have one)
   - Click "Create repository"
3. **Upload the files:**
   - On the new repo page, click "uploading an existing file"
   - Drag in `index.html`, `entries.js`, and `README.md`
   - Click "Commit changes"
4. **Turn on GitHub Pages:**
   - Go to Settings (top of the repo) → Pages (left sidebar)
   - Under "Branch", select `main` and `/ (root)`, then Save
   - Wait 1-2 minutes, then refresh — GitHub will show you a live URL like
     `https://yourusername.github.io/sector-journal/`
5. Done — that URL is now live and shareable (e.g. on your CV, LinkedIn, or in an interview).

## Adding a new entry

1. Open `entries.js` (you can edit this directly on GitHub — click the file, then the pencil icon)
2. Copy the commented-out template block near the top
3. Fill in your own date, sector, title, tickers, thesis, metrics, and write-up
4. Add a comma after the entry above it, paste your new block in
5. Commit the change — the live site updates automatically within a minute or two

You don't need to touch `index.html` at all — it automatically reads whatever is in
`entries.js` and displays it, including building the sector filter buttons at the top.

## A few tips for the entries themselves
- Keep `thesis` short — one or two sentences, this is the bit someone skims first
- `metrics` are optional per entry — leave the array empty (`metrics: []`) if a particular
  entry doesn't need a table
- `dir` on tickers is just your own working view (up/down/flat) on how that company or the
  sector is trending — not a prediction, more a place to record what you thought at the time
  so you can look back later and check yourself
- Aim for one entry every 2-3 weeks rather than trying to do one a week — it's much easier
  to sustain and still builds up to something substantial over a few months
