import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { AboutProject } from "../Main/AboutProject";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.page}>
      <Header/>
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
