import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Row } from 'antd';
const { Meta } = Card;
import { Link } from "react-router-dom"
import { BASE_URL } from "../../services/constants";

import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FavoritesContext } from "../../context/FavoritesContext";
import { BasketContext } from "../../context/BasketContext";

const Products = () => {
  const [products, setProducts] = useState(null);
  const { toggleFavorites, favorites } = useContext(FavoritesContext);
  const { addToBasket } = useContext(BasketContext)
  const getProducts = async () => {
    try {
      const { data } = await axios(`${BASE_URL}products`);
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
      <Row gutter={[16, 16]} justify="center">
        {products && products.map((p) => (
          <Col xs={24} sm={12} md={8} lg={6} key={p.id}>
            <Card
              hoverable
              style={{ borderRadius: "8px", overflow: "hidden" }}
              cover={
                <img
                  alt={p.title}
                  src={p.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              }
            >
              <Meta
                title={<Link to={`${p.id}`}>{p.title}</Link>}
                description={
                  <div style={{ marginTop: "10px" }}>
                    <p style={{ marginBottom: "5px" }}>Price: $ {p.price}</p>
                    <p style={{ marginBottom: "10px", color: "#555" }}>
                      {p.description.slice(0, 50)}...
                    </p>
                    <Button
                      type="text"
                      onClick={() => toggleFavorites(p)}
                      style={{ color: favorites.find((q) => q.id === p.id) ? "#ff4d4f" : "#8c8c8c" }}
                    >
                      {favorites.find((q) => q.id === p.id) ? <FaHeart /> : <FaRegHeart />}
                    </Button>
                    <br />
                    <Button onClick={() => { addToBasket(p) }}>Add to Cart</Button>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
