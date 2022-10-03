import React from "react";
import { Link } from "react-router-dom";
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
          <Link className={styles.header__menuLink} to="/movies">
            Фильмы
          </Link>
          <Link className={styles.header__menuLink} to="/saved-movies">
            Сохраненные фильмы
          </Link>
          <Link className={styles.header__menuLink} to="/profile">
            <button type="button" className={styles.header__button_biege}>Аккаунт</button>
          </Link>
        </div>
      )}
    </>
  );
};
