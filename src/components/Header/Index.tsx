import { useState } from "react";
import Styles from "./Header.module.scss";
import { LogoIcon } from "../../common/icons/LogoIcon";
import { CarrinhoIcon } from "../../common/icons/CarrinhoIcon";
import { PerfilIcon } from "../../common/icons/PerfilIcon";
import { SearchIcon } from "../../common/icons/SearchIcon";
import { Link } from "react-router-dom";
import { useCart } from "../../common/context/CartContext";
import Typography from "../Typography";
import Button from "../Button";
import IconInput from "../IconInput";
import IconButton from "../IconButton";

type HeaderProps = {
  onSearch: (query: string) => void;
};

const Header = (props: HeaderProps) => {
  const [query, setQuery] = useState<string>("");

  const { getCartCount } = useCart();
  const itemCount = getCartCount();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleSearch = (): void => {
    props.onSearch(query);
  };

  return (
    <header className={Styles.header}>
      <div className={Styles.headerInner}>
        <div className={Styles.logo}>
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>
        <div className={Styles.options}>
          <nav className={Styles.nav}>
            <ul>
              <li>
                <a className="body-large-regular" href="/about">
                  Sobre nós
                </a>
              </li>
            </ul>
          </nav>
          <div className={Styles.searchContainer}>
            <IconInput
              variant="secondary"
              value={query}
              onChange={handleInputChange}
              placeholder="O que você procura?"
            >
              <IconButton variant="secondary" onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </IconInput>
          </div>
          <div className={Styles.userActions}>
            <a href="#">Login</a>
            <a href="#">
              <PerfilIcon />
            </a>
            <Link
              to="/carrinho"
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              <CarrinhoIcon />
              <Typography variantStyle="body-small">({itemCount})</Typography>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
