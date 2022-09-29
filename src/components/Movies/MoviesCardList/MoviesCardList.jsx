import React from "react";
import { Section } from "../../General";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import styles from "./moviesCardList.module.scss";

export const MoviesCardList = () => {
  return (

<Section>
<div className={styles.cardList}>
{Array.from({ length: 10 }, (_, i) => <MoviesCard key={i}/>)}
</div>
<button className={styles.button}>Еще</button>

</Section>

  );
};