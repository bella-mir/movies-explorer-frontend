import React from "react";
import styles from "./aboutProject.module.scss";

export const AboutProject = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.about__title}>О проекте</h2>
      <div className={styles.about__content}>
        <div>
          <h3 className={styles.about__contentSubTitle}>
            Дипломный проект включал 5 этапов
          </h3>
          <p className={styles.about__contentDescription}>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className={styles.about__contentSubTitle}>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className={styles.about__contentDescription}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className={styles.about__timeline}>
        <div className={styles.about__timelineGroup}>
          <div className={styles.about__timelineBack}>1 неделя</div>
          <div className={styles.about__timelineSign}>Back-end</div>
        </div>
        <div className={styles.about__timelineGroup}>
          <div className={styles.about__timelineFront}>4 недели</div>
          <div className={styles.about__timelineSign}>Front-end</div>
        </div>
      </div>
    </div>
  );
};
