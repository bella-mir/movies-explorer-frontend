import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../General";
import styles from "./profile.module.scss";

export const Profile = () => {
  return (
    <Section>
      <h2 className={styles.greeting}>Привет, Виталий!</h2>
      <div className={styles.data}>
        <p className={styles.info}>Имя</p>
        <p className={styles.info}>Виталий</p>
      </div>
      <div className={styles.data}>
        <p className={styles.info}>Почта</p>
        <p className={styles.info}>pochta@yandex.ru</p>
      </div>

      <div className={styles.bottom}>
        <button className={styles.editing}>Редактировать</button>

        <Link className={styles.logout} to="/signin">
          Выйти из аккаунта
        </Link>
      </div>
    </Section>
  );
};
