import React from "react";
import { Section } from "../../General";
import styles from "./portfolio.module.scss";

export const Portfolio = () => {
  return (
    <Section className={styles.portfolio__portfolio}>
      <h4 className={styles.portfolio__title}>Портфолио</h4>
      <ul className={styles.portfolio__list}>
        <li>
          <a
            className={styles.portfolio__projectLink}
            href="https://belka-mironova.github.io/how-to-learn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.portfolio__projectTitle}>
              Статичный сайт
            </span>
            <div className={styles.portfolio__arrowLink}></div>
          </a>
        </li>
        <li>
          <a
            className={styles.portfolio__projectLink}
            href="https://belka-mironova.github.io/russian-travel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.portfolio__projectTitle}>
              Адаптивный сайт
            </span>
            <div className={styles.portfolio__arrowLink}></div>
          </a>
        </li>
        <li>
          <a
            className={styles.portfolio__projectLink}
            href="https://mesto.bellamir.nomoredomains.sbs/sign-in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.portfolio__projectTitle}>
              Одностраничное приложение
            </span>
            <div className={styles.portfolio__arrowLink}></div>
          </a>
        </li>
      </ul>
    </Section>
  );
};
