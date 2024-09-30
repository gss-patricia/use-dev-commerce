import { ShoppingBagIcon } from "../../../common/Icons/ShoppingBagIcon";
import { useCart } from "../../../common/context/CartContext";
import Button from "../../Button/Button";
import Divider from "../../Divider/Divider";
import Field from "../../Field/Field";
import Input from "../../Input/Input";
import Typography from "../../Typography/Typography";
import Styles from "./CartPage.module.css";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const freight = 8;

  return (
    <main className="container">
      <div className={Styles.cartTitle}>
        <Typography variant="h4">Carrinho de Compras</Typography>
      </div>

      <section className={Styles.cartPage}>
        <div className={Styles.cartItems}>
          <Typography
            variantStyle="body-large-bold"
            className={Styles.cartItemTitle}
          >
            Detalhes da compra
          </Typography>
          {cartItems.map((item) => (
            <div key={item.id} className={Styles.cartItem}>
              <div className={Styles.cartImageContainer}>
                <img src={item.imageSrc} alt={item.label} />
              </div>
              <div className={Styles.itemDetails}>
                <div className={Styles.itemDescription}>
                  <Typography variantStyle="h6-small">{item.label}</Typography>
                  <Typography variantStyle="body">
                    {item.description}
                  </Typography>
                </div>
                <Typography variantStyle="body-semi-bold">
                  R$ {item.price}
                </Typography>
                <Typography variantStyle="body-small-bold">
                  Quantidade: 1
                </Typography>
                <Typography variantStyle="body-small-bold">
                  Tamanho: único
                </Typography>
                <Button onClick={() => removeFromCart(item.id)}>Excluir</Button>
              </div>
            </div>
          ))}
        </div>
        <div className={Styles.cartSummary}>
          <Typography variantStyle="heading-small">Sumário</Typography>
          <div className={Styles.discount}>
            <Field
              label="Cupom de desconto"
              inputId="cupom"
              inputPlaceholder="Digite o cupom"
              buttonText="Ok"
              onButtonClick={() => {}}
            />
          </div>
          <div className={Styles.summaryResume}>
            <Typography variantStyle="body-small-bold">
              {cartItems.length} Produtos
            </Typography>
            <Typography variantStyle="body-small-bold">R$ {total}</Typography>
            <Typography variantStyle="body-small-bold">Frete:</Typography>
            <Typography variantStyle="body-small-bold">R$ {freight}</Typography>
          </div>
          <Divider style={{ borderColor: "#780BF7" }} />
          <div className={Styles.total}>
            <Typography variantStyle="body-large-bold">
              <ShoppingBagIcon />
              <span style={{ marginLeft: "4px" }}>Total:</span>
            </Typography>
            <Typography variantStyle="body-large-bold" className={Styles.total}>
              R$ {total + freight}
            </Typography>
          </div>
          <div className={Styles.cartActions}>
            <Button variant="secondary" text="Continuar comprando" />
            <Button text="Ir para pagamento" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
