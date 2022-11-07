import React from "react";
import styles from "./toggle-switch.module.scss";

export const ToggleSwitch = ({
  includeShort,
  setIncludeShort,
  includeShortSaved,
  setIncludeShortSaved,
  savedMode,
}) => {
  return (
    <label className={styles.toggleSwitch}>
      <input
        className={styles.toggleSwitch__input}
        type="checkbox"
        checked={savedMode ? includeShortSaved : includeShort}
        onChange={() => {
          if (savedMode) {
            setIncludeShortSaved(!includeShortSaved);
          } else {
            setIncludeShort(!includeShort);
            localStorage.setItem("checkbox", !includeShort);
          }
        }}
      />
      <span className={styles.toggleSwitch__switch} />
    </label>
  );
};
