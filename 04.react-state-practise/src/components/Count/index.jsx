import PropTypes from "prop-types";
const Count = ({ count }) => {
  return <h1>{count}</h1>;
};

Count.propTypes = {
  count: PropTypes.number,
};
export default Count;
