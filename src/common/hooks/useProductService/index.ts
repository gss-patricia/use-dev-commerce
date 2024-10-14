import useFetch from "../../hooks/useFetch";
import { Product } from "../../types/product";
import { PRODUCTS_BASE_URL } from "../../constants/endpoints";

type FetchProductDetailResult = {
  productDetail: Product | undefined;
  isLoading: boolean;
  error: string | null;
};

// Hook customizado para buscar todos os produtos
export const useFetchProducts = () => {
  return useFetch<{ products: Product[] }>(PRODUCTS_BASE_URL);
};

// Hook customizado para buscar os detalhes de um produto
export const useFetchProductDetail = (id: string): FetchProductDetailResult => {
  const {
    data: productData,
    isLoading,
    error,
  } = useFetch<{ products: Product[] }>(PRODUCTS_BASE_URL);

  const productDetail = productData?.products.find(
    (product) => product.id.toString() === id
  );

  return { productDetail, isLoading, error };
};
