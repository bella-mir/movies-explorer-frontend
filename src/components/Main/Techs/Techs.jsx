import React from "react";
import styles from "./techs.module.scss";
import { Section, Title } from "../../General";

export const Techs = () => {
  return (
    <Section>
      <Title>Технологии</Title>
      <div className={styles.techs__content}>
        <h3 className={styles.techs__main}>7 технологий</h3>
        <p className={styles.techs__description}>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className={styles.techs__list}>
        <li className={styles.techs__element}>HTML</li>
        <li className={styles.techs__element}>CSS</li>
        <li className={styles.techs__element}>JS</li>
        <li className={styles.techs__element}>React</li>
        <li className={styles.techs__element}>Git</li>
        <li className={styles.techs__element}>Express.js</li>
        <li className={styles.techs__element}>mongoDB</li>
      </ul>
    </Section>
  );
};
