import React, { useState } from "react";
import styles from "./Newsletter.module.css";
import { validateEmail } from "../../common/utils/emailValidation";
import { subscribeToNewsletter } from "../../common/service/newsLetterService";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Typography from "../Typography/Typography";

type NewsletterProps = {
  onSubscribe: (email: string) => void;
};

export default function Newsletter({ onSubscribe }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Por favor, insira um endereço de e-mail válido.");
      return;
    }

    try {
      await subscribeToNewsletter(email);
      onSubscribe(email);
      setEmail("");
    } catch (err) {
      setError("Ocorreu um erro ao se inscrever. Por favor, tente novamente.");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.containerInner}>
        <Typography variant="h5" className={styles.title}>
          Inscreva-se para ganhar descontos!
        </Typography>
        <Typography variantStyle="body-large" className={styles.description}>
          Cadastre seu email, receba novidades e descontos imperdíveis antes de
          todo mundo!
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            variant="primary"
            style={{ width: "678px" }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu melhor endereço de email"
            hasBorder={true}
          />
          <Button
            style={{ width: "145px", borderRadius: "32px", height: "56px" }}
            type="submit"
          >
            Inscrever
          </Button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </section>
  );
}
