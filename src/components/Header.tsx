import { links } from "@/constants/links";
import "../Layout.css";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";


export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <header className="header-grid">
        {/* Hamburger menu for small screens */}
        <button
          className="sidebar-button justify-self-start"
          aria-label="Open Sidebar"
          aria-expanded={sidebarOpen}
          aria-controls="sidebar"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="icon" />
        </button>

        {/* Desktop header */}
        <h1 className="logo justify-self-start">
          <NavLink to="/">SharkBlock</NavLink>
        </h1>
        {links.map(({ to, label }) => (
          <h2 key={to} className="nav-link justify-self-center">
            <NavLink to={to}>{label}</NavLink>
          </h2>
        ))}
        <button className="justify-self-end" aria-label="Open cart">
          <ShoppingCart className="icon" />
        </button>
      </header>

      {/* Sidebar for small screens */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={closeSidebar}
      />
      <nav id="sidebar" className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button
          className="sidebar-close"
          aria-label="Close sidebar"
          onClick={closeSidebar}
        >
          <X className="icon" />
        </button>
        <ul>
          {links.map(({ to, label }) => (
            <li key={to}>
              <h2>
                <NavLink to={to} onClick={closeSidebar}>
                  {label}
                </NavLink>
              </h2>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
