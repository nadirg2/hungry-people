import React, { Component } from "react";
import styles from './style.module.scss';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className="container">
          <div className={styles["header__row"]}>
            <nav className={`${styles.nav_left} ${styles.nav}`}>
              <div className={styles["nav-item"]}>HOME</div>
              <div className={styles["nav-item"]}>ABOUT</div>
              <div className={styles["nav-item"]}>TEAM</div>
              <div className={styles["nav-item"]}>BOOKING</div>
            </nav>
            <div className={styles.logo}>
              <img src="/logo.svg" alt="Hungry People"/>
            </div>
            <nav className={`${styles.nav_right} ${styles.nav}`}>
              <div className={styles["nav-item"]}>MENU</div>
              <div className={styles["nav-item"]}>GALERIE</div>
              <div className={styles["nav-item"]}>EVENTS</div>
              <div className={styles["nav-item"]}>CONTACT</div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
