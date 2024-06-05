import React from "react";
import styles from "./Sidebar.module.css";
import { image, logoImage, myApe, tokenDevIcon } from "../assets";
import { NavLink } from "react-router-dom";
import NewPairs from "../Pages/NewPairs";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src={logoImage} className={styles.logoImage} />
        <h2 className={styles.logoTitle}>ApeStore</h2>
      </div>

      <ul className={styles.navMenu}>
        <img src={NewPairs} />
        <li className={styles.navItems}>
          <NavLink to={"/"} className={`${styles.link}`}>
            New Pairs
          </NavLink>
        </li>

        <li className={styles.navItems}>
          <img src={myApe} />
          <NavLink to={"myapes"} className={`${styles.link}`}>
            My Apes
          </NavLink>
        </li>

        <li className={styles.navItems}>
          <img src={tokenDevIcon} />
          <NavLink to={"tokendeveloper"} className={`${styles.link}`}>
            Token Deployer{" "}
          </NavLink>
        </li>
      </ul>

      <div className={styles.bottom}>
        <img src={image} />
      </div>
    </aside>
  );
};

export default Sidebar;
