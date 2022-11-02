import React from "react";
import { Routes, Route } from "react-router-dom";
import { HeaderMenu } from "./components/headerMenu/HeaderMenu";
import styles from "./header.module.scss";

export const Header = (props) => {
  return (
    <Routes>
      {["movies", "/saved-movies", "/profile"].map((path) => (
        <Route
          key={path}
          path={path}
          element={
            <header className={styles.header}>
              {props.isLoggedIn ? <HeaderMenu main={true} /> : <HeaderMenu />}
            </header>
          }
        />
      ))}

      <Route
        exact
        path="/"
        element={
          <header
            className={styles.header}
            style={{ backgroundColor: "#dddee3" }}
          >
            {props.isLoggedIn ? <HeaderMenu main={true} /> : <HeaderMenu />}
          </header>
        }
      ></Route>
    </Routes>
  );
};
