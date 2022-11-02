import React from "react";
import { Section } from "../../General";
import styles from "./moviesCardList.module.scss";

export const MoviesCardList = (props) => {
  const handleShowMoreMovies = () => {
    props.setCardsToDisplay(props.cardsToDisplay + props.addCards);
  };

  return (
    <Section className={styles.cards}>
      <div className={styles.cardList}>{props.children}</div>
      <button
        className={styles.cardList__button}
        type="button"
        onClick={handleShowMoreMovies}
      >
        Еще
      </button>
    </Section>
  );
};
