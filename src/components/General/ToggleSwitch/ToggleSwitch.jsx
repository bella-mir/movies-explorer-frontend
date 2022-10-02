import React, { useState } from "react";
import styles from "./toggle-switch.module.scss";

export const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(true);
  const onToggle = () => setIsToggled(!isToggled);
  return (
    <label className={styles.toggleSwitch}>
      <input
        className={styles.toggleSwitch__input}
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
      />
      <span className={styles.toggleSwitch__switch} />
    </label>
  );
};
