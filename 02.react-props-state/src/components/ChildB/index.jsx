import PropTypes from "prop-types";
const ChildB = (props) => {
  return <div>User Name: {props.userName}</div>;
};

ChildB.propTypes = {
  userName: PropTypes.string,
};
export default ChildB;
