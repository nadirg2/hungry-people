import React, { Component } from "react";
import styles from "./style.module.scss";

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className="container">
          <div className={styles["header__row"]}>
            <nav className={`${styles.nav_left} ${styles.nav}`}>
              <a href={"#home"} className={styles["nav-item"]}>HOME</a>
              <a href={"#about"} className={styles["nav-item"]}>ABOUT</a>
              <a href={"#team"} className={styles["nav-item"]}>TEAM</a>
              <a href={"#booking"} className={styles["nav-item"]}>BOOKING</a>
            </nav>
            <div className={styles.logo}>
              <img src="logo.svg" alt="Hungry People" />
            </div>
            <nav className={`${styles.nav_right} ${styles.nav}`}>
              <a href={"#menu"} className={styles["nav-item"]}>MENU</a>
              <a href={"#galerie"} className={styles["nav-item"]}>GALERIE</a>
              <a href={"#events"} className={styles["nav-item"]}>EVENTS</a>
              <a href={"#contact"} className={styles["nav-item"]}>CONTACT</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
