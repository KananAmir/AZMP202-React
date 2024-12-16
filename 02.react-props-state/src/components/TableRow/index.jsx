import PropTypes from "prop-types";

const TableRow = ({ product }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.category}</td>
      <td>
        <img width={100} src={product.image} alt="" />
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  product: PropTypes.object,
};
export default TableRow;
