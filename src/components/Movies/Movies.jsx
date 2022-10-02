import React from "react";
import { MoviesCardList } from "./MoviesCardList/MoviesCardList";
import { SearchForm } from "./SearchForm/SearchForm";
import { MoviesCard } from "./MoviesCard/MoviesCard";
// import styles from "./footer.module.scss";

export const Movies = () => {
  return (
    <>
      <SearchForm />
      <MoviesCardList>
        {Array.from({ length: 10 }, (_, i) => (
          <MoviesCard key={i} />
        ))}
      </MoviesCardList>
    </>
  );
};
