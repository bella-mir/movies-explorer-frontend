import React from "react";
import styles from "./moviesCard.module.scss";
import classnames from "classnames";

export const MoviesCard = (props) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__picture}
        alt="Film Description"
        src={
          "https://s3-alpha-sig.figma.com/img/90ba/2e4b/e072f3f38937c7f5d592d64f3fa59f33?Expires=1665360000&Signature=QF2S0GGoVPvuMaiZqULOx6d0rmKlUcTzFsD92IoUX-kJVhGdDgXJgYEbq4n2STJQwNJMdxd7rwkXh-yhYC4rBmNXSpSsI8UQzTsald28rEWPe12WYaywEy9~SpHKJRcca4JPvW9xnywN9JNIP6M3MyJ5QyVfOA3~VwjLd-WxuK359zPU5jx1eZgyfVv97GxptMwpAAgI6~-ufnFKDR50aY2Mz~MfoNtO3GSM9E2VnwWnWPs3Nt7eJSCf9VzR9tOnAk6rY3RcE9EAKYotuXB5EjRu929TSSSFNvlVSrcDOn8YPIx3CSb8IxQBBbEWhW6Wduk0tzmeJTMT4Up6ETaPqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        }
      />
      <div className={styles.card__header}>
        <h3 className={styles.card__title}>33 слова о дизайне</h3>
        {!props.savedMode ? (
          <button
            className={classnames(
              styles.card__button,
              props.saved && styles.card__saved,
              !props.saved && styles.card__unsaved
            )}
          ></button>
        ) : (
          <button
            className={classnames(styles.card__button, styles.card__delete)}
          ></button>
        )}
      </div>
      <p className={styles.card__duration}>1ч42м</p>
    </div>
  );
};
