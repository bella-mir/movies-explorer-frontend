import React, { useState } from "react";
// import { mainApi } from "../../../utils/MainApi";
import styles from "./moviesCard.module.scss";
import classnames from "classnames";

export const MoviesCard = (movie) => {
  const hours = parseInt(movie.duration / 60);
  const minutes = movie.duration % 60;

  const [isSaved, setIsSaved] = useState(false);

  const handleSaveMovie = () => {
    setIsSaved(true);
  };

  const handleDeleteMovie = () => {
    setIsSaved(false);
  };

  return (
    <div className={styles.card}>
      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
        <img
          className={styles.card__picture}
          alt={movie.nameRU}
          src={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`}
        />
      </a>
      <div className={styles.card__header}>
        <h3 className={styles.card__title}>{movie.nameRU}</h3>
        {!movie.savedMode ? (
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
            // onClick={() => handleDeleteMovie(movie)}
          ></button>
        )}
      </div>
      <p className={styles.card__duration}>
        `{hours}ч{minutes}м`
      </p>
    </div>
  );
};
