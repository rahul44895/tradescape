# Trader Risk Dashboard — TradeScape Assignment

A dashboard that lets a trader see, at a glance, how they're performing and whether they're at risk of violating their account rules.

**Live demo:** https://tradescape-fz0n.onrender.com
**Repo:** https://github.com/rahul44895/tradescape

---

## Tech Stack

- React (Vite)
- Tailwind CSS
- No backend, no database, no auth — all data is static mock data (`src/data.js`), per the assignment's scope.

---

## How to Run Locally

```bash
git clone <repo-url>
cd <repo-folder>
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

---

## What I Built

The dashboard is split into four sections:

1. **Account Summary** — current balance, total P&L, win rate, and trade count, all derived from the trade data.
2. **Trade Quality** — largest winning/losing trade, average win, average loss, and a win/loss ratio insight (this is my added feature).
3. **Risk Status** — a Safe / Approaching Limit / At Risk indicator, backed by two progress bars showing how much of the max drawdown and daily loss limit have been consumed, and how much room remains in each.
4. **Trades** — the raw trade list for reference.

### Assumptions made

- **All 5 trades are treated as happening "today."** The trade data has no timestamps, so "current day's loss" is calculated across the full trade list rather than a filtered subset. In a real system this would filter by trade date.
- **Trades with `amt === 0`** (if any existed) are excluded from both winning and losing trade counts, and from win rate — they're treated as scratch trades, not wins or losses.
- **Risk status thresholds** are my own choice, since the assignment leaves this open: under 50% of either limit consumed → Safe; 50–80% → Approaching Limit; over 80% → At Risk. The status reflects whichever of the two limits (drawdown or daily loss) is closer to being breached, since that's the one that actually determines whether the trader can keep trading.

---

## Additional Feature: Average Win vs. Average Loss (+ ratio)

**What I added:** Average winning trade size, average losing trade size, and a one-line derived insight ("Your average win is 3.6x your average loss").

**Why:** Win rate alone can be misleading — a trader can win 60% of trades and still lose money overall if their losses are large relative to their wins. Average win/loss size, and the ratio between them, is a standard way traders and risk desks evaluate whether a strategy has a real edge, independent of win rate. It extends the dashboard's core theme — helping the trader understand their actual risk/reward profile — rather than adding an unrelated stat.

I considered an equity curve and performance-by-asset as alternatives, but with only 5 trades and 3 traded assets, both would have too little data to be meaningfully useful. Average win/loss holds up regardless of sample size and ties directly into risk awareness, which is the dashboard's stated purpose.

---

## Product Questions

**1. What is drawdown in trading?**

Drawdown is the decline in account balance from its highest point (peak equity) to a subsequent lower point. It's measured from the peak, not from the starting balance — so a trader can be in drawdown even while still profitable overall, if they've fallen from a higher point they'd previously reached.

**2. Why would a trader care about remaining drawdown rather than just their current P&L?**

P&L tells a trader how they're doing; remaining drawdown tells them how much room they have left before their account gets shut down. These are different questions. A trader can be profitable overall (positive P&L) and still be close to violating their account's drawdown rule if they've pulled back sharply from a recent high. Remaining drawdown is the actionable number — it answers "can I keep trading the way I have been," which P&L alone can't answer.

**3. If you had another day, what would you improve?**

- Add real timestamps to trades so "current day's loss" is calculated from an actual day boundary instead of assuming all trades are from today.
- Add a small equity curve chart once there's enough trade history to make it meaningful.

- Make the Safe/Approaching/At Risk thresholds configurable rather than hardcoded, since different accounts may have different risk tolerances.
