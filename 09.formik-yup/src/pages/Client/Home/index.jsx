import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Home Page</title>
        <link rel="notImportant" href="https://www.chipotle.com" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://img.freepik.com/premium-vector/find-product-logo-design-template_145155-4160.jpg"
        />
        <meta name="whatever" value="notImportant" />
        <link rel="canonical" href="https://www.tacobell.com" />
        <meta property="og:title" content="A very important title" />
      </Helmet>

      <h1>Home Page</h1>
    </>
  );
};

export default Home;
