import React from "react";
import { Section } from "../../Elements";
import styles from "./searchForm.module.scss";

export const SearchForm = () => {
  return (
    <Section>
        <input type="search" name="movie" placeholder="Фильм" />
        <button>Search</button>


    </Section>
  );
};
