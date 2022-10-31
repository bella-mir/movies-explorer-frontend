import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Section } from "../General";
import { useForm } from "../../hooks/useForm";
import styles from "./profile.module.scss";

export const Profile = () => {
  const controlInput = useForm();

  const handleSave = () => {
    if (!controlInput.values) {
      return;
    }
    const { name, mail } = controlInput.values;
    // setSearchName(movie);
  };

  const [editingMode, setEditingMode] = useState(false);

  return (
    <Section className={styles.profile}>
      <h2 className={styles.profile__greeting}>Привет, Виталий!</h2>
      <div className={styles.profile__data}>
        <p className={styles.profile__info}>Имя</p>
        <input
          id="name"
          name="name"
          className={styles.profile__info}
          value={controlInput.values ? controlInput.values.name : "Виталий"}
          disabled={!editingMode}
          onChange={controlInput.handleChange}
        />
      </div>
      <div className={styles.profile__data}>
        <p className={styles.profile__info}>Почта</p>
        <input
          id="mail"
          name="mail"
          className={styles.profile__info}
          value={
            controlInput.values ? controlInput.values.mail : "pochta@mail.ru"
          }
          disabled={!editingMode}
          onChange={controlInput.handleChange}
        />
      </div>

      <div className={styles.profile__bottom}>
        <button
          className={styles.profile__editing}
          type="button"
          onClick={() => {
            editingMode && handleSave();
            setEditingMode(!editingMode);
          }}
        >
          {editingMode ? "Сохранить" : "Редактировать"}
        </button>

        <Link className={styles.profile__logout} to="/signin">
          Выйти из аккаунта
        </Link>
      </div>
    </Section>
  );
};
