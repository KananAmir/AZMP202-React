import styles from "./index.module.scss";
const Header = () => {
  console.log(styles);

  return (
    <header>
      <div className="container">
        <div className={styles["header"]}>
          <h2 className={styles.logo}>Logobakery</h2>
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  className={`${styles["bg-red"]} ${styles["text-green"]}}`}
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </nav>
          <button className={styles["contact-btn"]}>Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
