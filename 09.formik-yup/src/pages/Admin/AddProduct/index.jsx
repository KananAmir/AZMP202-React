import { useFormik } from "formik";
import { ProductSchema } from "../../../validations/product.validation";
import controller from "../../../services";
import { endpoints } from "../../../services/constants";
const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      thumbnail: "",
      description: "",
    },
    onSubmit: async (values) => {
      console.log(values);

      const res = await controller.addNewData(endpoints.products, values);
      formik.resetForm();
    },
    validationSchema: ProductSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      {formik.errors.title && formik.touched.title && (
        <p style={{ color: "red" }}>{formik.errors.title}</p>
      )}
      <br />
      <br />
      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      {formik.errors.price && formik.touched.price && (
        <p style={{ color: "red" }}>{formik.errors.price}</p>
      )}
      {/* {console.log(formik.errors)} */}
      {/* {console.log(formik.touched)} */}

      <br />
      <br />
      <label htmlFor="thumbnail">Image Url</label>
      <input
        id="thumbnail"
        name="thumbnail"
        type="url"
        onChange={formik.handleChange}
        value={formik.values.thumbnail}
      />
      {formik.errors.thumbnail && formik.touched.thumbnail && (
        <p style={{ color: "red" }}>{formik.errors.thumbnail}</p>
      )}
      <br />
      <br />
      <label htmlFor="description">Description</label>

      <textarea
        name="description"
        id="description"
        onChange={formik.handleChange}
        value={formik.values.description}
        rows={5}
        cols={50}
      ></textarea>
      {formik.errors.description && formik.touched.description && (
        <p style={{ color: "red" }}>{formik.errors.description}</p>
      )}
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProduct;
