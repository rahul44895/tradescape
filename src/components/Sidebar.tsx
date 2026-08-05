import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/about", label: "About Me" },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {isOpen && <div className="fixed inset-0 top-16 z-30 bg-black/60 lg:hidden" onClick={onClose} />}
      <nav
        className={`fixed top-16 bottom-0 left-0 z-40 w-56 shrink-0 border-r border-slate-800 bg-slate-950 p-4 transition-transform duration-200 lg:static lg:top-auto lg:bottom-auto lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-emerald-500 text-slate-950" : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export { Sidebar };
