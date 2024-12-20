// import "./index.css";

import styles from "./index.module.css";

// const Button = () => {
//   return <button className="btn">Button</button>;
// };

// export default Button;
const Button = () => {
  return <button className={styles["btn"]}>Button</button>;
};

export default Button;
