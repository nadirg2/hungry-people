import React, { Component } from "react";
import { Header } from "..";
import styles from "./style.module.scss";
import { PrimaryButton, OutlineButton } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ScrollableAnchor from 'react-scrollable-anchor';


export default class Main extends Component {
  render() {
    return (
      <ScrollableAnchor id={'main'} className={styles.main}>
        <Header />
        <div className="container">
          <div className={styles.main__row}>
            <div className={styles.main__timetable}>
              <div className={styles.main__timetable__text}>
                Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM
              </div>
            </div>
            <div className={styles.main__content}>
              <div className={styles.logo}>
                <div className={styles["logo__over-logo"]}>RESTAURANT</div>
                <div className={styles.logo__text}>HUNGRY PEOPLE</div>
                <div className={styles["logo__under-line"]} />
              </div>
              <div className={styles.main__buttons}>
                <PrimaryButton width="200px" margin="0 40px 0 0">
                  BOOK TABLE
                </PrimaryButton>
                <OutlineButton width="200px">EXPLORE</OutlineButton>
              </div>
            </div>
            <div className={styles["social-network"]}>
              <div className={styles["social-network__item"]}>
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className={styles["social-network__item"]}>
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className={styles["social-network__item"]}>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
            <div className={styles["down-btn"]}>
              <div className={styles["down-btn__top-line"]} />
              <div className={styles["down-btn__ellipse"]}>
                <div className={styles["down-btn__btn"]}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
              <div className={styles["down-btn__bottom-line"]} />
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}
