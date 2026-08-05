import type { calc } from "../utils/tradeCalculator.utils";

type RiskIndicator = ReturnType<typeof calc>["indicator"];

const RISK_STYLES: Record<RiskIndicator, string> = {
  Safe: "bg-emerald-500/10 text-emerald-400",
  "Approaching Limit": "bg-amber-500/10 text-amber-400",
  "At Risk": "bg-rose-500/10 text-rose-400",
};

const RiskBadge = ({ indicator }: { indicator: RiskIndicator }) => (
  <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${RISK_STYLES[indicator]}`}>
    {indicator}
  </span>
);

export { RiskBadge };
export type { RiskIndicator };
