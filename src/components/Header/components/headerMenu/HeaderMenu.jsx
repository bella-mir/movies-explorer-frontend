import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./header-menu.module.scss";
import { HeaderContent } from "../headerContent/HeaderContent";

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
          <NavLink className={styles.header__menuLink} to="/signup">
            Регистрация
          </NavLink>
          <NavLink className={styles.header__menuLink} to="/signin">
            <button type="button" className={styles.header__button}>
              Войти
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
};
