import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../../General";
import styles from "./form.module.scss";

export const Form = (props) => {
  return (
    <Section className={styles.form__body}>
      <div className={styles.form__content}>
        <Link to="/">
          <div className={styles.form__logo}></div>
        </Link>
        <h2 className={styles.form__greeting}>{props.greeting}</h2>
        <form className={styles.form__form} onSubmit={props.onSubmit}>
          {props.children}
          <span className={styles.form__error}>{props.error}</span>
          <button
            type="submit"
            className={styles.form__submit}
            disabled={props.buttonDisabled}
          >
            {props.submit}
          </button>
        </form>
        <div className={styles.form__info}>
          <p className={styles.form__question}>{props.question}</p>
          <Link className={styles.form__link} to={props.href}>
            {props.link}
          </Link>
        </div>
      </div>
    </Section>
  );
};
