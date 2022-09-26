import React from "react";
import { Section } from "../../Elements";
import styles from "./searchForm.module.scss";

export const SearchForm = () => {
  return (
    <Section>
      <div className={styles.form}>
        <input
          type="search"
          name="movie"
          placeholder="Фильм"
          className={styles.search}
        />
        <button className={styles.search__button}></button>
      </div>

      <div className={styles.filter}>
        <div className={styles.tumbler}></div>
        <span className={styles.condition}>Короткометражки</span>
      </div>
    </Section>
  );
};
