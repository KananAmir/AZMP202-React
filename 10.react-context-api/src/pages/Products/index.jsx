import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Row } from 'antd';
const { Meta } = Card;
import { Link } from "react-router-dom"
import { BASE_URL } from "../../services/constants";


import { FaHeart } from "react-icons/fa6";

import { FaRegHeart } from "react-icons/fa6";
import { FavoritesContext } from "../../context/FavoritesContext";

const Products = () => {
  const [products, setProducts] = useState(null);


  const { toggleFavorites, favorites } = useContext(FavoritesContext)


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

  return <>


    <Row gutter={16}>
      {products && products.map((p) => {
        return (<Col className="gutter-row" span={6} key={p.id}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={p.title} src={p.image} />}
          >

            <Meta title={<Link to={`${p.id}`}>{p.title}</Link>} description={<div>

              <p>Price: $ {p.price}</p>
              <p>{p.description.slice(0, 50)}</p>
              <span>


              <Button  onClick={() => toggleFavorites(p)}>
                 {favorites.find((q) => q.id === p.id) ? <FaHeart/> : <FaRegHeart />}
              </Button>


                {/* <FaRegHeart onClick={() => toggleFavorites(p)} /> */}
                {/* <FaHeart /> */}

              </span>
            </div>} />
          </Card>
        </Col>)
      })}
    </Row>



  </>;
};

export default Products;
