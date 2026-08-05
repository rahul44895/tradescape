import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { trades, account } from "./config/data";
import { calc } from "./utils/tradeCalculator.utils";
import { Dashboard } from "./components/Dashboard";
import { AboutMe } from "./components/AboutMe";
import { Layout } from "./components/Layout";

function App() {
  const data = calc(trades, account);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard trades={trades} data={data} />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
