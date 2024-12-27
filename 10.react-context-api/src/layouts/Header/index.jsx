import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import ChangeTheme from "../../components/ChangeTheme";

const Header = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <header id={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.navLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={styles.navLink}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={styles.navLink}>
              Favorites <sup className={styles.favoriteCount}>{favorites.length}</sup>
            </NavLink>
          </li>
          <li>
            <ChangeTheme />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
