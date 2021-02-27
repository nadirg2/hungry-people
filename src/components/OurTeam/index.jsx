import React from "react";
import styles from "./style.module.scss";

const OurTeam = () => {
  return (
    <section className={`${styles["section"]} ${styles["section_our-team"]}`}>
      <div className="container">
        <div className={styles["section__title"]}>OUR TEAM</div>
        <div className={styles.section__row}>
          <div className={`${styles["section-img"]} ${styles["section-img_left"]}`}>
            <img src="our-team.png" alt="MASTER CHEF" />
            <div className={styles["section-img__rectangle"]} />
          </div>
          <div className={`${styles["section-text"]} ${styles["section-text_white"]}`}>
            <div className={styles["section-text__title"]}>MASTER CHEF</div>
            <div className={styles["section-text__under-line"]} />
            <div className={styles["section-text__bold"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus,
              molestie est a, tempor magna.
            </div>
            <div className={styles["section-text__text"]}>
              Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non
              ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a
              sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra.
              Nulla facilisis semper laoreet.
            </div>
          </div>
        </div>
        <div className={styles.section__spacer} />
      </div>
    </section>
  );
};

export default OurTeam;
