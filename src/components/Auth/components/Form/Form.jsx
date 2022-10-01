import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../../General";
import styles from "./form.module.scss";

export const Form = (props) => {
  return (
    <Section className={styles.body}>
      <div className={styles.content}>
        <Link to="/">
          <div className={styles.logo}></div>
        </Link>
        <h2 className={styles.greeting}>{props.greeting}</h2>
        <form className={styles.form}>
          {props.children}
          <button className={styles.submit}>{props.submit}</button>
        </form>
        <div className={styles.info}>
          <p className={styles.question}>{props.question}</p>
          <Link className={styles.link} to={props.href}>
            {props.link}
          </Link>
        </div>
      </div>
    </Section>
  );
};
