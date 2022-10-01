import React from "react";
import { Section, Title } from "../../General";
import styles from "./aboutMe.module.scss";
import photo from "../../../images/myphoto.jpeg";

export const AboutMe = () => {
  return (
    <Section className={styles.profile}>
      <Title>Cтудент</Title>
      <div className={styles.profile__content}>
        <div className={styles.profile__information}>
          <div className={styles.profile__text}>
            <h3 className={styles.profile__name}>Белла</h3>
            <p className={styles.profile__occupation}>
              Фронтенд-разработчик, 24 года
            </p>
            <p className={styles.profile__description}>
              Я занимаюсь городскими исследованиями, аналитикой городских
              пространстыенных данных и фронтент разработкой веб-гис приложений.
            </p>
          </div>
          <a
            className={styles.profile__link}
            href="https://github.com/belka-mironova"
          >
            Github
          </a>
        </div>
        <img
          src={photo}
          className={styles.profile__photo}
          alt="BellaS face"
        />
      </div>
    </Section>
  );
};
