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



];
