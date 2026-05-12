import { useParams, Link } from "react-router-dom";
import products from "../types/Product";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div style={styles.container}>
      <img
        src={product.image}
        alt={product.name}
        style={styles.image}
      />

      <div style={styles.details}>
        <h1>{product.name}</h1>

        <p>
          <strong>Category:</strong>{" "}
          {product.category}
        </p>

        <h2>{product.price}</h2>

        <p>{product.description}</p>

        <button style={styles.cartBtn}>
          Add to Cart
        </button>

        <br />
        <br />

        <Link to="/">
          <button style={styles.backBtn}>
            Back to Products
          </button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "30px",
    padding: "40px",
    flexWrap: "wrap",
  },

  image: {
    width: "400px",
    borderRadius: "10px",
  },

  details: {
    maxWidth: "500px",
  },

  cartBtn: {
    padding: "12px 20px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },

  backBtn: {
    padding: "10px 15px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProductDetails;