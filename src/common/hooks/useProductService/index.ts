import useFetch from "../../hooks/useFetch";
import { Product } from "../../types/product";
import { PRODUCTS_BASE_URL } from "../../constants/endpoints";

// Hook customizado para buscar todos os produtos
export const useFetchProducts = () => {
  return useFetch<{ products: Product[] }>(PRODUCTS_BASE_URL);
};
