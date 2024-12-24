import { NavLink } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <nav>
            {/* <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/products"}>Products</Link>
              </li>
            </ul> */}
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "active" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "text-white"
                  }
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "text-white"
                  }
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "text-white"
                  }
                  to={"/products"}
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
