import { useState, useEffect } from "react";
import controller from "../../../services";
import { endpoints } from "../../../services/constants";
import "./index.css";
import Swal from "sweetalert2";

const AddProduct = ({ products, setProducts }) => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    image: "",
    price: 0,
    category: "men's clothing",
  });

  const getCategories = async () => {
    const data = await controller.getAllData(endpoints.categories);
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(product);

    const response = await controller.addNewData(endpoints.products, product);

    if (response.status === 201) {
      setProducts([...products, product]);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add Product</legend>
        <input
          type="url"
          name=""
          id="photo"
          placeholder="image"
          onChange={(e) => {
            setProduct({ ...product, image: e.target.value.trim() });
          }}
        />
        <input
          type="text"
          name=""
          id="title"
          placeholder="title"
          onChange={(e) => {
            setProduct({ ...product, title: e.target.value.trim() });
          }}
        />
        <input
          type="number"
          name=""
          id="price"
          placeholder="price"
          onChange={(e) => {
            setProduct({ ...product, price: e.target.value });
          }}
        />
        <label htmlFor="category">Select Category</label>
        <select
          name=""
          id="category"
          onChange={(e) => {
            setProduct({ ...product, category: e.target.value });
          }}
        >
          {/* <option value="" hidden>
            SELECT CATEGORY
          </option> */}
          {categories.length &&
            categories.map((c) => {
              return <option key={c.id}>{c.categoryName}</option>;
            })}
        </select>
        <input type="submit" />
      </fieldset>
    </form>
  );
};

export default AddProduct;
