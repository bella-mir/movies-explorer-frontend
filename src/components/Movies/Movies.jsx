import React from "react";
import { MoviesCardList } from "./MoviesCardList/MoviesCardList";
import { SearchForm } from "./SearchForm/SearchForm";
// import styles from "./footer.module.scss";

export const Movies = () => {
  return (
    <>
    <SearchForm/>
    <MoviesCardList/>
    </>
  );
};