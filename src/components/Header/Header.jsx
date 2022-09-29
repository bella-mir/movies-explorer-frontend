import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { HeaderContent } from "./components/HeaderContent";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <Routes>
      {["movies", "/saved-movies", "/profile"].map((path) => (
        <Route
          path={path}
          element={
            <div className={styles.header}>
              <HeaderContent main={true} />
            </div>
          }
        />
      ))}

      <Route
        exact
        path="/"
        element={
          <div className={styles.header} style={{ backgroundColor: "#dddee3" }}>
            <HeaderContent />
          </div>
        }
      ></Route>
    </Routes>
  );
};