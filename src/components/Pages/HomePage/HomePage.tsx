import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../Button/Button";
import Categories from "../../Categories/Categories";
import HeroBanner from "../../HeroBanner/HeroBanner";
import Newsletter from "../../Newsletter/Newsletter";
import ProductList from "../../ProductList/ProductList";
import Typography from "../../Typography/Typography";
import { Category } from "../../../common/types/category";
import {
  CATEGORIES_BASE_URL,
  PRODUCTS_BASE_URL,
} from "../../../common/constants/endpoints";
import { Product } from "../../../common/types/product";

function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);
  const [productsError, setProductsError] = useState<string | null>(null);

  const handleSubscribe = (email: string) => {
    console.log(`Usuário inscrito com o email: ${email}`);
  };

  // Fetch de categorias
  useEffect(() => {
    axios
      .get(CATEGORIES_BASE_URL)
      .then((response) => {
        setCategories(response.data.categories);
        setIsLoadingCategories(false);
      })
      .catch((err) => {
        setCategoriesError("Erro ao carregar categorias.");
        setIsLoadingCategories(false);
      });
  }, []);

  // Fetch de produtos
  useEffect(() => {
    axios
      .get(PRODUCTS_BASE_URL)
      .then((response) => {
        setProducts(response.data.products);
        setIsLoadingProducts(false);
      })
      .catch((err) => {
        setProductsError("Erro ao carregar produtos.");
        setIsLoadingProducts(false);
      });
  }, []);

  return (
    <>
      <HeroBanner
        backgroundImage="https://raw.githubusercontent.com/gss-patricia/use-dev-assets/refs/heads/main/banner-seceos-tablet.png"
        mainImage="https://raw.githubusercontent.com/gss-patricia/use-dev-assets/8df6d50256e4b270eb794ccbc0314baf2a656211/hero.png"
      >
        <Typography variant="h1">
          Hora de abraçar seu{" "}
          <span style={{ color: "#8fff24" }}>lado geek!</span>
        </Typography>
        <Button
          onClick={() => console.log("ver novidades")}
          size="large"
          text="Ver as novidades!"
        />
      </HeroBanner>
      <main className="container">
        {isLoadingCategories ? (
          <p>Carregando categorias...</p>
        ) : categoriesError ? (
          <p>{categoriesError}</p>
        ) : (
          <Categories categories={categories} />
        )}

        {isLoadingProducts ? (
          <p>Carregando produtos...</p>
        ) : productsError ? (
          <p>{productsError}</p>
        ) : (
          <ProductList title="Promoções especiais" products={products} />
        )}
      </main>
      <Newsletter onSubscribe={handleSubscribe} />
    </>
  );
}

export default HomePage;
