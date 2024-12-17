import PropTypes from "prop-types";
const List = ({ children }) => {
  return <ul>{children}</ul>;
};

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default List;
