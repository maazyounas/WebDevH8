import { Link } from "react-router-dom";
import Products from "../types/Product";

function Home() {
  return (
    <div style={styles.container}>
      <h1>E-Commerce Store</h1>

      <div style={styles.grid}>
        {Products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
            />

            <h2>{product.name}</h2>

            <p>{product.category}</p>

            <h3>{product.price}</h3>

            <Link to={`/product/${product.id}`}>
              <button style={styles.button}>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  button: {
    padding: "10px 15px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;