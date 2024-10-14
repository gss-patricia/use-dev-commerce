import { Product } from "../types/product";

export const findProductById = (
  products: Product[],
  id: string
): Product | undefined => {
  return products.find((product) => product.id.toString() === id);
};
