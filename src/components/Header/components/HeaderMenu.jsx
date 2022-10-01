import React from "react";
import { Link } from "react-router-dom";
import styles from "./header-menu.module.scss";
import { HeaderContent } from "./HeaderContent";

export const HeaderMenu = (props) => {
  return (
    <>
      <Link to="/">
        <div className={styles.header__logo}></div>
      </Link>

      {props.main ? (
        <HeaderContent />
      ) : (
        <div className={styles.header__menu}>
          <Link className={styles.header__menuLink} to="/signup">
            Регистрация
          </Link>
          <Link className={styles.header__menuLink} to="/signin">
            <button className={styles.header__button}> Войти</button>
          </Link>
        </div>
      )}
    </>
  );
};
