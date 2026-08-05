type StatCardProps = {
  label: string;
  value: string;
  subvalue?: string;
  tone?: "neutral" | "positive" | "negative";
};

const TONE_CLASSES: Record<NonNullable<StatCardProps["tone"]>, string> = {
  neutral: "text-white",
  positive: "text-emerald-400",
  negative: "text-rose-400",
};

const StatCard = ({ label, value, subvalue, tone = "neutral" }: StatCardProps) => (
  <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
    <p className="text-sm font-medium text-slate-400">{label}</p>
    <p className={`mt-1 text-2xl font-semibold ${TONE_CLASSES[tone]}`}>{value}</p>
    {subvalue && <p className="mt-1 truncate text-xs text-slate-500">{subvalue}</p>}
  </div>
);

export { StatCard };
