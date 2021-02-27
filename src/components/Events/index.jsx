import React from "react";
import styles from "./style.module.scss";

function Events() {
  return (
    <section className={`${styles.section} ${styles.section_events}`}>
      <div className="container">
        <div className={styles["section__title"]}>PRIVATE EVENTS</div>
        <div className={styles.section__row}>
          <div className={`${styles["section-img"]} ${styles["section-img_left"]}`}>
            <img src="https://nadirg2.github.io/hungry-people/weddings.jpg" alt="Weddings" />
            <div className={styles["section-img__rectangle"]} />
          </div>
          <div className={`${styles["section-img"]} ${styles["section-img_right"]}`}>
            <img src="https://nadirg2.github.io/hungry-people/corporate-pzrties.jpg" alt="Corporate Pzrties" />
            <div className={styles["section-img__rectangle"]} />
          </div>
        </div>
        <div className={styles.section__footer}>
          For private events please call: <span>+40 729 131 637/+40 726 458 782</span> or use the
          contact form.
        </div>
      </div>
    </section>
  );
}

export default Events;
