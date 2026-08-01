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

const entries = [ {
  date: "2026-07-28",
  sector: "UK Supermarkets",
  title: "Why Morrisons is losing to Lidl, despite matching its prices",
  tickers: [
    { symbol: "MORRISONS", dir: "down" },
    { symbol: "LIDL", dir: "up" }
  ],
  thesis: "The shift in UK grocery market share between Morrisons and Lidl was driven less by differences in products or customer preferences, and more by Morrisons' financial challenges. Its 2021 leveraged buyout left the retailer with billions in debt, and rising interest rates increased the cost of managing those repayments. As Morrisons faced greater financial pressure, Lidl's focus on affordability became increasingly attractive to shoppers in the cost of living crisis.",
  metrics: [
    { label: "Lidl market share (12 weeks to 17 May 2026)", value: "8.6%, overtaking Morrisons" },
    { label: "Morrisons market share (same period)", value: "8.3%, down from 8.4%" },
    { label: "Morrisons pre-tax loss (FY to 26 Oct 2025)", value: "£381m" },
    { label: "Morrisons debt interest bill (2025)", value: "£281m" },
    { label: "Morrisons underlying EBITDA (2025)", value: "£835m" }
  ],
  writeup: `
    <h4>What they do</h4>
    <p>Morrisons is a British supermarket chain, founded in Bradford in 1899, and has traditionally been considered one of the UK's 'Big Four' supermarkets. It's currently owned by US private equity firm Clayton, Dubilier & Rice (CD&R), following a 2021 buyout. Lidl is a German discount grocery chain that entered the UK market later, competing primarily on affordability rather than range or brand history. It's privately owned by Germany's Schwarz Gruppe.</p>

    <h4>Why did I pick this?</h4>
    <p>I originally picked this because the Lidl/Morrisons market share headline appeared to be a textbook-style case study of discounters beating traditional supermarkets on price. However, this explanation didn't fully hold up once I found out Morrisons already runs its own Aldi and Lidl price match scheme. The real driver seemed to be Morrisons' 2021 private equity buyout, and looking into this properly gave me a chance to understand how leveraged buyouts work in practice, rather than just knowing the term.</p>

    <h4>My view</h4>
    <p>Morrisons has actively tried to compete with other supermarkets on price. Its own price match data shows near-identical prices to Aldi and Lidl across hundreds of everyday products, from porridge oats and fresh milk to cleaning supplies. Hence, price alone doesn't explain why Morrisons has been falling behind Lidl. There must be another factor shifting consumers' behaviour.</p>

    <p>This other factor relates to what each company must cover once matched prices are set. Lidl operates with lower overheads by design. Its smaller product range means a simpler supply chain, and with no acquisition debt on its books, it has no interest payments reducing its margins before store costs are even factored in. Morrisons carries the usual running costs of any large supermarket, plus £281m a year in interest on debt from its 2021 buyout. As a result, matching Lidl's prices costs Morrisons a far greater share of its margin than it costs Lidl.</p>

    <p>Grocery retail makes this problem worse than almost any other sector. Supermarket margins typically sit at just 2-4% of revenue, because intense competition and price-sensitive shoppers leave almost no room to mark anything up. The cost of living crisis has only made shoppers more sensitive to price, squeezing margins even further. In an environment this tight, even a modest debt load becomes a serious burden that a more profitable business could absorb without difficulty.</p>

    <p>As Press Association reported in January 2026, Morrisons' underlying EBITDA came to £835m in 2025, suggesting the core business is performing well. Once the £281m interest bill, depreciation, and other costs are accounted for, that turns into a £381m pre-tax loss. Morrisons isn't struggling because it runs its shops badly. It's struggling because it's paying for the debt that bought them.</p>

    <p>Morrisons' own leadership points mainly to inflation and government cost increases, not the buyout. That is likely part of the explanation too. But it doesn't explain how a rival selling nearly identical products at nearly identical prices keeps growing while Morrisons doesn't. On the surface, Lidl overtaking Morrisons looks like a simple win for affordability during a cost of living crisis. In reality, both companies are matching each other on price. The difference is that only one of them is also servicing the debt from a leveraged buyout, in an industry that barely has the margin to absorb it.</p>

    <p style="font-size:13px;color:var(--ink-soft);margin-top:24px;padding-top:16px;border-top:1px dashed var(--rule);">
      <strong>Sources:</strong> The Grocer, "Lidl sails past Morrisons to become UK's fifth biggest supermarket" (May 2026); Press Association, via Insider Media / LBC / Yahoo Finance, "Morrisons reveals £381m annual loss but hails solid festive trading" (21 Jan 2026); Morrisons corporate press office, Aldi & Lidl Price Match product list (Feb 2026).
    </p>
  `,
  openQuestions: "Does Morrisons' inflation/cost explanation hold up separately from the debt story?<br>Does margin pressure ease as net debt keeps falling from £3.1bn?<br>Does the same debt-driven pattern show up at Asda, another PE-owned supermarket?"
},

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
