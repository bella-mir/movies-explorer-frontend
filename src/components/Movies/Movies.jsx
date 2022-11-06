import React, { useState, useEffect } from "react";
import { SearchForm } from "./SearchForm/SearchForm";
import { MoviesCard } from "./MoviesCard/MoviesCard";
import { Preloader } from "../General/Preloader/Preloader";
import { Section } from "../General";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./movies.module.scss";

export const Movies = ({
  onSubmit,
  displayMovies,
  savedSearchMovies,
  savedMovies,
  setSavedMovies,
  savedMode,
  includeShort,
  setIncludeShort,
  isLoading,
  alternativeInput,
  shortMovies,
  shortSavedMovies,
  nothingFoundAll,
  nothingFoundSaved,
}) => {
  const size = useWindowSize();

  const [maxCards, setMaxCards] = useState(12);
  const [addCards, setAddCards] = useState(4);
  const [cardsToDisplay, setCardsToDisplay] = useState(maxCards);

  const [allToDisplay, setAllToDisplay] = useState({ ...displayMovies });
  const [savedToDisplay, setSavedToDisplay] = useState({
    ...savedSearchMovies,
  });
  const [notFoundText, setNotFoundText] = useState("");

  useEffect(() => {}, [size.width, savedSearchMovies]);

  useEffect(() => {
    if (size.width > 820) {
      setMaxCards(() => 12);
      setAddCards(() => 3);
    } else if (size.width > 480) {
      setMaxCards(() => 8);
      setAddCards(() => 2);
    } else {
      setMaxCards(() => 5);
      setAddCards(() => 2);
    }
  }, [size]);

  useEffect(() => {
    if (savedMode & nothingFoundSaved) {
      setNotFoundText("Нет сохраненных фильмов");
    } else if (!savedMode & nothingFoundAll) {
      setNotFoundText("Фильмы не найдены");
    } else {
      setNotFoundText("");
    }
  }, [savedMode, nothingFoundSaved, nothingFoundAll]);

  const handleShowMoreMovies = () => {
    setCardsToDisplay(() => maxCards + addCards);
  };

  useEffect(() => {
    if (includeShort) {
      setAllToDisplay(() => shortMovies);
      setSavedToDisplay(() => shortSavedMovies);
    } else {
      setAllToDisplay(() => displayMovies);
      setSavedToDisplay(() => savedSearchMovies);
    }
  }, [
    includeShort,
    displayMovies,
    shortMovies,
    shortSavedMovies,
    savedSearchMovies,
    savedMode,
  ]);

  return (
    <>
      <SearchForm
        setIncludeShort={setIncludeShort}
        includeShort={includeShort}
        savedMode={savedMode}
        onSubmit={onSubmit}
        alternativeInput={alternativeInput}
        setCardsToDisplay={setCardsToDisplay}
        maxCards={maxCards}
      />
      <Section className={styles.cards}>
        <div className={styles.cardList}>
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              {!savedMode ? (
                <>
                  {allToDisplay && allToDisplay.length > 0 ? (
                    allToDisplay
                      .slice(0, cardsToDisplay)
                      .map((movie) => (
                        <MoviesCard
                          movie={movie}
                          key={movie.nameRU}
                          savedMode={savedMode}
                          setSavedMovies={setSavedMovies}
                          savedMovies={savedMovies}
                        />
                      ))
                  ) : (
                    <span className={styles.cardList__notfound}>
                      {notFoundText}
                    </span>
                  )}
                </>
              ) : (
                <>
                  {savedToDisplay && savedToDisplay.length > 0 ? (
                    savedToDisplay.map((movie) => (
                      <MoviesCard
                        movie={movie}
                        key={movie.nameRU}
                        savedMode={savedMode}
                        setSavedMovies={setSavedMovies}
                        savedMovies={savedMovies}
                      />
                    ))
                  ) : (
                    <span className={styles.cardList__notfound}>
                      {notFoundText}
                    </span>
                  )}
                </>
              )}
            </>
          )}
        </div>

        {allToDisplay && allToDisplay.length > maxCards && !savedMode ? (
          <button
            className={styles.cardList__button}
            type="button"
            onClick={handleShowMoreMovies}
          >
            Еще
          </button>
        ) : null}
      </Section>
    </>
  );
};
