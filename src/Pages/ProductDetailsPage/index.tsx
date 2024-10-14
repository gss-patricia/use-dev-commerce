import { useParams } from "react-router-dom";
import Styles from "./ProductDetailsPage.module.css";
import Typography from "../../components/Typography";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import SimpleBanner from "../../components/SimpleBanner";
import { useFetchProductDetail } from "../../common/hooks/useProductService";

function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>(); // Pega o ID da URL

  const { productDetail, isLoading, error } = useFetchProductDetail(id || "");

  if (!id) {
    return <p>Produto não encontrado</p>;
  }

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
            ) : productDetail ? (
              <ProductDetail
                id={productDetail.id}
                title={productDetail.label}
                description={productDetail.description}
                price={productDetail.price}
                imageUrl={productDetail.imageSrc}
                colors={productDetail.colors}
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
