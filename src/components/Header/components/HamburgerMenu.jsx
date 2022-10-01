import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./hamburger-menu.module.scss";

export const HamburgerMenu = () => {
  const [isOpened, setIsOpened] = useState(true);
  const [buttonPosition, setButtonPosition] = useState("absolute");

  useEffect(() => {}, [buttonPosition]);

  const handleChange = (event) => {
    if (event.target.checked) {
      setButtonPosition(() => "fixed");
      console.log(buttonPosition);
    } else {
      setButtonPosition(() => "absolute");
    }
    setIsOpened((current) => !current);
  };

  return (
    <div className={styles.menuToggle} style={{ position: buttonPosition }}>
      <input
        type="checkbox"
        value={isOpened}
        onChange={handleChange}
        style={{ position: buttonPosition }}
      />
      <span></span>
      <span></span>
      <span></span>
      <ul className={styles.menu}>
        <div className={styles.burger__menublock}>
          <Link className={styles.burger__menuLink} to="/">
            Главная
          </Link>
          <Link className={styles.burger__menuLink} to="/movies">
            Фильмы
          </Link>
          <Link className={styles.burger__menuLink} to="/saved-movies">
            Сохраненные фильмы
          </Link>
        </div>
        <div className={styles.burger__menublock}>
          <Link className={styles.burger__menuLink} to="/profile">
            <button className={styles.burger__button_biege}>Аккаунт</button>
          </Link>
        </div>
      </ul>
    </div>
  );
};
