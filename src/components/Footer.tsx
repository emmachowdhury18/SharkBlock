import { links } from "@/constants/links";
import "../Layout.css";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-grid">
          <div>
            <p className="nav-link footer-text">Quick Links</p>
            <ul>
              {links.map(({ to, label }) => (
                <li key={to}>
                  <p className="nav-link footer-text body">
                    <NavLink to={to}>{label}</NavLink>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="nav-link footer-text">Contact Us</p>
            <ul>
              <li>
                <p className="nav-link footer-text body">(000) 000-0000</p>
                <p className="nav-link footer-text body">
                  <a
                    href="mailto:testemail@gmail.com"
                    style={{ textDecoration: "underline" }}
                  >
                    testemail@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
