import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Products from "./components/Products";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function App() {
  //fragment

  const data = "lorem";
  return (
    <>
      <Header />

      <hr />
      <h1>Hello React!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ex
        fugiat inventore repellat veritatis quidem, veniam enim. Asperiores
        debitis, tempore optio ab dolores perferendis quidem aliquid quisquam
        blanditiis eveniet fugiat.
      </p>

      <div className="cards">
        <Card
          title="acer"
          desc="Shop the latest Acer products, from Chromebooks, laptops, monitors, desktop PCs, and projectors for office, home, and entertainment use."
          price={1500}
        />
        <Card
          title="asus"
          desc="Shop the latest Acer products, from Chromebooks, laptops, monitors, desktop PCs, and projectors for office, home, and entertainment use."
          price={1750}
        />
        <Card
          title="hp"
          desc="Shop the latest Acer products, from Chromebooks, laptops, monitors, desktop PCs, and projectors for office, home, and entertainment use."
          price={2200}
        />
      </div>

      <hr />

      <Products />

      <hr />

      <Footer />
    </>
  );
}

export default App;

// function sum(firstNum, secondNum) {
//   return firstNum + secondNum;
// }

// sum(2, 5); // 7
// sum(13, 6); // 19
// sum(4, 17); // 21

// functional (hooks) vs class components
