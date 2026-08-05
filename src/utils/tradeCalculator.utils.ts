const calc = (
  trades: {
    name: string;
    amt: number;
  }[],
  account: {
    starting_balance: number;
    maximum_drawdown_limit: number;
    daily_loss_limit: number;
  },
) => {
  let current_balance: number = account.starting_balance,
    current_day_profit = 0,
    current_day_loss = 0,
    peak_balance = account.starting_balance; //for today

  const winning_trades: { name: string; amt: number }[] = [];
  const losing_trades: { name: string; amt: number }[] = [];

  const total_amt = trades.reduce((acc, { name, amt }) => {
    current_balance += amt;
    peak_balance = Math.max(peak_balance, current_balance);
    if (amt > 0) {
      current_day_profit += amt;
      winning_trades.push({ name, amt });
    } else if (amt < 0) {
      current_day_loss += amt;
      losing_trades.push({ name, amt });
    }
    return acc + amt;
  }, 0);

  const largest_winning_trade = winning_trades.length ? winning_trades.reduce((a, b) => (b.amt > a.amt ? b : a)) : null;
  const largest_losing_trade = losing_trades.length ? losing_trades.reduce((a, b) => (b.amt < a.amt ? b : a)) : null;

  const win_rate = trades.length ? (winning_trades.length / trades.length) * 100 : 0;

  const current_drawdown = Math.max(0, peak_balance - current_balance);
  const remaining_drawdown = account.maximum_drawdown_limit - current_drawdown;
  const remaining_daily_loss_limit = account.daily_loss_limit - Math.abs(current_day_loss);

  const drawdown_limit_consumed = account.maximum_drawdown_limit ? (current_drawdown / account.maximum_drawdown_limit) * 100 : 0;
  const daily_loss_limit_consumed = account.daily_loss_limit ? (Math.abs(current_day_loss) / account.daily_loss_limit) * 100 : 0;

  const indicator = (() => {
    const val = Math.max(drawdown_limit_consumed, daily_loss_limit_consumed);

    if (val > 80) return "At Risk";
    if (val > 50) return "Approaching Limit";
    return "Safe";
  })();

  const avg_win = winning_trades.length ? current_day_profit / winning_trades.length : 0;
  const avg_loss = losing_trades.length ? current_day_loss / losing_trades.length : 0;

  return {
    current_balance,
    total_amt,
    winning_trades,
    losing_trades,
    win_rate,
    largest_winning_trade,
    largest_losing_trade,
    current_drawdown,
    remaining_drawdown,
    current_day_profit,
    current_day_loss,
    remaining_daily_loss_limit,
    drawdown_limit_consumed,
    daily_loss_limit_consumed,
    indicator,
    avg_win,
    avg_loss,
  };
};
export { calc };
