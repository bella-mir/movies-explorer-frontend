import React from "react";
import { Section } from "../../General";
import styles from "./moviesCardList.module.scss";

export const MoviesCardList = (props) => {
  const handleShowMoreMovies = () => {
    props.setCardsToDisplay(props.cardsToDisplay + props.addCards);
  };

  const notFoundText = props.savedMode
    ? "Нет сохраненных фильмов"
    : "Фильмы не найдены";

  return (
    <Section className={styles.cards}>
      <div className={styles.cardList}>{props.children}</div>

      {(props.showEmptySaved && props.savedMode) ||
      (props.showEmptyAll && !props.savedMode) ? (
        <span className={styles.cardList__notfound}>{notFoundText}</span>
      ) : (
        <button
          className={styles.cardList__button}
          type="button"
          onClick={handleShowMoreMovies}
        >
          Еще
        </button>
      )}
    </Section>
  );
};
