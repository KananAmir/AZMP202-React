import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import MainLayout from "./layouts/MainLayout";
import Favorites from "./pages/Favorites";
import { useContext } from "react";
import { ThemeContext } from "./context/TeamContext";

function App() {


  const { theme } = useContext(ThemeContext)

  console.log(theme);

  return (
    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#000", color: theme === "light" ? "#000" : "#fff" }}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
