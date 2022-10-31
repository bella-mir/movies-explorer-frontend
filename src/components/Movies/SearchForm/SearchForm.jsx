import React from "react";
import { Section } from "../../General";
import { ToggleSwitch } from "../../General/ToggleSwitch/ToggleSwitch";
import { useForm } from "../../../hooks/useForm";
import styles from "./searchForm.module.scss";

export const SearchForm = ({
  includeShort,
  setIncludeShort,
  setSearchName,
}) => {
  const controlInput = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { movie } = controlInput.values;
    setSearchName(movie);
  };

  return (
    <Section className={styles.search}>
      <form className={styles.search__form} onSubmit={handleSubmit}>
        <input
          type="search"
          id="movie"
          name="movie"
          placeholder="Фильм"
          className={styles.search__input}
          onChange={controlInput.handleChange}
          value={controlInput.values ? controlInput.values.movie : ""}
          required
        />
        <button className={styles.search__button} type="submit"></button>
      </form>

      <div className={styles.search__filter}>
        <ToggleSwitch
          includeShort={includeShort}
          setIncludeShort={setIncludeShort}
        />

        <span className={styles.search__condition}>Короткометражки</span>
      </div>
    </Section>
  );
};
