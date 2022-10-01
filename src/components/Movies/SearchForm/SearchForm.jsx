import React from "react";
import { Section } from "../../General";
import ToggleSwitch from "../../General/ToggleSwitch/ToggleSwitch";
import styles from "./searchForm.module.scss";

export const SearchForm = () => {
  return (
    <Section className={styles.searchblock}>
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
       <ToggleSwitch/>

        <span className={styles.condition}>Короткометражки</span>
      </div>
    </Section>
  );
};
