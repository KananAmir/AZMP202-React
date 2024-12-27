import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Card, Col, Row, Button, Empty } from "antd";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
const { Meta } = Card;

const Favorites = () => {
  const { favorites, toggleFavorites, clearFavorites } = useContext(FavoritesContext);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2 style={{ margin: 0 }}>Your Favorites</h2>
        {favorites.length > 0 && (
          <Button type="primary" danger onClick={clearFavorites}>
            Clear All Favorites
          </Button>
        )}
      </div>

      {favorites.length > 0 ? (
        <Row gutter={[16, 16]}>
          {favorites.map((p) => (
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
                  title={<Link to={`/products/${p.id}`}>{p.title}</Link>}
                  description={
                    <div style={{ marginTop: "10px" }}>
                      <p style={{ marginBottom: "5px" }}>Price: $ {p.price}</p>
                      <p style={{ marginBottom: "10px", color: "#555" }}>
                        {p.description.slice(0, 50)}...
                      </p>
                      <Button
                        type="text"
                        style={{ color: "#ff4d4f" }}
                        onClick={() => toggleFavorites(p)}
                      >
                        <FaHeart /> Remove
                      </Button>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Empty description="No favorites added yet." style={{ marginTop: "50px" }} />
      )}
    </div>
  );
};

export default Favorites;
