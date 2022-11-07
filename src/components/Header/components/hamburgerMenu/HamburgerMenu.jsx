import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./hamburger-menu.module.scss";

export const HamburgerMenu = () => {
  const [isOpened, setIsOpened] = useState(true);
  const [buttonPosition, setButtonPosition] = useState("absolute");

  const handleChange = (event) => {
    if (event.target.checked) {
      setButtonPosition(() => "fixed");
    } else {
      setButtonPosition(() => "absolute");
    }
    setIsOpened((current) => !current);
  };

  return (
    <div
      className={styles.burger__menuToggle}
      style={{ position: buttonPosition }}
    >
      <input
        className={styles.burger__input}
        type="checkbox"
        value={isOpened}
        onChange={handleChange}
        style={{ position: buttonPosition }}
      />
      <span></span>
      <span></span>
      <span></span>
      <ul className={styles.burger__menu}>
        <div className={styles.burger__menublock}>
          <NavLink className={styles.burger__menuLink} to="/">
            Главная
          </NavLink>
          <NavLink className={styles.burger__menuLink} to="/movies">
            Фильмы
          </NavLink>
          <NavLink className={styles.burger__menuLink} to="/saved-movies">
            Сохраненные фильмы
          </NavLink>
        </div>
        <div className={styles.burger__menublock}>
          <NavLink className={styles.burger__menuLink} to="/profile">
            <button type="button" className={styles.burger__button_biege}>
              Аккаунт
            </button>
          </NavLink>
        </div>
      </ul>
    </div>
  );
};
