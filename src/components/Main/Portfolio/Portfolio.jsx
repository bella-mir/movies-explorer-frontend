import React from "react";
import { Section } from "../../General";
import styles from "./portfolio.module.scss";

export const Portfolio = () => {
  return (
    <Section className={styles.profile__portfolio}>
      <h4 className={styles.profile__subtitle}>Портфолио</h4>
      <a
        className={styles.profile__projectLink}
        href="https://belka-mironova.github.io/how-to-learn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.profile__projectTitle}>Статичный сайт</span>
        <div className={styles.profile__arrowLink}></div>
      </a>
      <a
        className={styles.profile__projectLink}
        href="https://belka-mironova.github.io/russian-travel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.profile__projectTitle}>Адаптивный сайт</span>
        <div className={styles.profile__arrowLink}></div>
      </a>
      <a
        className={styles.profile__projectLink}
        href="https://mesto.bellamir.nomoredomains.sbs/sign-in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.profile__projectTitle}>
          Одностраничное приложение
        </span>
        <div className={styles.profile__arrowLink}></div>
      </a>
    </Section>
  );
};
