import type { calc } from "../utils/tradeCalculator.utils";

type RiskIndicator = ReturnType<typeof calc>["indicator"];

const RISK_STYLES: Record<RiskIndicator, string> = {
  Safe: "bg-emerald-100 text-emerald-800",
  "Approaching Limit": "bg-amber-100 text-amber-800",
  "At Risk": "bg-rose-100 text-rose-800",
};

const RiskBadge = ({ indicator }: { indicator: RiskIndicator }) => (
  <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${RISK_STYLES[indicator]}`}>
    {indicator}
  </span>
);

export { RiskBadge };
export type { RiskIndicator };
