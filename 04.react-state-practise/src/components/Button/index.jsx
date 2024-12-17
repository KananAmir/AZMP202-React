import "./index.scss";
const Button = ({ btnName, cName, type }) => {
  return (
    <button className={`btn ${cName}`} type={type}>
      {btnName}
    </button>
  );
};

export default Button;
