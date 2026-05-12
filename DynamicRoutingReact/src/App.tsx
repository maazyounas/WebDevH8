import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Dynamic Route */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;