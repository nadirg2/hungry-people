import React from "react";
import styles from "./style.module.scss";

export default function Gallery() {
  return (
    <section className={`${styles.section} ${styles.section_gallery}`}>
      <div className={styles.section__row}>
        <img src="/gallery-1.jpg" alt="gallery photo" className={styles.section__img} />
        <img src="/gallery-2.jpg" alt="gallery photo" className={styles.section__img} />
        <img src="/gallery-3.jpg" alt="gallery photo" className={styles.section__img} />
        <img src="/gallery-4.jpg" alt="gallery photo" className={styles.section__img} />
      </div>
    </section>
  );
}
