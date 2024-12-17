import PropTypes from "prop-types";
const Increment = ({ setCount }) => {
  const handleIncrement = () => {
    setCount((c) => c + 1);
  };
  return <button onClick={handleIncrement}>Increment</button>;
};

Increment.propTypes = {
  setCount: PropTypes.func,
};
export default Increment;
