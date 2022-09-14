import React from "react";
import { Section, Title } from "../Main/Elements";
import styles from "./profile.module.scss";

export const Profile = () => {
  return (
<Section>
      <Title>Cтудент</Title>
      <div className={styles.profile__content}>
        <div className={styles.profile__information}>
          <div className={styles.profile__text}>
            <h3 className={styles.profile__name}>Белла</h3>
            <p className={styles.profile__occupation}>
              Фронтенд-разработчик, 24 года
            </p>
            <p className={styles.profile__description}>
              Я родилась в Братске, живу в Москве. Не знаю, чем хочу заниматься,
              но очень нравится фронт-енд.
            </p>
          </div>
          <a
            className={styles.profile__link}
            href="https://github.com/belka-mironova"
          >
            Github
          </a>
        </div>
        <div className={styles.profile__photo}></div>
      </div>
      <div className={styles.profile__portfolio}>
      <h4 className={styles.profile__subtitle}>Портфолио</h4>
      <a className={styles.profile__projectLink} href="https://belka-mironova.github.io/how-to-learn/" target="_blank">
        <span className={styles.profile__projectTitle}>Статичный сайт</span>
        <div className={styles.profile__arrowLink}></div>
      </a>
      <a className={styles.profile__projectLink} href="https://belka-mironova.github.io/russian-travel/" target="_blank">
        <span className={styles.profile__projectTitle}>Адаптивный сайт</span>
        <div className={styles.profile__arrowLink}></div>
      </a>
      <a className={styles.profile__projectLink} href="https://mesto.bellamir.nomoredomains.sbs/sign-in" target="_blank">
        <span className={styles.profile__projectTitle}>Одностраничное приложение</span>
        <div className={styles.profile__arrowLink}></div>
      </a>


      </div>
      </Section>
  );
};
