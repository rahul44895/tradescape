import { formatCurrency } from "../utils/format.utils";

type RiskMeterProps = {
  label: string;
  percentConsumed: number;
  remaining: number;
};

const barColor = (pct: number) => {
  if (pct > 80) return "bg-rose-500";
  if (pct > 50) return "bg-amber-500";
  return "bg-emerald-500";
};

const RiskMeter = ({ label, percentConsumed, remaining }: RiskMeterProps) => {
  const clamped = Math.min(100, Math.max(0, percentConsumed));

  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-medium text-slate-300">{label}</span>
        <span className="text-slate-500">{percentConsumed.toFixed(1)}% used</span>
      </div>
      <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-800">
        <div className={`h-full rounded-full ${barColor(clamped)}`} style={{ width: `${clamped}%` }} />
      </div>
      <p className="mt-1 text-xs text-slate-500">{formatCurrency(remaining)} remaining</p>
    </div>
  );
};

export { RiskMeter };
