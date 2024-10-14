import useFetch from "../../hooks/useFetch";
import { Product } from "../../types/product";
import { PRODUCTS_BASE_URL } from "../../constants/endpoints";
import { findProductById } from "../../utils/productMapping";

type FetchProductDetailResult = {
  productDetail: Product | undefined;
  isLoading: boolean;
  error: string | null;
};

// Hook customizado para buscar todos os produtos
export const useFetchProducts = () => {
  return useFetch<{ products: Product[] }>(PRODUCTS_BASE_URL);
};

export const useFetchProductDetail = (id: string) => {
  const {
    data: productData,
    isLoading,
    error,
  } = useFetch<{ products: Product[] }>(PRODUCTS_BASE_URL);

  const productDetail = productData
    ? findProductById(productData.products, id)
    : undefined;

  return { productDetail, isLoading, error };
};
