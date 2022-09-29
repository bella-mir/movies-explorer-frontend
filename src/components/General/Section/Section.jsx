import React from "react";
import styles from "./section.module.scss";
import classnames from 'classnames';

export const Section = (props) => {
  {console.log(props)}
  return <div className={ classnames(styles.section, props.className)}>{props.children}</div>;
};