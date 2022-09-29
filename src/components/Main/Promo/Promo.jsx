import React from "react";
import { Link } from "react-router-dom";
import styles from "./promo.module.scss";

export const Promo = () => {
  return (
    <div className={styles.promo}>
      <h1 className={styles.promo__title}>Учебный проект студента факультета Веб-разработки</h1>
      <p className={styles.promo__subtitle}>Листайте ниже, чтобы узнать больше про этот проект и его создателя</p>
      <Link to="/#about"><button className={styles.promo__button}>Узнайте больше</button></Link>
    </div>
  );
};
