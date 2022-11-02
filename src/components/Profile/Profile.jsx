import React, { useState, useContext, useEffect } from "react";
import { Section } from "../General";
import { useForm } from "../../hooks/useForm";
import { updateUserInfo } from "../../utils/Auth";
import { CurrentUserContext } from "../../contexts/userContext";
import styles from "./profile.module.scss";
import { Preloader } from "../General/Preloader/Preloader";

export const Profile = ({ handleLogout }) => {
  const controlInput = useForm();

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {}, [currentUser]);

  const onUpdateUser = (name, email) => {
    updateUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        setCurrentUser(currentUser);
        console.error(err);
      });
  };

  const handleSave = () => {
    if (!controlInput.values) {
      return;
    }
    const { name, mail } = controlInput.values;

    if (!name) {
      onUpdateUser(currentUser.data.name, mail);
    } else if (!mail) {
      onUpdateUser(name, currentUser.data.email);
    } else {
      onUpdateUser(name, mail);
    }
  };

  const [editingMode, setEditingMode] = useState(false);

  return (
    <Section className={styles.profile}>
      {currentUser.data ? (
        <>
          <h2 className={styles.profile__greeting}>
            Привет, {currentUser ? currentUser.data.name : ""}!
          </h2>
          <div className={styles.profile__data}>
            <p className={styles.profile__info}>Имя</p>
            <input
              id="name"
              name="name"
              className={styles.profile__info}
              value={
                controlInput.values
                  ? controlInput.values.name
                  : currentUser.data.name
              }
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
                controlInput.values
                  ? controlInput.values.mail
                  : currentUser.data.email
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

            <button onClick={handleLogout} className={styles.profile__logout}>
              Выйти из аккаунта
            </button>
          </div>
        </>
      ) : (
        <Preloader />
      )}
    </Section>
  );
};
