import "./Layout.css";
import "@fontsource/bebas-neue";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router";

const links = [
  { to: "/about", label: "About" },
  { to: "/customer-testimonials", label: "Customer Testimonials" },
  { to: "/shop", label: "Shop" },
];

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <div className="background">
        {/* Header Component */}
        <header className="header-grid">
          {/* Hamburger menu shows for mobile, hidden for desktop */}
          <button
            className="sidebar-button justify-self-start"
            aria-label="Open Sidebar"
            aria-expanded={sidebarOpen}
            aria-controls="sidebar"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="icon" />
          </button>

          <h1 className="logo justify-self-start">
            <NavLink to="/">SharkBlock</NavLink>
          </h1>
          <h2 className="nav-link justify-self-center">
            <NavLink to="/about">About</NavLink>
          </h2>
          <h2 className="nav-link justify-self-center">
            <NavLink to="/customer-testimonials">Customer Testimonials</NavLink>
          </h2>
          <h2 className="nav-link justify-self-center">
            <NavLink to="/shop">Shop</NavLink>
          </h2>
          <button className="justify-self-end" aria-label="Open cart">
            <ShoppingCart className="icon" />
          </button>
        </header>

        {/* Mobile sidebar */}
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

        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
