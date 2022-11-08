import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header-content.module.scss";
import useWindowSize from "../../../../hooks/useWindowSize";
import { HamburgerMenu } from "../hamburgerMenu/HamburgerMenu";

export const HeaderContent = () => {
  const size = useWindowSize();

  return (
    <>
      {size.width < 820 ? (
        <HamburgerMenu />
      ) : (
        <div className={styles.header__menu}>
          <NavLink className={styles.header__menuLink} to="/movies">
            Фильмы
          </NavLink>
          <NavLink className={styles.header__menuLink} to="/saved-movies">
            Сохраненные фильмы
          </NavLink>
          <NavLink className={styles.header__menuLink} to="/profile">
            <button type="button" className={styles.header__button_biege}>
              Аккаунт
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
};
