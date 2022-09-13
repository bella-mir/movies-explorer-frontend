import React from "react";
import styles from "./profile.module.scss";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <h2 className={styles.profile__title}>Cтудент</h2>
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
      <a className={styles.profile__projectLink} href="#">
        <span className={styles.profile__projectTitle}>Статичный сайт</span>
        <div className={styles.profile__arrowLink}></div>
      </a>
      <a className={styles.profile__projectLink} href="#">
        <span className={styles.profile__projectTitle}>Адаптивный сайт</span>
        <div className={styles.profile__arrowLink}></div>
      </a>
      <a className={styles.profile__projectLink} href="#">
        <span className={styles.profile__projectTitle}>Одностраничное приложение</span>
        <div className={styles.profile__arrowLink}></div>
      </a>


      </div>
    </div>
  );
};
