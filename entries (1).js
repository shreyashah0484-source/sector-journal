// ─────────────────────────────────────────────────────────────
// THE LEDGER — entries data
//
// This is the only file you need to touch to add a new entry.
// Copy the template block below, fill it in, and add a comma
// after the previous entry's closing curly brace }.
//
// dir on tickers can be: "up", "down", or "flat"
// (this is just YOUR read on the direction of the business right
// now — not a stock tip, just your own working opinion)
// ─────────────────────────────────────────────────────────────

const entries = [

  // ── TEMPLATE — copy this block for a new entry ──
  // {
  //   date: "2026-08-01",
  //   sector: "Sector Name",
  //   title: "Short punchy title for the entry",
  //   tickers: [
  //     { symbol: "COMPANY", dir: "up" },
  //     { symbol: "COMPANY2", dir: "flat" }
  //   ],
  //   thesis: "One or two sentences — your actual view, in plain words.",
  //   metrics: [
  //     { label: "Revenue growth", value: "12% YoY" },
  //     { label: "Gross margin", value: "38%" }
  //   ],
  //   writeup: `
  //     <p>Full write-up goes here. You can use basic HTML like
  //     &lt;p&gt; for paragraphs and &lt;h4&gt; for subheadings.</p>
  //     <h4>What they do</h4>
  //     <p>...</p>
  //     <h4>Why I picked this</h4>
  //     <p>...</p>
  //     <h4>My view</h4>
  //     <p>...</p>
  //   `,
  //   openQuestions: "Things you'd want to check next time you revisit this."
  // },

  {
    date: "2026-07-28",
    sector: "Discount Retail",
    title: "Why the discounters keep winning even as inflation cools",
    tickers: [
      { symbol: "B&M", dir: "up" },
      { symbol: "TSCO", dir: "flat" }
    ],
    thesis: "Discount grocery and variety retail kept growing through 2025 not because shoppers are still panicking about prices, but because trading down has become a habit — and habits are sticky even after the reason for them fades.",
    metrics: [
      { label: "Sector like-for-like growth (UK discount grocery)", value: "~4-6%" },
      { label: "Gross margin (typical discount grocer)", value: "22-25%" },
      { label: "Store estate growth (B&M, last FY)", value: "+45 stores" }
    ],
    writeup: `
      <h4>What they do</h4>
      <p>B&M and similar discount retailers sell a mix of grocery, homeware, and general
      merchandise at prices consistently below the traditional supermarkets, relying on
      simpler store formats, tighter ranges, and faster stock turnover to keep costs down.</p>

      <h4>Why I picked this</h4>
      <p>I noticed the car park at my local B&M was busier on a Tuesday afternoon than the
      Tesco next to it — which felt worth digging into rather than dismissing as anecdote.</p>

      <h4>My view</h4>
      <p>The interesting thing isn't that people traded down during the cost-of-living
      squeeze — that's obvious. It's that store growth and footfall have kept climbing even
      as headline inflation has come down. That suggests some of this demand is now
      structural rather than purely a reaction to prices, which matters a lot for how
      durable this growth actually is.</p>
    `,
    openQuestions: "Is like-for-like growth still being driven by new customers, or is it existing customers simply buying a wider basket than before? Worth checking the next set of results for a split."
  },

  {
    date: "2026-07-14",
    sector: "UK Housebuilders",
    title: "Rate cuts haven't unstuck the housebuilders yet — why not?",
    tickers: [
      { symbol: "BARC", dir: "flat" },
      { symbol: "PSN", dir: "down" }
    ],
    thesis: "Housebuilders should be an obvious beneficiary of falling interest rates, but planning delays and land-bank costs seem to be doing more damage than mortgage rates are doing good, at least so far.",
    metrics: [
      { label: "UK base rate (at time of writing)", value: "~4.0%" },
      { label: "Persimmon completions (last FY)", value: "~10,600 units" },
      { label: "Avg. build cost inflation", value: "~3-4% YoY" }
    ],
    writeup: `
      <h4>What they do</h4>
      <p>Persimmon and Barratt Redrow are two of the largest UK housebuilders, buying land,
      securing planning permission, and building and selling new-build homes primarily to
      owner-occupiers and first-time buyers.</p>

      <h4>Why I picked this</h4>
      <p>Rate cuts are usually treated as straightforwardly good news for housebuilders in
      the financial press, and I wanted to actually check whether that logic held up in the
      numbers rather than take it as given.</p>

      <h4>My view</h4>
      <p>Completions have been flatter than I expected given how much attention rate cuts
      got this year. My working theory is that planning system delays and land costs are a
      bigger constraint on supply right now than buyer demand is — which would mean rate
      cuts help demand but don't do much to unblock the actual bottleneck.</p>
    `,
    openQuestions: "Need to actually check planning approval timelines by region rather than relying on my impression from the news. Also want to see if smaller regional builders are seeing a different pattern to the big two."
  }

];
