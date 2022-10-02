import React from "react";
import styles from "./promo.module.scss";

export const Promo = () => {
  return (
    <div className={styles.promo}>
      <h1 className={styles.promo__title}>
        Учебный проект студента факультета Веб-разработки
      </h1>
      <p className={styles.promo__subtitle}>
        Листайте ниже, чтобы узнать больше про этот проект и его создателя
      </p>
      <a href="#about">
        <button className={styles.promo__button}>Узнайте больше</button>
      </a>
    </div>
  );
};
