import React from "react";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__info}>Учебный проект Яндекс.Практикум х BeatFilm.</div>
      <div className={styles.footer__menu}>
        <div className={styles.footer__year}>© 2020</div>
        <div className={styles.footer__links}> 
        <a className={styles.footer__link} href="#">Яндекс.Практикум</a>
        <a className={styles.footer__link} href="#">GitHub</a>
        </div>
      </div>
    </div>
  );
};