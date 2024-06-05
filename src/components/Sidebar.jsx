import React from "react";
import styles from "./Sidebar.module.css";
import { image } from "../assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div>
        <h2>ApeStore</h2>
      </div>

      <ul>
        <NavLink>
          <li>New Pairs</li>
        </NavLink>
        <NavLink>
          <li>New Pairs</li>
        </NavLink>
        <NavLink>
          <li>New Pairs</li>
        </NavLink>
      </ul>

      <div className={styles.bottom}>
        <img src={image} />
      </div>
    </aside>
  );
};

export default Sidebar;
