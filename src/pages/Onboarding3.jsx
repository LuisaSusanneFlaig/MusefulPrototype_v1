import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding3.module.css";

const Onboarding31 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/onboarding8");
  }, [navigate]);

  return (
    <div className={styles.onboarding6}>
      <img className={styles.onboarding6Child} alt="" src="/vector-1.svg" />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.muser}>Muser</div>
        <div className={styles.duBistAngetrieben}>
          Du bist angetrieben durch deine endlose Neugier. Du möchtest einen
          tieferen Einblick bekommen.
        </div>
      </div>
      <div className={styles.willkommen}>Willkommen!</div>
      <div className={styles.wieVielInteresse}>Wie viel Interesse hast Du?</div>
      <img
        className={styles.eyeTrackingFill0Wght400GraIcon}
        alt=""
        src="/eye-tracking-fill0-wght400-grad0-opsz24-1.svg"
      />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.wanderer}>Wanderer</div>
        <div className={styles.duBistSchnell}>
          Du bist schnell unterwegs und möchtest knappe Informationen erhalten
          und nicht allzu viel Zeit im Museum verbringen.
        </div>
        <img
          className={styles.footprintFill0Wght400Grad0Icon}
          alt=""
          src="/footprint-fill0-wght400-grad0-opsz24-1.svg"
        />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.scholar}>Scholar</div>
        <div className={styles.wissenIstDer}>
          Wissen ist der Schlüssel. Du möchtest alle Informationen zu der
          Ausstellung erhalten.
        </div>
      </div>
      <div className={styles.status}>
        <div className={styles.statusChild} />
        <div className={styles.statusItem} />
        <div className={styles.statusInner} />
        <div className={styles.rectangleDiv} />
      </div>
    </div>
  );
};

export default Onboarding31;
