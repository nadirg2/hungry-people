import React from "react";
import styles from "./style.module.scss";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PrimaryButton } from '../Button';
import ScrollableAnchor from 'react-scrollable-anchor';

export const Book = () => {
  return (
    <ScrollableAnchor id={'booking'} className={`${styles.section} ${styles.section__book}`}>
      <div className="container">
        <div className={styles.section__spacer} />
        <div className={styles.section__row}>
          <div className={styles["section-content"]}>
            <div className={styles["section-content__title"]}>book a table</div>
            <div className={styles["section-content__title-under-line"]} />
            <form className={styles["book-form"]}>
              <input type="text" placeholder='Name' name="Name" className={styles["book-form__input"]} />
              <input type="text" placeholder='Email' name="Email" className={styles["book-form__input"]} />
              <input type="text" placeholder='Phone' name="Phone" className={styles["book-form__input"]} />
              <div className={styles["book-form__input-box"]}>
                <input type="text" placeholder='People' name="People" className={styles["book-form__input"]} />
                <div className={styles["fa-angle-down"]}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
              <input type="text" placeholder='Date (mm/dd)' name="Date (mm/dd)" className={styles["book-form__input"]} />
              <div className={styles["book-form__input-box"]}>
                <input type="text" placeholder='Time' name="Time" className={styles["book-form__input"]} />
                <div className={styles["fa-angle-down"]}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
              <PrimaryButton width='100%' type='submit' >BOOK NOW</PrimaryButton>
            </form>
          </div>
          <div className={`${styles["section-img"]} ${styles["section-img_right"]}`}>
            <img src="book-a-table.jpg" alt="book a table" />
            <div className={styles["section-img__rectangle"]} />
          </div>
        </div>
        <div className={styles.section__footer}>
          Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM, Phone: +40 729 131 637/+40 726 458 782
        </div>
      </div>
    </ScrollableAnchor>
  );
};
