import { NavLink } from "react-router-dom"
import styles from "./index.module.css"

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/wishlist"}>Wishlist</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/basket"}>Basket</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header