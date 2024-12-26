import { useState } from "react";
import styles from "../../../pages/Client/ProductDetails/index.module.scss";

const ImageGallery = ({ images, thumbnail }) => {
  const [currentImage, setCurrentImage] = useState(thumbnail);

  return (
    <div className={styles.imageGallery}>
      <div className={styles.mainImage}>
        <img src={currentImage} alt="Product" />
      </div>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentImage(image)}
            className={currentImage === image ? styles.active : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
