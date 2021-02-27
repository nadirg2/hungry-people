import React, { Component } from "react";
import { Header } from "..";
import styles from "./style.module.scss";
import { OutlineButton } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";

export const PrimaryButton = styled(AnchorLink)`
  height: 60px;
  background-color: #E8C300;
  width: ${props => props.width};
  margin: ${props => props.margin};
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #FFFFFF;
  border-radius: 5px;
  border: unset;
  box-sizing: border-box;
`;

export default class Main extends Component {
  render() {
    return (
      <main id={"main"} className={styles.main}>
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
                <PrimaryButton href={"#booking"} width="200px" margin="0 40px 0 0">
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
                <AnchorLink href={"#about"} className={styles["down-btn__btn"]}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </AnchorLink>
              </div>
              <div className={styles["down-btn__bottom-line"]} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
