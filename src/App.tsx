import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterConfig from "./components/Footer/FooterConfig";
import HomePage from "./components/Pages/HomePage/HomePage";
import ProductDetailsPage from "./components/Pages/ProductDetailsPage/ProductDetailsPage";
import ScrollToTop from "./common/utils/ScrollToTop";
import { CartProvider } from "./common/context/CartContext";
import CartPage from "./components/Pages/CartPage/CartPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Header onSearch={() => {}} />
        <Routes>
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/produto/:id" element={<ProductDetailsPage />} />
            <Route path="/carrinho" element={<CartPage />} />
          </>
        </Routes>
        <FooterConfig />
      </Router>
    </CartProvider>
  );
}

export default App;
