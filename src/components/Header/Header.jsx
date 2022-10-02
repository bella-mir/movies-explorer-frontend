import React from "react";
import { Routes, Route } from "react-router-dom";
import { HeaderMenu } from "./components/headerMenu/HeaderMenu";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <Routes>
      {["movies", "/saved-movies", "/profile"].map((path) => (
        <Route
          path={path}
          element={
            <header className={styles.header}>
              <HeaderMenu main={true} />
            </header>
          }
        />
      ))}

      <Route
        exact
        path="/"
        element={
          <header className={styles.header} style={{ backgroundColor: "#dddee3" }}>
            <HeaderMenu />
          </header>
        }
      ></Route>
    </Routes>
  );
};
