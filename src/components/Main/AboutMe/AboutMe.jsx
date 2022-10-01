import React from "react";
import { Section, Title } from "../../General";
import styles from "./aboutMe.module.scss";
import photo from "../../../images/myphoto.jpeg";

export const AboutMe = () => {
  return (
    <Section className={styles.about}>
      <Title>Cтудент</Title>
      <div className={styles.about__content}>
        <div className={styles.about__information}>
          <div className={styles.about__text}>
            <h3 className={styles.about__name}>Белла</h3>
            <p className={styles.about__occupation}>
              Фронтенд-разработчик, 24 года
            </p>
            <p className={styles.about__description}>
              Я занимаюсь городскими исследованиями, аналитикой городских
              пространстыенных данных и фронтент разработкой веб-гис приложений.
            </p>
          </div>
          <a
            className={styles.about__link}
            href="https://github.com/belka-mironova"
          >
            Github
          </a>
        </div>
        <img
          src={photo}
          className={styles.about__photo}
          alt="BellaS face"
        />
      </div>
    </Section>
  );
};
