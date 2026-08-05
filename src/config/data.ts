const trades: {
  name: string;
  amt: number;
}[] = [
  {
    name: "BTC Long",
    amt: 1200,
  },
  {
    name: "ETH Short",
    amt: -450,
  },
  {
    name: "BTC Short",
    amt: 800,
  },
  {
    name: "SOL Long",
    amt: -300,
  },
  {
    name: "ETH Long",
    amt: 2000,
  },
];

const account: {
  starting_balance: number;
  maximum_drawdown_limit: number;
  daily_loss_limit: number;
} = { starting_balance: 100000, maximum_drawdown_limit: 10000, daily_loss_limit: 5000 };

export { trades, account };
