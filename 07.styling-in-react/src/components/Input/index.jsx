import "./index.scss";
const Input = ({ type, labelText }) => {
  return (
    <div id="input-wrapper">
      <label htmlFor="">{labelText}</label>
      <input type={type} name="" id="" />
    </div>
  );
};

export default Input;
