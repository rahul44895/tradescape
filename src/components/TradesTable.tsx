import { formatCurrency } from "../utils/format.utils";

type Trade = { name: string; amt: number };

const TradesTable = ({ trades }: { trades: Trade[] }) => (
  <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
    <table className="min-w-full divide-y divide-slate-800 text-sm">
      <thead className="bg-slate-900">
        <tr>
          <th className="px-4 py-2 text-left font-medium text-slate-400">Trade</th>
          <th className="px-4 py-2 text-right font-medium text-slate-400">Amount</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800">
        {trades.map((trade, index) => (
          <tr key={index}>
            <td className="px-4 py-2 text-slate-300">{trade.name}</td>
            <td className={`px-4 py-2 text-right font-medium ${trade.amt >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
              {trade.amt >= 0 ? "+" : ""}
              {formatCurrency(trade.amt)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export { TradesTable };
