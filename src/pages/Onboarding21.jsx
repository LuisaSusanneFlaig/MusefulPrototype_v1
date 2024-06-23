import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";
import styles from "./Onboarding21.module.css";

const Onboarding2 = () => {
  const navigate = useNavigate();

  const onArrowDropDown24dpFILL0WghIconClick = useCallback(() => {
    navigate("/onboarding31");
  }, [navigate]);

  return (
    <div className={styles.onboarding3}>
      <img className={styles.onboarding3Child} alt="" src="/vector-1.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.generationAlpha}>Generation Alpha</div>
        <img
          className={styles.arrowDropDown24dpFill0WghIcon}
          alt=""
          src="/arrow-drop-down-24dp-fill0-wght400-grad0-opsz24-1.svg"
          onClick={onArrowDropDown24dpFILL0WghIconClick}
        />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.generationZ}>Generation Z</div>
        <img
          className={styles.arrowDropDown24dpFill0WghIcon1}
          alt=""
          src="/arrow-drop-down-24dp-fill0-wght400-grad0-opsz24-1.svg"
        />
      </div>
      <GroupComponent />
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.generationX}>Generation X</div>
        <img
          className={styles.arrowDropDown24dpFill0WghIcon2}
          alt=""
          src="/arrow-drop-down-24dp-fill0-wght400-grad0-opsz24-1.svg"
        />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.babyboomer}>Babyboomer</div>
        <img
          className={styles.arrowDropDown24dpFill0WghIcon3}
          alt=""
          src="/arrow-drop-down-24dp-fill0-wght400-grad0-opsz24-1.svg"
        />
      </div>
      <div className={styles.willkommen}>Willkommen!</div>
      <div className={styles.welcheGenerationBist}>
        Welche Generation bist Du?
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

export default Onboarding2;
