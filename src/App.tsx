import "./App.css";
import { trades, account } from "./config/data";
import { calc } from "./utils/tradeCalculator.utils";
import { Dashboard } from "./components/Dashboard";

function App() {
  const data = calc(trades, account);
  return <Dashboard trades={trades} data={data} />;
}

export default App;
