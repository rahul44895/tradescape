import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="flex h-16 items-center gap-3 border-b border-slate-800 bg-slate-950 px-6">
      <img src={logo} alt="Tradescape logo" className="h-8 w-auto" />
      <span className="text-lg font-bold tracking-wide text-white uppercase">Tradescape</span>
    </header>
  );
};

export { Navbar };
