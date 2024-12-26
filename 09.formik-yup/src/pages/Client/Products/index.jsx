import { useState, useEffect } from "react";
import controller from "../../../services";
import { endpoints } from "../../../services/constants";
import ProductCard from "../../../components/Client/ProductCard";
import Grid from "@mui/material/Grid";
import { Container, InputLabel, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";

import { Helmet } from "react-helmet-async";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortValue, setSortValue] = useState("default");
  const [loading, setLoading] = useState(true);

  const filteredProducts = products.filter((p) =>
    p.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  const sortedProducts = filteredProducts.toSorted((a, b) => {
    switch (sortValue) {
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      case "titleAsc":
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      case "titleDesc":
        return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
    }
  });

  console.log(filteredProducts);

  const getProducts = async () => {
    try {
      setLoading(true);
      const data = await controller.getAllData(endpoints.products);

      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getCategries = async () => {
    try {
      const data = await controller.getAllData(endpoints.categories);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    getCategries();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.trim());
  };
  const handleChange = async (event) => {
    const data = await controller.getAllData(endpoints.products);

    if (event.target.value !== "all") {
      const filtered = data.filter((p) => p.category === event.target.value);
      setProducts(filtered);
    } else {
      setProducts(data);
    }
  };
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Products Page</title>
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

      <div id="products">
        <Container>
          <Grid container spacing={2}>
            <Grid xs={4} style={{ margin: "2rem 0" }}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                onChange={handleSearch}
              />
            </Grid>
            <Grid xs={4} style={{ margin: "2rem 0", padding: "0 2rem" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>{" "}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Sort Products"
                  onChange={(e) => {
                    setSortValue(e.target.value);
                  }}
                >
                  <MenuItem value={"default"}>Default</MenuItem>
                  <MenuItem value={"priceAsc"}>By Price Asc</MenuItem>
                  <MenuItem value={"priceDesc"}>By Price Desc</MenuItem>
                  <MenuItem value={"titleAsc"}>By Title Asc</MenuItem>
                  <MenuItem value={"titleDesc"}>By Title Desc</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={4} style={{ margin: "2rem 0", padding: "0 2rem" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={selectValue}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value={"all"}>ALL</MenuItem>
                  {categories.length > 0 &&
                    categories.map((c) => {
                      return (
                        <MenuItem value={c.id} key={c.id}>
                          {c.categoryName}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container spacing={5}>
            {!loading ? (
              sortedProducts?.map((p) => {
                return (
                  <Grid item xs={3} key={p.id}>
                    <ProductCard product={p} />
                  </Grid>
                );
              })
            ) : (
              <div style={{ margin: "100px auto" }}>
                <CircularProgress />
                <CircularProgress />
                <CircularProgress />
              </div>
            )}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Products;
