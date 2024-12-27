import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FavoritesProvider from "./context/FavoritesContext.jsx";
import BasketProvider from "./context/BasketContext.jsx";
import ThemeProvider from "./context/TeamContext.jsx";

createRoot(document.getElementById("root")).render(


  <BrowserRouter>
    <ThemeProvider>
      <BasketProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </BasketProvider>
    </ThemeProvider>
  </BrowserRouter>
);
