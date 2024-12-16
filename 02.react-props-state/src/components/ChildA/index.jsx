import ChildB from "../ChildB";
import PropTypes from "prop-types";
const ChildA = ({ userName }) => {
  return (
    <div>
      ChildA
      <ChildB userName={userName} />
    </div>
  );
};

ChildA.propTypes = {
  userName: PropTypes.string,
};
export default ChildA;
