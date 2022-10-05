import React from "react";

import styles from "./Sidebar.module.scss";

import { Link, useLocation } from "react-router-dom";

const sidebarNavLinks = ["Расходы", "Отчёт", "Аккаунты", "Настройки"];

export default function Sidebar({ Logout }) {
  const location = useLocation();

  return (
    <>
      <nav className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <nav className={styles.sidebarNav}>
            <ul className={styles.linksRow}>
              {sidebarNavLinks.map((sidebarNavLink) => (
                <li className={styles.sidebarNavItem} key={sidebarNavLink}>
                  <Link
                    className={
                      location.pathname === `/${sidebarNavLink}`
                        ? styles.sidebarNavLinkActive
                        : styles.sidebarNavLink
                    }
                    to={`/${sidebarNavLink}`}
                  >
                    {sidebarNavLink.charAt(0).toUpperCase() +
                      sidebarNavLink.slice(1)}
                  </Link>
                </li>
              ))}
              <button color="blue" className={styles.button} onClick={Logout}>
                Выйти
              </button>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
}
