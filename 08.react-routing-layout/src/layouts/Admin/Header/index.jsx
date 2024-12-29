import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

const AdminHeader = () => {
  return (
    <header>
      <div className="container">
        <div className={styles["header"]}>
          <h2 className={styles["logo"]}>Admin Logo</h2>
          <nav>
            <ul>
              <li>
                <NavLink to={"/admin"} className={({ isActive }) => (isActive ? styles.active : "")} end>Dashboard</NavLink>
              </li>
              <li>
                <NavLink to={"/admin/users"} className={({ isActive }) => (isActive ? styles.active : "")}>Users</NavLink>
              </li>
              <li>
                <NavLink to={"/admin/products"} className={({ isActive }) => (isActive ? styles.active : "")}>Products</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
