import React from "react";
import styles from "./Sidebar.module.css";
import { image, logoImage } from "../assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src={logoImage} className={styles.logoImage} />
        <h2 className={styles.logoTitle}>ApeStore</h2>
      </div>

      <li className={styles.navItems}>
        <NavLink to="/" className={`${styles.link}`}>
          Home
        </NavLink>
      </li>
      <ul className={styles.navMenu}>
        <li className={styles.link}>
          <NavLink>New Pairs</NavLink>
        </li>

        <li className={styles.link}>
          {" "}
          <NavLink>My Apes</NavLink>
        </li>

        <li className={styles.link}>
          <NavLink>Token Deployer </NavLink>
        </li>
      </ul>

      <div className={styles.bottom}>
        <img src={image} />
      </div>
    </aside>
  );
};

export default Sidebar;
