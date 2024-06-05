import React from "react";
import styles from "./Sidebar.module.css";
import { image, logoImage } from "../assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src={logoImage}  className={styles.logoImage}/>
        <h2 className={styles.logoTitle}>ApeStore</h2>
      </div>

      <ul>
        <NavLink>
          <li>New Pairs</li>
        </NavLink>
        <NavLink>
          <li>My Apes</li>
        </NavLink>
        <NavLink>
          <li>Token Deployer</li>
        </NavLink>
      </ul>

      <div className={styles.bottom}>
        <img src={image} />
      </div>
    </aside>
  );
};

export default Sidebar;
