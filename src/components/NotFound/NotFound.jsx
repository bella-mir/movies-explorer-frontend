import React from "react";
import { Link } from "react-router-dom";

import styles from "./notFound.module.scss";

export const NotFound = () => {
  return (
    <div className={styles.notfound__wrap}>
      <div className={styles.notfound__content}>
        <h2 className={styles.notfound__error}>404</h2>
        <p className={styles.notfound__description}>Страница не найдена</p>
      </div>
      <Link className={styles.notfound__link} to={-1}>
        Назад
      </Link>
    </div>
  );
};
