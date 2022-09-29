import React from "react";
import { Link } from "react-router-dom";

import styles from "./notFound.module.scss";

export const NotFound = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <h2 className={styles.error}>404</h2>
        <p className={styles.description}>Страница не найдена</p>
      </div>
      <Link className={styles.link} to="/">
        Назад
      </Link>
    </div>
  );
};
