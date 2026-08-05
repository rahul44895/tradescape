type StatCardProps = {
  label: string;
  value: string;
  subvalue?: string;
  tone?: "neutral" | "positive" | "negative";
};

const TONE_CLASSES: Record<NonNullable<StatCardProps["tone"]>, string> = {
  neutral: "text-slate-900",
  positive: "text-emerald-600",
  negative: "text-rose-600",
};

const StatCard = ({ label, value, subvalue, tone = "neutral" }: StatCardProps) => (
  <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
    <p className="text-sm font-medium text-slate-500">{label}</p>
    <p className={`mt-1 text-2xl font-semibold ${TONE_CLASSES[tone]}`}>{value}</p>
    {subvalue && <p className="mt-1 truncate text-xs text-slate-500">{subvalue}</p>}
  </div>
);

export { StatCard };
