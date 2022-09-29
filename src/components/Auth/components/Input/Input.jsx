import React from "react";
import styles from "./input.module.scss";

export const Input = (props) => {
  return (
    <label className={styles.label}>
      {props.label}
      <input className={styles.input}></input>
    </label>
  );
};
