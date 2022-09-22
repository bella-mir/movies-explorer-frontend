



import React from "react";
import { Section, Title } from "../Elements";
import styles from "./aboutMe.module.scss";

export const AboutMe = () => {
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
    </Section>
  );
};
