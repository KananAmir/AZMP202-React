import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles["header"]}>
          <h2 className={styles["logo"]}>Logo</h2>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
