import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import controller from "../../../services";
import { endpoints } from "../../../services/constants";
import styles from "./index.module.scss";
import ImageGallery from "../../../components/Client/ImageGallery";
import { Star } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const nav = useNavigate();

  const getProduct = async () => {
    try {
      const data = await controller.getDataById(endpoints.products, id);

      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value)));
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.title} to cart`);
  };

  const handleGoBack = () => {
    nav(-1);
  };
  return (
    <>
      <Helmet prioritizeSeoTags>
        {/* <title>{product && product.title}</title> */}
        <title>{product?.title}</title>
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

      <div>
        {product && (
          <div className={styles.productDetails}>
            <div className={styles.productImage}>
              <ImageGallery
                images={product.images}
                thumbnail={product.thumbnail}
              />
            </div>
            <div className={styles.productInfo}>
              <h1 className={styles.productTitle}>{product.title}</h1>
              <p className={styles.productBrand}>By {product.brand}</p>
              <div className={styles.productRating}>
                <Star className={styles.starIcon} />
                <span>{product.rating}</span>
              </div>
              <p className={styles.productPrice}>${product.price}</p>
              <p className={styles.productDescription}>{product.description}</p>
              <div className={styles.productActions}>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className={styles.quantityInput}
                />
                <button
                  onClick={handleAddToCart}
                  className={styles.addToCartButton}
                >
                  Add to Cart
                </button>
              </div>
              <p className={styles.stockInfo}>
                In Stock: {product.stock} units
              </p>
              <div className={styles.productTags}>
                {product.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <button
                  onClick={handleGoBack}
                  className={styles.goBackBtn}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
