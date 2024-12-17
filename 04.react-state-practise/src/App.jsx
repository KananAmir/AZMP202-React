import "./App.css";
import Counter from "./components/Counter";
import Layout from "./components/Layout";
import List from "./components/List";
import Students from "./components/Students";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Header />

      {/* <section>
        <Layout>
          <h2>azmp202</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem voluptas aut odio quo? Nulla reiciendis ad id.
          </p>
        </Layout>
      </section> */}

      <main>
        <Counter />

        <List>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
        </List>

        <hr />

        <Students />
      </main>
      <Footer />
    </>
  );
}

export default App;
