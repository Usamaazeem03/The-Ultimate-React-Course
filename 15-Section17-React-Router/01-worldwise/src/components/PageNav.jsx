import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            <span>{location.pathname === "/login" ? "Logout" : "Login"}</span>
          </NavLink>
        </li>
      </ul>

      {/* Optional CTA */}
    </nav>
  );
}

export default PageNav;
