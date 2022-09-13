import React from "react";
import styles from "./techs.module.scss";

export const Techs = () => {
  return (
    <div className={styles.techs}>
      <h2 className={styles.techs__title}>Технологии</h2>
      <div className={styles.techs__content}>
        <h3 className={styles.techs__main}>7 технологий</h3>
        <p className={styles.techs__description}> На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
    <div className={styles.techs__list}>
        <div className={styles.techs__element}>HTML</div>
        <div className={styles.techs__element}>CSS</div>
        <div className={styles.techs__element}>JS</div>
        <div className={styles.techs__element}>React</div>
        <div className={styles.techs__element}>Git</div>
        <div className={styles.techs__element}>Express.js</div>
        <div className={styles.techs__element}>mongoDB</div>
    </div>
    </div>
  );
};