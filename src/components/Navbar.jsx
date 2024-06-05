import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={`bg-[#3c0054] ${styles.navContainer}`}>
        <div></div>
      </nav>
    </header>
  );
};

export default Navbar;
