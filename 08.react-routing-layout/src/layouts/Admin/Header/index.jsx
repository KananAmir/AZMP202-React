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
                <NavLink to={"/admin"}>Dashboard</NavLink>
              </li>
              <li>
                <NavLink to={"/admin/users"}>Users</NavLink>
              </li>
              <li>
                <NavLink to={"/admin/products"}>Products</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
