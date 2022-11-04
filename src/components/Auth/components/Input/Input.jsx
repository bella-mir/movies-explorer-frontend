import React from "react";
import styles from "./input.module.scss";

export const Input = (props) => {
  return (
    <label className={styles.input__label}>
      {props.label}
      <input
        className={styles.input__input}
        required={props.required}
        onChange={props.onChange}
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        pattern={props.pattern}
        minLength={props.minLength}
        maxLength={props.maxLength}
        autoComplete={props.autoComplete}
      ></input>
      <span className={styles.input__error}>{props.error}</span>
    </label>
  );
};
