import React from "react";
import { Section } from "../../General";
import styles from "./moviesCardList.module.scss";

export const MoviesCardList = (props) => {
  return (
    <Section className={styles.cards}>
      <div className={styles.cardList}>{props.children}</div>
      <button className={styles.button}>Еще</button>
    </Section>
  );
};
