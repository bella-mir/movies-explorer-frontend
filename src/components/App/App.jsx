import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { AboutProject } from "../Main/AboutProject/AboutProject";
import { Promo } from "../Main/Promo/Promo";
import { Techs } from "../Main/Techs/Techs";
import { Profile } from "../Profile/Profile";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
