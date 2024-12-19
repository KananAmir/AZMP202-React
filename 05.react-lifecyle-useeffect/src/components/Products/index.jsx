import { useEffect, useState } from "react";
import controller from "../../services";
import { endpoints } from "../../services/constants";
import AddProduct from "./AddProduct";
import Table from "./Table";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const getProducts = async () => {
    const data = await controller.getAllData(endpoints.products);
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLocaleLowerCase().includes(searchQuery)
  );

  console.log("filteredProducts", filteredProducts);
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
      <div style={{ margin: "1.5rem 0" }}>
        <input
          type="search"
          placeholder="search product.."
          onChange={(e) => setSearchQuery(e.target.value.trim())}
        />
      </div>
      <Table products={filteredProducts} setProducts={setProducts} />
    </div>
  );
};

export default Products;
