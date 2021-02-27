import React from "react";
import styles from "./style.module.scss";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Book() {
  const subMenuItems = ["SOUPE", "PIZZA", "PASTA", "DESERT", "WINE", "BEER", "DRINKS"];
  return (
    <section id={'menu'} className={`${styles.section} ${styles.section_menu}`}>
      <div className="container">
        <div className={styles.section__row}>
          <div className={styles.section__spacer} />
          <div className={`${styles["section-text"]} ${styles["section-text_black"]}`}>
            <div className={styles["section-text__title"]}>DELICIOUS MENU</div>
            <div className={styles["section-text__under-line"]} />
            <div className={styles["section-text__bold"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus,
              molestie est a, tempor magna.
            </div>
          </div>
          <ul className={styles["sub-menu"]}>
            {subMenuItems.map((subMenuItem, index) => (
              <li key={index} className={styles["sub-menu__item"]}>{subMenuItem}</li>
            ))}
          </ul>
          <ul className={styles.menu}>
            {[...Array(21)].map((i, index) => (
              <li key={index} className={styles["menu-item"]}>
                <div className={styles["menu-item__row"]}>  
                  <div className={styles["menu-item__title"]}>Pizza quattro stagioni ....</div>
                  <div className={styles["menu-item__subtitle"]}>
                    Integer ullamcorper neque eu purus euismod
                  </div>
                </div>
                <div className={styles["menu-item__price"]}>55,68 USD</div>
              </li>
            ))}
          </ul>
          <div className={styles.section__spacer} />
        </div>
      </div>
    </section>
  );
}

export default Book;
