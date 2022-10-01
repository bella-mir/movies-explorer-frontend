import React from "react";
import { MoviesCardList } from "./MoviesCardList/MoviesCardList";
import { SearchForm } from "./SearchForm/SearchForm";
import { MoviesCard } from "./MoviesCard/MoviesCard";

export const SavedMovies = () => {
  return (
    <>
      <SearchForm />
      <MoviesCardList>
        {Array.from({ length: 5 }, (_, i) => (
          <MoviesCard key={i} saved={true} savedMode={true} />
        ))}
      </MoviesCardList>
    </>
  );
};
