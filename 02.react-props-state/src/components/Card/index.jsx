import Button from "../Button";
import PropTypes from "prop-types";
const Card = ({ title, price, desc }) => {
  // const { title, price, desc } = props;

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>Price: {price} AZN</p>

      {/* self enclose */}
      <Button />
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.string,
};

export default Card;
