import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { Routes, Route } from "react-router-dom";

import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/p" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
