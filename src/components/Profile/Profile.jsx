import React, { useState, useContext, useEffect } from "react";
import { Section } from "../General";
import { useForm } from "../../hooks/useForm";
import { updateUserInfo } from "../../utils/Auth";
import { CurrentUserContext } from "../../contexts/userContext";
import styles from "./profile.module.scss";
import { Preloader } from "../General/Preloader/Preloader";

export const Profile = ({ handleLogout }) => {
  const controlInput = useForm();
  const [saveDisabled, setSaveDisabled] = useState(false);
  const [editingMode, setEditingMode] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState("");

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {}, [currentUser]);

  useEffect(() => {
    if (editingMode) {
      !controlInput.values ? setSaveDisabled(true) : setSaveDisabled(false);
      if (controlInput.values) {
        const { name, mail } = controlInput.values;
        currentUser.data.name === name || currentUser.data.email === mail
          ? setSaveDisabled(true)
          : setSaveDisabled(false);
      }
    } else {
      setSaveDisabled(false);
    }
  }, [controlInput.values, editingMode]);

  const onUpdateUser = (name, email) => {
    if ((name === currentUser.data.name) & (email === currentUser.data.email)) {
      return;
    }

    updateUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        setIsEditSuccess("Данные успешно обновлены");
      })
      .catch((err) => {
        controlInput.setValues({
          name: currentUser.data.name,
          mail: currentUser.data.email,
        });
        setCurrentUser(currentUser);
        setIsEditSuccess("Ошибка обновления данных, попробуте еще раз");
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
          <span className={styles.profile__infoMessage}>{isEditSuccess}</span>

          <div className={styles.profile__bottom}>
            <button
              className={styles.profile__editing}
              type="button"
              onClick={() => {
                editingMode && handleSave();
                !editingMode && setIsEditSuccess("");
                setEditingMode(() => !editingMode);
              }}
              disabled={saveDisabled}
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
