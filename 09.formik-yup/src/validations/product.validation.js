import * as Yup from "yup";

export const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(10, "Title must be at least 10 characters.")
    .max(50, "Title can't exceed 50 characters.")
    .required("Title is required."),

  brand: Yup.string()
    .min(2, "Brand name must be at least 2 characters.")
    .max(50, "Brand name can't exceed 50 characters.")
    .required("Brand is required."),

  price: Yup.number()
    .min(0, "Price can't be negative.")
    .max(500, "Price can't exceed $500.")
    .required("Price is required."),

  thumbnail: Yup.string()
    .url("Enter a valid URL.")
    .required("Image URL is required."),

  description: Yup.string()
    .min(50, "Description must be at least 50 characters.")
    .max(1000, "Description can't exceed 1000 characters.")
    .required("Description is required."),

  stock: Yup.number()
    .min(1, "Stock must be at least 1.")
    .required("Stock is required."),
});
