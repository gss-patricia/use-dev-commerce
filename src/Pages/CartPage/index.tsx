import { useNavigate } from "react-router-dom";
import { useCart } from "../../common/context/CartContext";
import Typography from "../../components/Typography";
import Styles from "./CartPage.module.css";
import CartSummary from "../../components/CartSummary";
import CartList from "../../components/CartList";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const freight = cartItems.length > 0 ? 8 : 0;

  const navigate = useNavigate();
  const handleRedirect = () => navigate("/");
  const handlePayment = () => console.log("pagamento");

  return (
    <main className="container">
      <div className={Styles.cartTitle}>
        <Typography variant="h4">Carrinho de Compras</Typography>
      </div>

      <section className={Styles.cartPage}>
        <CartList cartItems={cartItems} onRemove={removeFromCart} />
        <CartSummary
          cartItems={cartItems}
          total={total}
          freight={freight}
          onPayment={handlePayment}
          handleRedirect={handleRedirect}
        />
      </section>
    </main>
  );
};

export default CartPage;
