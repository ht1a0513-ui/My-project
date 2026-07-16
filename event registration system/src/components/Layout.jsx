import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../assets/Components/Navbar";
import Footer from "../assets/Components/Footer/Footer";
import "./Layout.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/login", label: "Login" },
];

function Layout({ theme, onThemeChange }) {
  return (
    <div className="app-shell">
      <Navbar title="🎉 Event Registration System" subtitle="Multi-page event management portal" />

      <div className="top-nav">
        <div className="top-nav__links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "top-nav__link active" : "top-nav__link")}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="theme-toggle"
          onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      <main className="main-layout">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
