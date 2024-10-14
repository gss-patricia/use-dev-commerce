import { useParams } from "react-router-dom";
import useFetch from "../../common/hooks/useFetch";
import Styles from "./ProductDetailsPage.module.css";
import Typography from "../../components/Typography";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { PRODUCTS_BASE_URL } from "../../common/constants/endpoints";
import { Product } from "../../common/types/product";
import SimpleBanner from "../../components/SimpleBanner";

function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>(); // Pega o ID da URL

  const {
    data: productData,
    isLoading,
    error,
  } = useFetch<{ products: Product[] }>(PRODUCTS_BASE_URL);

  // Encontrar o produto com base no ID
  const product = productData?.products.find(
    (product) => product.id.toString() === id
  );

  return (
    <>
      <SimpleBanner backgroundImage="https://raw.githubusercontent.com/gss-patricia/use-dev-assets/refs/heads/main/banner-secoes.png" />
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
    </>
  );
}

export default ProductDetailsPage;
