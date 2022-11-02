import React, { useState, useEffect } from "react";
import { mainApi } from "../../../utils/MainApi";
import styles from "./moviesCard.module.scss";
import classnames from "classnames";

export const MoviesCard = ({
  movie,
  key,
  savedMode,
  setSavedMovies,
  savedMovies,
}) => {
  const hours = parseInt(movie.duration / 60);
  const minutes = movie.duration % 60;
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setIsSaved(() => savedMovies.some((m) => m.movieId === movie.id));
  }, [savedMovies]);

  const handleSaveMovie = (movie) => {
    mainApi
      .addMovie(movie)
      .then((data) => {
        setSavedMovies([data.data, ...savedMovies]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteMovie = (movie) => {
    const savedMovie = savedMode
      ? savedMovies.find((m) => m.movieId === movie.movieId)
      : savedMovies.find((m) => m.movieId === movie.id);

    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newSavedMovies = savedMovies.filter(
          (movie) => movie._id !== savedMovie._id
        );
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className={styles.card} key={key}>
      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
        <img
          className={styles.card__picture}
          alt={movie.nameRU}
          src={
            !savedMode
              ? `https://api.nomoreparties.co/${movie.image.url}`
              : movie.image
          }
        />
      </a>
      <div className={styles.card__header}>
        <h3 className={styles.card__title}>{movie.nameRU}</h3>
        {!savedMode ? (
          <button
            type="button"
            className={classnames(
              styles.card__button,
              isSaved && styles.card__saved,
              !isSaved && styles.card__unsaved
            )}
            onClick={() => {
              isSaved ? handleDeleteMovie(movie) : handleSaveMovie(movie);
            }}
          ></button>
        ) : (
          <button
            type="button"
            className={classnames(styles.card__button, styles.card__delete)}
            onClick={() => handleDeleteMovie(movie)}
          ></button>
        )}
      </div>
      <p className={styles.card__duration}>
        `{hours}ч{minutes}м`
      </p>
    </div>
  );
};
