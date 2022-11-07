import React, { useState, useEffect } from "react";
import { SearchForm } from "./SearchForm/SearchForm";
import { MoviesCard } from "./MoviesCard/MoviesCard";
import { Preloader } from "../General/Preloader/Preloader";
import { Section } from "../General";
import useWindowSize from "../../hooks/useWindowSize";
import {
  LargePageWidth,
  LagePageMoviesLoad,
  MediumPageWidth,
  MediumSmallPageMoviesLoad,
  MediumPageMoviesVisible,
  SmallPageMoviesVisible,
  LagePageMoviesVisible,
} from "./movies-constants";
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
  includeShortSaved,
  setIncludeShortSaved,
}) => {
  const size = useWindowSize();

  const [maxCards, setMaxCards] = useState(LagePageMoviesVisible);
  const [addCards, setAddCards] = useState(LagePageMoviesLoad);
  const [cardsToDisplay, setCardsToDisplay] = useState(maxCards);

  const [allToDisplay, setAllToDisplay] = useState({ ...displayMovies });
  const [savedToDisplay, setSavedToDisplay] = useState({
    ...savedSearchMovies,
  });
  const [notFoundText, setNotFoundText] = useState("");

  useEffect(() => {}, [size.width, savedSearchMovies]);

  useEffect(() => {
    if (size.width > LargePageWidth) {
      setMaxCards(() => LagePageMoviesVisible);
      setAddCards(() => LagePageMoviesLoad);
    } else if (size.width > MediumPageWidth) {
      setMaxCards(() => MediumPageMoviesVisible);
      setAddCards(() => MediumSmallPageMoviesLoad);
    } else {
      setMaxCards(() => SmallPageMoviesVisible);
      setAddCards(() => MediumSmallPageMoviesLoad);
    }
  }, [
    size,
    LargePageWidth,
    LagePageMoviesLoad,
    MediumPageWidth,
    MediumPageMoviesVisible,
    MediumSmallPageMoviesLoad,
    SmallPageMoviesVisible,
  ]);

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
    setCardsToDisplay(() => cardsToDisplay + addCards);
  };

  useEffect(() => {
    if (includeShortSaved) {
      setSavedToDisplay(() => shortSavedMovies);
    } else {
      setSavedToDisplay(() => savedSearchMovies);
    }
  }, [includeShortSaved, shortSavedMovies, savedSearchMovies]);

  useEffect(() => {
    if (includeShort) {
      setAllToDisplay(() => shortMovies);
    } else {
      setAllToDisplay(() => displayMovies);
    }
  }, [includeShort, displayMovies, shortMovies]);

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
        includeShortSaved={includeShortSaved}
        setIncludeShortSaved={setIncludeShortSaved}
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
