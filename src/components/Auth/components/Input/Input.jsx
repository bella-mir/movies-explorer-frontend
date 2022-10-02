import React from "react";
import styles from "./input.module.scss";

export const Input = (props) => {
  return (
    <label className={styles.input__label}>
      {props.label}
      <input className={styles.input__input} required={props.required}></input>
      <span className={styles.input__error}>{props.error}</span>
    </label>
  );
};
