import { useState } from "react";
import RadioButton from "../RadioButton/RadioButton";
import Typography from "../Typography/Typography";
import Styles from "./ProductDetail.module.css";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import { AddCarrinhoIcon } from "../../common/Icons/AddCarrinhoIcon";
import { useCart } from "../../common/context/CartContext";

interface ProductDetailProps {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  colors: string[];
  onColorChange: (color: string) => void;
  selectedColor: string;
}

function ProductDetail({
  id,
  title,
  description,
  price,
  imageUrl,
  colors,
  onColorChange,
  selectedColor,
}: ProductDetailProps) {
  const [selectedValue, setSelectedValue] = useState("");

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      id,
      label: title,
      description,
      price,
      colors,
      imageSrc: imageUrl,
    };

    console.log("product", product);

    addToCart(product);
  };

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <section className={Styles.productDetail}>
      <div className={Styles.imageContainer}>
        <img src={imageUrl} alt={title} className={Styles.productImage} />
      </div>

      <div className={Styles.detailContainer}>
        <Typography variant="h4">{title}</Typography>
        <Typography variantStyle="body-large">{description}</Typography>
        <Typography variantStyle="heading-semi-bold">
          {price.toFixed(2)}
        </Typography>

        <div className={Styles.radioGroup}>
          {colors.map((color) => (
            <RadioButton
              key={color}
              label={color}
              value={color}
              checked={selectedValue === color}
              onChange={handleRadioChange}
            />
          ))}
        </div>

        <div className={Styles.action}>
          <ButtonWithIcon icon={<AddCarrinhoIcon />} onClick={handleAddToCart}>
            Adicionar ao carrinho
          </ButtonWithIcon>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
