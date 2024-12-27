import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../services/constants";

const ProductDetails = () => {

  const [products, setProduct] = useState(null)
  const {id} = useParams()
 

  const getProduct = async()=>{
    try {
      const {data} = await axios(`${BASE_URL}products/${id}`)

      console.log(data);
      
      setProduct(data)
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    getProduct()
  }, [])
  
  return <div>ProductDetails</div>;
};

export default ProductDetails;
