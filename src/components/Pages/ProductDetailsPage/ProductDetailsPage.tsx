import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Styles from "./ProductDetailsPage.module.css";
import Typography from "../../Typography/Typography";
import ProductDetail from "../../ProductDetail/ProductDetail";
import { PRODUCTS_BASE_URL } from "../../../common/constants/endpoints";
import { Product } from "../../../common/types/product";

function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>(); // Pega o ID da URL
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Faz a requisição para buscar o produto com base no ID
    axios
      .get(PRODUCTS_BASE_URL)
      .then((response) => {
        const foundProduct = response.data.products.find(
          (product: Product) => product.id.toString() === id
        );

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Produto não encontrado.");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Erro ao carregar os detalhes do produto.");
        setIsLoading(false);
      });
  }, [id]);

  return (
    <main className="container">
      <section>
        <div className={Styles.productContainer}>
          <Typography variant="h4">Detalhes do Produto</Typography>

          {isLoading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p>{error}</p>
          ) : product ? (
            <ProductDetail
              id={product.id}
              title={product.label}
              description={product.description}
              price={product.price}
              imageUrl={product.imageSrc}
              colors={product.colors}
            />
          ) : (
            <p>Produto não encontrado.</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProductDetailsPage;
