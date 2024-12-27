import { useContext } from "react"
import { FavoritesContext } from "../../context/FavoritesContext"
import { Card, Col, Row } from 'antd';
import { FaHeart } from "react-icons/fa6";
const { Meta } = Card;
import {Link} from "react-router-dom"
import { FaRegHeart } from "react-icons/fa6";
const Favorites = () => {

  const {favorites, toggleFavorites, clearFavorites} = useContext(FavoritesContext)


  console.log(favorites);
  
  return (
    <>

<Row gutter={16}>
    {favorites.length > 0 && favorites.map((p)=>{
      return <Col className="gutter-row" span={6} key={p.id}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={p.title} src={p.image} />}
      >
       
        <Meta title={<Link to={`${p.id}`}>{p.title}</Link>} description={<div>

         <p>Price: $ {p.price}</p>
         <p>{p.description.slice(0,50)}</p>
         <span>
          
             <FaHeart onClick={()=>toggleFavorites(p)}/>
           

         </span>
        </div>} />
      </Card>
    </Col>
    })}
    </Row>
    </>
  )
}

export default Favorites