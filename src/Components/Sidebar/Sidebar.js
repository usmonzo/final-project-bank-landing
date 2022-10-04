import React from "react";

import styles from "./Sidebar.module.scss";

import usmonzo from "./usmonzo.jpeg";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const sidebarNavLinks = ["Расходы", "Отчёт", "Аккаунты", "Настройки"];

export default function Sidebar({ Logout }) {
  const location = useLocation();

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img
                className={styles.profileAvatar}
                src={usmonzo}
                alt="samantha"
              />
              <p className={styles.notifications}>4</p>
              <h2>
                Баланс: <span className={styles.balance}>8 996 $</span>
              </h2>
              <div className={styles.userNameEmail}>
                <p className={styles.userName}>Усмон Тураев</p>
                <p className={styles.userEmail}>usmonzo@gmail.com</p>
              </div>
              <Button color="blue" sx={{ margin: "20px 0px" }} onClick={Logout}>
                Выйти
              </Button>
            </div>
          </div>

          <nav className={styles.sidebarNav}>
            <ul>
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
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
