import React, { useEffect, useState } from "react";
import { MoviesCardList } from "./MoviesCardList/MoviesCardList";
import { SearchForm } from "./SearchForm/SearchForm";
import { MoviesCard } from "./MoviesCard/MoviesCard";

import { data } from "./MoviesCard/movies-mock-data";

export const Movies = ({
  allMovies,
  savedMode,
  includeShort,
  setIncludeShort,
}) => {
  useEffect(() => {
    console.log(allMovies);
  }, []);

  const [serachName, setSearchName] = useState();

  const shortMovies = data.filter((movie) => movie.duration <= 40);

  const renderMovies = !includeShort ? data : shortMovies;

  const searchMovies = (movies, name) => {
    if (!movies || !name) {
      return movies;
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
            {selectedMovies.slice(0, 100).map((movie) => (
              <MoviesCard {...movie} key={movie.id} savedMode={savedMode} />
            ))}
          </>
        ) : (
          <>
            {data.slice(0, 100).map((movie) => (
              <MoviesCard {...movie} key={movie.id} savedMode={savedMode} />
            ))}
          </>
        )}
      </MoviesCardList>
    </>
  );
};
