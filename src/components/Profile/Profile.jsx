import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../General";
import styles from "./profile.module.scss";

export const Profile = () => {
  return (
    <Section className={styles.profile}>
      <h2 className={styles.profile__greeting}>Привет, Виталий!</h2>
      <div className={styles.profile__data}>
        <p className={styles.profile__info}>Имя</p>
        <p className={styles.profile__info}>Виталий</p>
      </div>
      <div className={styles.profile__data}>
        <p className={styles.profile__info}>Почта</p>
        <p className={styles.profile__info}>pochta@yandex.ru</p>
      </div>

      <div className={styles.profile__bottom}>
        <button className={styles.profile__editing}>Редактировать</button>

        <Link className={styles.profile__logout} to="/signin">
          Выйти из аккаунта
        </Link>
      </div>
    </Section>
  );
};
