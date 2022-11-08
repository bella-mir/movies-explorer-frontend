import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <Routes>
      {["movies", "/saved-movies", "/"].map((path) => (
        <Route
          key={path}
          path={path}
          element={
            <footer className={styles.footer}>
              <div className={styles.footer__info}>
                Учебный проект Яндекс.Практикум х BeatFilm.
              </div>
              <div className={styles.footer__menu}>
                <div className={styles.footer__year}>© 2022</div>
                <div className={styles.footer__links}>
                  <a
                    className={styles.footer__link}
                    href="https://practicum.yandex.ru/web/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Яндекс.Практикум
                  </a>
                  <a
                    className={styles.footer__link}
                    href="https://github.com/belka-mironova"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </footer>
          }
        />
      ))}
    </Routes>
  );
};
