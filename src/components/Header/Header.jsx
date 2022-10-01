import React from "react";
import { Routes, Route } from "react-router-dom";
import { HeaderMenu } from "./components/HeaderMenu";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <Routes>
      {["movies", "/saved-movies", "/profile"].map((path) => (
        <Route
          path={path}
          element={
            <div className={styles.header}>
              <HeaderMenu main={true} />
            </div>
          }
        />
      ))}

      <Route
        exact
        path="/"
        element={
          <div className={styles.header} style={{ backgroundColor: "#dddee3" }}>
            <HeaderMenu />
          </div>
        }
      ></Route>
    </Routes>
  );
};
