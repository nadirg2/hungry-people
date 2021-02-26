import React from 'react';
import styles from "./style.module.scss";

const AboutUs = () => {
    return (
        <section className={`${styles["section"]} ${styles["section_about-us"]}`}>
            <div className="container">
              <div className={styles.section__row}>
                <div className={`${styles["section-text"]} ${styles["section-text_black"]}`}>
                  <div className={styles["section-text__title"]}>ABOUT US</div>
                  <div className={styles["section-text__under-line"]} />
                  <div className={styles["section-text__bold"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus,
                    molestie est a, tempor magna.
                  </div>
                  <div className={styles["section-text__text"]}>
                    Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi
                    non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula
                    eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis
                    pharetra. Nulla facilisis semper laoreet.
                  </div>
                </div>
                <div className={`${styles["section-img"]} ${styles["section-img_right"]}`}>
                  <img src="/about-img.jpg" alt="ABOUT US" />
                  <div className={styles["section-img__rectangle"]} />
                </div>
              </div>
            </div>
          </section>
    );
}

export default AboutUs;