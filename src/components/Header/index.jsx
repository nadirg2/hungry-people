import React, { Component } from "react";
import styles from "./style.module.scss";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className="container">
          <div className={styles["header__row"]}>
            <nav className={`${styles.nav_left} ${styles.nav}`}>
              <AnchorLink href={"#home"} className={styles["nav-item"]}>HOME</AnchorLink>
              <AnchorLink href={"#about"} className={styles["nav-item"]}>ABOUT</AnchorLink>
              <AnchorLink href={"#team"} className={styles["nav-item"]}>TEAM</AnchorLink>
              <AnchorLink href={"#booking"} className={styles["nav-item"]}>BOOKING</AnchorLink>
            </nav>
            <div className={styles.logo}>
              <img src="logo.svg" alt="Hungry People" />
            </div>
            <nav className={`${styles.nav_right} ${styles.nav}`}>
              <AnchorLink href={"#menu"} className={styles["nav-item"]}>MENU</AnchorLink>
              <AnchorLink href={"#galerie"} className={styles["nav-item"]}>GALERIE</AnchorLink>
              <AnchorLink href={"#events"} className={styles["nav-item"]}>EVENTS</AnchorLink>
              <AnchorLink href={"#contact"} className={styles["nav-item"]}>CONTACT</AnchorLink>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
