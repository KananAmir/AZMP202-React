import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} /> */}

        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
          <Route path="edit" element={<EditProduct />} />
        </Route>

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
