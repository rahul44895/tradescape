import { StatCard } from "./StatCard";
import { RiskBadge } from "./RiskBadge";
import { RiskMeter } from "./RiskMeter";
import { TradesTable } from "./TradesTable";
import { formatCurrency } from "../utils/format.utils";
import type { calc } from "../utils/tradeCalculator.utils";

type Trade = { name: string; amt: number };

type DashboardProps = {
  trades: Trade[];
  data: ReturnType<typeof calc>;
};

const Dashboard = ({ trades, data }: DashboardProps) => {
  const isProfitable = data.total_amt >= 0;
  const hasWinLossPair = data.winning_trades.length > 0 && data.losing_trades.length > 0;
  const winLossRatio = hasWinLossPair ? data.avg_win / Math.abs(data.avg_loss) : null;

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header>
          <h1 className="text-xl font-semibold text-slate-900">TradeScape</h1>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <StatCard label="Current Balance" value={formatCurrency(data.current_balance)} />
              <StatCard
                label="Total P&L"
                value={`${isProfitable ? "+" : ""}${formatCurrency(data.total_amt)}`}
                tone={isProfitable ? "positive" : "negative"}
              />
              <StatCard label="Win Rate" value={`${data.win_rate.toFixed(1)}%`} />
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Trade Count</p>
                <dl className="mt-1 space-y-1 text-sm">
                  <div className="flex items-baseline justify-between">
                    <dt className="text-slate-600">Winning Trades</dt>
                    <dd className="font-semibold text-emerald-600">{data.winning_trades.length}</dd>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <dt className="text-slate-600">Losing Trades</dt>
                    <dd className="font-semibold text-rose-600">{data.losing_trades.length}</dd>
                  </div>
                </dl>
              </div>
              <StatCard
                label="Largest Winning Trade"
                value={data.largest_winning_trade ? formatCurrency(data.largest_winning_trade.amt) : "—"}
                subvalue={data.largest_winning_trade?.name}
                tone="positive"
              />
              <StatCard
                label="Largest Losing Trade"
                value={data.largest_losing_trade ? formatCurrency(data.largest_losing_trade.amt) : "—"}
                subvalue={data.largest_losing_trade?.name}
                tone="negative"
              />
            </section>

            <section>
              <h2 className="mb-2 text-sm font-medium text-slate-500">Trades</h2>
              <TradesTable trades={trades} />
            </section>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <h2 className="mb-3 text-sm font-medium text-slate-500">Trade Quality</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <StatCard label="Average Win" value={formatCurrency(data.avg_win)} tone="positive" />
                <StatCard label="Average Loss" value={formatCurrency(data.avg_loss)} tone="negative" />
              </div>
              <p className="mt-3 text-sm text-slate-600">
                {winLossRatio !== null
                  ? `Your average win is ${winLossRatio.toFixed(1)}x your average loss.`
                  : "Not enough win/loss data yet to compare."}
              </p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-medium text-slate-500">Risk Status</h2>
                <RiskBadge indicator={data.indicator} />
              </div>
              <div className="space-y-4">
                <RiskMeter label="Max Drawdown" percentConsumed={data.drawdown_limit_consumed} remaining={data.remaining_drawdown} />
                <RiskMeter label="Daily Loss Limit" percentConsumed={data.daily_loss_limit_consumed} remaining={data.remaining_daily_loss_limit} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
