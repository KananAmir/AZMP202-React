import { useFormik } from "formik";
import { ProductSchema } from "../../../validations/product.validation"; // You may need to update the validation schema
import controller from "../../../services";
import { endpoints } from "../../../services/constants";
import styles from "./index.module.scss"; // Importing SCSS file for styling

const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      brand: "",
      price: "",
      thumbnail: "",
      description: "",
      stock: "",
    },
    onSubmit: async (values) => {
      const res = await controller.addNewData(endpoints.products, values);

      formik.resetForm();
    },
    validationSchema: ProductSchema, // Update your schema to handle the new fields
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        className={styles.input}
      />
      {formik.errors.title && formik.touched.title && (
        <p className={styles.error}>{formik.errors.title}</p>
      )}

      <label htmlFor="brand">Brand</label>
      <input
        id="brand"
        name="brand"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.brand}
        className={styles.input}
      />
      {formik.errors.brand && formik.touched.brand && (
        <p className={styles.error}>{formik.errors.brand}</p>
      )}

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.price}
        className={styles.input}
      />
      {formik.errors.price && formik.touched.price && (
        <p className={styles.error}>{formik.errors.price}</p>
      )}

      <label htmlFor="thumbnail">Image URL</label>
      <input
        id="thumbnail"
        name="thumbnail"
        type="url"
        onChange={formik.handleChange}
        value={formik.values.thumbnail}
        className={styles.input}
      />
      {formik.errors.thumbnail && formik.touched.thumbnail && (
        <p className={styles.error}>{formik.errors.thumbnail}</p>
      )}

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        onChange={formik.handleChange}
        value={formik.values.description}
        rows={5}
        className={styles.textarea}
      ></textarea>
      {formik.errors.description && formik.touched.description && (
        <p className={styles.error}>{formik.errors.description}</p>
      )}

      <label htmlFor="stock">Stock</label>
      <input
        id="stock"
        name="stock"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.stock}
        className={styles.input}
      />
      {formik.errors.stock && formik.touched.stock && (
        <p className={styles.error}>{formik.errors.stock}</p>
      )}

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default AddProduct;
