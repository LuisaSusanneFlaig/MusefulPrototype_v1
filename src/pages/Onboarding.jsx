import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding.module.css";

const Onboarding = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/onboarding5");
  }, [navigate]);

  return (
    <div className={styles.onboarding4}>
      <img className={styles.onboarding4Child} alt="" src="/vector-1.svg" />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.deutsch}>Deutsch</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.englisch}>Englisch</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.spanisch}>Spanisch</div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.franzsisch}>Französisch</div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild1} />
        <div className={styles.mandarin}>Mandarin</div>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild2} />
        <div className={styles.japanisch}>Japanisch</div>
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.groupChild3} />
        <div className={styles.arabisch}>Arabisch</div>
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.groupChild4} />
        <div className={styles.hindi}>Hindi</div>
      </div>
      <div className={styles.rectangleParent5}>
        <div className={styles.groupChild5} />
        <div className={styles.tamil}>Tamil</div>
      </div>
      <div className={styles.willkommen}>Willkommen!</div>
      <div className={styles.welcheSpracheSprichst}>
        Welche Sprache sprichst Du?
      </div>
      <div className={styles.status}>
        <div className={styles.statusChild} />
        <div className={styles.statusItem} />
        <div className={styles.statusInner} />
        <div className={styles.statusChild1} />
      </div>
    </div>
  );
};

export default Onboarding;
