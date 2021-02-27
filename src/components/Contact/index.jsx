import React from "react";
import styles from "./style.module.scss";
import { PrimaryButton } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className={`${styles.section} ${styles.section_contact}`}>
      <div className="container">
        <div className={styles.section__spacer} />
        <div className={styles.section__row}>
          <div className={`${styles["section-text"]} ${styles["section-text_black"]}`}>
            <div className={styles["section-text__title"]}>CONTACT</div>
            <div className={styles["section-text__under-line"]} />
            <div className={styles["section-text__bold"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus,
              molestie est a, tempor magna.
            </div>
          </div>
          <form className={styles.contact}>
            <input type="text" name="name" placeholder="Name" className={styles.contact__input} />
            <input type="text" name="email" placeholder="Email" className={styles.contact__input} />
            <input type="text" name="phone" placeholder="Phone" className={styles.contact__input} />
            <textarea name="message" className={styles.contact__textarea} placeholder={"Message"} />
            <div className={styles["contact-info"]}>
              <div className={styles["contact-info__item"]}>
                <FontAwesomeIcon className={styles["contact-info__item"]} icon={faMapMarkerAlt} />
                5th London Boulevard, U.K.
              </div>
              <div className={styles["contact-info__item"]}>
                <FontAwesomeIcon className={styles["contact-info__item"]} icon={faPhone} /> +40 729
                131 637/+40 726 458 782
              </div>
              <div className={styles["contact-info__item"]}>
                <FontAwesomeIcon className={styles["contact-info__item"]} icon={faEnvelope} />
                office@mindblister.com
              </div>
            </div>
            <PrimaryButton width={"640px"} margin={"10px 0 0 0"}>
              SEND MESSAGE
            </PrimaryButton>
          </form>
        </div>
        <div className={styles.section__spacer} />
      </div>
    </section>
  );
}
