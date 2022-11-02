import React, { useState, useEffect } from "react";
import { MoviesCardList } from "./MoviesCardList/MoviesCardList";
import { SearchForm } from "./SearchForm/SearchForm";
import { MoviesCard } from "./MoviesCard/MoviesCard";
import { Preloader } from "../General/Preloader/Preloader";
import useWindowSize from "../../hooks/useWindowSize";

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
  const addCards = size.width > 820 ? 3 : 2;
  const [cardsToDisplay, setCardsToDisplay] = useState(maxCards);
  const [serachName, setSearchName] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (allMovies) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [allMovies]);

  const shortAllMovies =
    allMovies.length > 0
      ? allMovies.filter((movie) => movie.duration <= 40)
      : null;

  const shortSavedMovies =
    savedMovies.length > 0
      ? savedMovies.filter((movie) => movie.duration <= 40)
      : null;

  const renderAllMovies = !includeShort ? allMovies : shortAllMovies;
  const renderSavedMovies = !includeShort ? savedMovies : shortSavedMovies;

  const searchMovies = (movies, name) => {
    if (!movies || !name) {
      return "";
    }
    return movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(name.toLowerCase())
    );
  };

  const searchSavedhMovies = (movies, name) => {
    if (!name) {
      return movies;
    } else if (movies.length < 3) {
      return {};
    } else {
      return movies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(name.toLowerCase())
      );
    }
  };

  const selectedAllMovies = searchMovies(renderAllMovies, serachName);
  const selectedSavedMovies = searchSavedhMovies(renderSavedMovies, serachName);
  // const selectedSavedMovies = renderSavedMovies;

  return (
    <>
      <SearchForm
        setIncludeShort={setIncludeShort}
        includeShort={includeShort}
        setSearchName={setSearchName}
        serachName={serachName}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          setCardsToDisplay={setCardsToDisplay}
          cardsToDisplay={cardsToDisplay}
          addCards={addCards}
        >
          {!savedMode ? (
            <>
              {selectedAllMovies.length>0
                ? selectedAllMovies
                    .slice(0, cardsToDisplay)
                    .map((movie) => (
                      <MoviesCard
                        movie={movie}
                        key={movie.id}
                        savedMode={savedMode}
                        setSavedMovies={setSavedMovies}
                        savedMovies={savedMovies}
                      />
                    ))
                : null}
            </>
          ) : (
            <>
              {selectedSavedMovies
                ? selectedSavedMovies
                    .slice(0, cardsToDisplay)
                    .map((movie) => (
                      <MoviesCard
                        movie={movie}
                        key={movie.id}
                        savedMode={savedMode}
                        setSavedMovies={setSavedMovies}
                        savedMovies={savedMovies}
                      />
                    ))
                : null}
            </>
          )}
        </MoviesCardList>
      )}
    </>
  );
};
