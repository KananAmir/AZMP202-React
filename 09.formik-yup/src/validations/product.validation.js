import * as Yup from "yup";

export const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(10, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .min(0, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
  thumbnail: Yup.string().url("Invalid url!").required("Required"),
  description: Yup.string()
    .min(50, "Too Short")
    .max(1000, "Too Long!")
    .required("Required"),
});
