import React, { useState } from "react";
import { MoviesCardList } from "./MoviesCardList/MoviesCardList";
import { SearchForm } from "./SearchForm/SearchForm";
import { MoviesCard } from "./MoviesCard/MoviesCard";
import useWindowSize from "../../hooks/useWindowSize";
// import { data } from "./MoviesCard/movies-mock-data";

export const Movies = ({
  allMovies,
  savedMovies,
  setSavedMovies,
  savedMode,
  includeShort,
  setIncludeShort,
}) => {
  const size = useWindowSize();
  const maxCards = size.width > 820 ? 12 : size.width > 480 ? 8 : 5;
  const [serachName, setSearchName] = useState();
  const shortMovies = allMovies.filter((movie) => movie.duration <= 40);
  const renderMovies = !includeShort ? allMovies : shortMovies;

  const searchMovies = (movies, name) => {
    if (!movies || !name) {
      return "";
    }
    return movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(name.toLowerCase())
    );
  };
  const selectedMovies = searchMovies(renderMovies, serachName);

  return (
    <>
      <SearchForm
        setIncludeShort={setIncludeShort}
        includeShort={includeShort}
        setSearchName={setSearchName}
        serachName={serachName}
      />
      <MoviesCardList>
        {!savedMode ? (
          <>
            {selectedMovies
              ? selectedMovies
                  .slice(0, maxCards)
                  .map((movie) => (
                    <MoviesCard
                      {...movie}
                      key={movie.id}
                      savedMode={savedMode}
                    />
                  ))
              : null}
          </>
        ) : (
          <>
            {savedMovies
              ? savedMovies
                  .slice(0, maxCards)
                  .map((movie) => (
                    <MoviesCard
                      {...movie}
                      key={movie.id}
                      savedMode={savedMode}
                    />
                  ))
              : null}
          </>
        )}
      </MoviesCardList>
    </>
  );
};
