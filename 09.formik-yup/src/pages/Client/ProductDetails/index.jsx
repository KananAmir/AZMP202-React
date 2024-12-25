import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const nav = useNavigate();
  return (
    <div>
      <h1>Product Details</h1>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetails;
