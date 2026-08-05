import { formatCurrency } from "../utils/format.utils";

type Trade = { name: string; amt: number };

const TradesTable = ({ trades }: { trades: Trade[] }) => (
  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
    <table className="min-w-full divide-y divide-slate-200 text-sm">
      <thead className="bg-slate-50">
        <tr>
          <th className="px-4 py-2 text-left font-medium text-slate-500">Trade</th>
          <th className="px-4 py-2 text-right font-medium text-slate-500">Amount</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {trades.map((trade, index) => (
          <tr key={index}>
            <td className="px-4 py-2 text-slate-700">{trade.name}</td>
            <td className={`px-4 py-2 text-right font-medium ${trade.amt >= 0 ? "text-emerald-600" : "text-rose-600"}`}>
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
