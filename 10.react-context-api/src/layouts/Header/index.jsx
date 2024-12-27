import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import ChangeTheme from "../../components/ChangeTheme";

const Header = () => {

  const {favorites} = useContext(FavoritesContext)
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"}>Favorites <sup style={{color: "red", fontSize: "1.2rem"}}>{favorites.length}</sup></NavLink>
          </li>
          <li>
            <ChangeTheme/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
