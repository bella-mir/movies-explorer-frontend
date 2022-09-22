import React from "react";
import styles from "./section.module.scss";

export const Section = (props) => {
  return <h2 className={styles.section}>{props.children}</h2>;
};