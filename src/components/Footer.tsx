import { links } from "@/constants/links";
import "../Layout.css";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <footer>
        <div className="flex footer-grid">
          <div>
            <h2 style={{ fontSize: "2rem" }}>Quick Links</h2>
            <ul>
              {links.map(({ to, label }) => (
                <li key={to}>
                  <h2>
                    <NavLink to={to}>{label}</NavLink>
                  </h2>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontSize: "2rem" }}>Contact Us</h2>
            <ul>
              <li>
                <h2>(000) 000-0000</h2>
                <h2>
                  <a
                    href="mailto:testemail@gmail.com"
                    style={{ textDecoration: "underline" }}
                  >
                    testemail@gmail.com
                  </a>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
