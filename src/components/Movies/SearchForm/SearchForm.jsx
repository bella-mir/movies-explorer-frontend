import React, { useState, useEffect } from "react";
import { Section } from "../../General";
import { ToggleSwitch } from "../../General/ToggleSwitch/ToggleSwitch";
import { useForm } from "../../../hooks/useForm";
import styles from "./searchForm.module.scss";

export const SearchForm = ({
  includeShort,
  setIncludeShort,
  savedMode,
  onSubmit,
  setCardsToDisplay,
  maxCards,
}) => {
  const controlInput = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [alternativeInput, setAlternativeInput] = useState("");

  useEffect(() => {
    setErrorMessage("");
  }, [savedMode, controlInput.values]);

  useEffect(() => {
    if (savedMode) {
      setAlternativeInput(() => "");
    } else {
      const savedSearch = localStorage.getItem("searchKeyword")
        ? localStorage.getItem("searchKeyword")
        : "";

      setAlternativeInput(() => savedSearch);
    }
  }, [savedMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardsToDisplay(maxCards);

    if (controlInput.values && controlInput.values.movie) {
      onSubmit(controlInput.values.movie);
    } else {
      setErrorMessage("Необходимо ввести ключевое слово для поиска");
    }
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
          value={
            controlInput.values ? controlInput.values.movie : alternativeInput
          }
        />
        <button className={styles.search__button} type="submit"></button>
      </form>
      <span className={styles.search__error}> {errorMessage}</span>

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
