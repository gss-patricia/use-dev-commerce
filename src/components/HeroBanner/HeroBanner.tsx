import { ReactNode } from "react";
import styles from "./HeroBanner.module.css";

type HeroBannerProps = {
  backgroundImage?: string;
  mainImage?: string;
  children?: ReactNode;
};

const HeroBanner = ({
  backgroundImage,
  mainImage,
  children,
}: HeroBannerProps) => {
  return (
    <section className={styles.heroBanner}>
      <div
        className={styles.gridOverlay}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className={styles.heroContent}>
        {mainImage && (
          <div className={styles.mainImageWrapper}>
            <img
              src={mainImage}
              alt="Hero Image"
              className={styles.mainImage}
            />
          </div>
        )}
        {!!children && <div className={styles.textContent}>{children}</div>}
      </div>
    </section>
  );
};

export default HeroBanner;
