import React from "react";
import styles from "./toggle-switch.module.scss";

export const ToggleSwitch = ({ includeShort, setIncludeShort }) => {
  return (
    <label className={styles.toggleSwitch}>
      <input
        className={styles.toggleSwitch__input}
        type="checkbox"
        checked={includeShort}
        onChange={() => setIncludeShort(!includeShort)}
      />
      <span className={styles.toggleSwitch__switch} />
    </label>
  );
};
