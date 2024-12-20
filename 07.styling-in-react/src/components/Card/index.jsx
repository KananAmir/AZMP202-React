const cardStyle = {
  width: "18rem",
  border: "2px solid",
  borderRadius: "0.5rem",
  padding: "1rem",
};

const paragStyle = { fontSize: "1rem", fontStyle: "italic" };
const Card = () => {
  return (
    <div className="card" style={cardStyle}>
      <img
        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-studio-display-202203_FMT_WHH?wid=506&hei=472&fmt=p-jpg&qlt=95&.v=1731974953678"
        className="card-img-top"
        alt="mac"
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "orange" }}>
          Card title
        </h5>
        <p className="card-text" style={paragStyle}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
