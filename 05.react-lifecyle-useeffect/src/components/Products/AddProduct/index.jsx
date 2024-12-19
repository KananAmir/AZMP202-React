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

  const [error, setError] = useState({
    titleError: "",
    imageError: "",
    priceError: "",
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

    if (!validate()) {
      return;
    }
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
      resetForm();
      // e.target.reset();
    }
  };

  function resetForm() {
    setProduct({
      title: "",
      image: "",
      price: 0,
      category: "men's clothing",
    });
  }
  const validate = () => {
    let isValid = true;

    setError({
      titleError: "",
      imageError: "",
      priceError: "",
    });
    if (!product.image) {
      isValid = false;
      setError((prevState) => {
        return { ...prevState, imageError: "image is required!" };
      });
    }
    if (!product.title) {
      isValid = false;
      setError((prevState) => {
        return { ...prevState, titleError: "title is required!" };
      });
    }
    if (!product.price) {
      isValid = false;
      setError((prevState) => ({
        ...prevState,
        priceError: "price is required!",
      }));
    }

    return isValid;
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
            if (e.target.value.trim()) {
              setError((prevState) => {
                return { ...prevState, imageError: "" };
              });
            } else {
              setError((prevState) => {
                return { ...prevState, imageError: "image is reqired!" };
              });
            }
            setProduct({ ...product, image: e.target.value.trim() });
          }}
          value={product.image}
        />
        <span className="error">{error.imageError}</span>
        <input
          type="text"
          name=""
          id="title"
          placeholder="title"
          onChange={(e) => {
            if (e.target.value.trim()) {
              setError((prevState) => {
                return { ...prevState, titleError: "" };
              });
            } else {
              setError((prevState) => {
                return { ...prevState, titleError: "title is reqired!" };
              });
            }
            setProduct({ ...product, title: e.target.value.trim() });
          }}
          value={product.title}
        />
        <span className="error">{error.titleError}</span>
        <input
          type="number"
          name=""
          id="price"
          placeholder="price"
          onChange={(e) => {
            if (+e.target.value) {
              setError((prevState) => {
                return { ...prevState, priceError: "" };
              });
            } else {
              setError((prevState) => {
                return { ...prevState, priceError: "price is reqired!" };
              });
            }
            setProduct({ ...product, price: e.target.value });
          }}
          value={product.price}
        />
        <span className="error">{error.priceError}</span>
        <label htmlFor="category">Select Category</label>
        <select
          name=""
          id="category"
          onChange={(e) => {
            console.log(error);
            setProduct({ ...product, category: e.target.value });
          }}
        >
          {/* <option value="" hidden>
            SELECT CATEGORY
          </option> */}
          {categories &&
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
