import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Navbar />
      <div className="flex flex-col">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
