import logo from "../assets/logo.png";

type NavbarProps = {
  onToggleSidebar: () => void;
};

const Navbar = ({ onToggleSidebar }: NavbarProps) => {
  return (
    <header className="relative flex h-16 items-center border-b border-slate-800 bg-slate-950 px-4 lg:px-6">
      <button
        type="button"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
        className="rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-white lg:hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3 lg:static lg:left-auto lg:translate-x-0">
        <img src={logo} alt="Tradescape logo" className="h-8 w-auto" />
        <span className="text-lg font-bold tracking-wide text-white uppercase">Tradescape</span>
      </div>
    </header>
  );
};

export { Navbar };
