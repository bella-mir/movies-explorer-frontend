import React from "react";
import styles from "./title.module.scss";

export const Title = (props) => {
  return <h2 className={styles.title}>{props.children}</h2>;
};
