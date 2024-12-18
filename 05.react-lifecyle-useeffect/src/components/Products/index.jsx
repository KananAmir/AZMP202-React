import { useEffect, useState } from "react";
import controller from "../../services";
import { endpoints } from "../../services/constants";
import AddProduct from "./AddProduct";
import Table from "./Table";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await controller.getAllData(endpoints.products);
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  //   useEffect(() => {
  //     controller
  //       .getAllData("products")
  //       .then((data) => {
  //         setProducts(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <div>
      <AddProduct products={products} setProducts={setProducts} />
      <Table products={products} setProducts={setProducts} />
    </div>
  );
};

export default Products;
