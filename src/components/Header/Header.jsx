import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = () => {

  const [windowPath, setWindowPath] = useState(window.location.pathname);
  useEffect(() => {
    setWindowPath(window.location.pathname);
  }, []);


  return (
    <div className={styles.header}>
      <div className={styles.header__logo}></div>
      <div className={styles.header__menu}>

      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className={styles.header__menu}>
              <Link className={styles.header__menuLink} to="/signup">
                Регистрация
              </Link>
              <Link className={styles.header__menuLink} to="/signin">
              <button className={styles.header__button}> Войти</button>
              </Link>
            </div>
          }
        ></Route>
        <Route
          // path="/(movies|saved-movies|profile)/"
          path="/movies"
          element={
            <div className={styles.header__menu}>
              <Link className={styles.header__menuLink} to="/movies">
                Фильмы
              </Link>
              <Link className={styles.header__menuLink} to="/saved-movies">
                Сохраненные фильмы
              </Link>
              <Link className={styles.header__menuLink} to="/profile">
                Аккаунт
              </Link>
            </div>
          }
        ></Route>
      </Routes>

        {/* <a className={styles.header__link}>Регистрация</a>
        <button className={styles.header__button}> Войти</button> */}


      </div>
    </div>
  );
};

// import React, { useEffect, useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import styles from "./header.module.scss";

// export const Header = () => {
//   const [windowPath, setWindowPath] = useState(window.location.pathname);
//   useEffect(() => {
//     setWindowPath(window.location.pathname);
//   }, []);

//   return (
//     <div className={styles.header}>
//       <div className={styles.header__logo}></div>
//       <div className={styles.header__menu}>
//         <Link className={styles.header__menuLink} to="/signup">
//           Регистрация
//         </Link>
//         <Link className={styles.header__menuLink} to="/signin">
//           Войти
//         </Link>
//       </div>
//       <Routes>
//         <Route
//           exact
//           path="/"
//           element={
//             <div className={styles.header__menu}>
//               <Link className={styles.header__menuLink} to="/signup">
//                 Регистрация
//               </Link>
//               <Link className={styles.header__menuLink} to="/signin">
//                 Войти
//               </Link>
//             </div>
//           }
//         ></Route>
//         <Route
//           path="/(movies|saved-movies|profile)/"
//           element={
//             <div className={styles.header__menu}>
//               <Link className={styles.header__menuLink} to="/movies">
//                 Фильмы
//               </Link>
//               <Link className={styles.header__menuLink} to="/saved-movies">
//                 Сохраненные фильмы
//               </Link>
//               <Link className={styles.header__menuLink} to="/profile">
//                 Аккаунт
//               </Link>
//             </div>
//           }
//         ></Route>
//       </Routes>
//     </div>
//   );
// };
