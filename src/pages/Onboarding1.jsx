import styles from "./Onboarding1.module.css";

const Onboarding1 = () => {
  return (
    <div className={styles.onboarding8}>
      <img className={styles.onboarding8Child} alt="" src="/vector-1.svg" />
      <div className={styles.loginButton}>
        <div className={styles.jetztStarten}>Jetzt starten</div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupContainer}>
            <div className={styles.duBistWrapper}>
              <div className={styles.duBist}>{`Du bist `}</div>
            </div>
            <div className={styles.generationAlphaWrapper}>
              <b className={styles.generationAlpha}>Generation Alpha</b>
            </div>
          </div>
        </div>
        <img className={styles.groupChild} alt="" src="/group-26.svg" />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupFrame}>
          <div className={styles.groupParent1}>
            <div className={styles.duSprichstWrapper}>
              <div className={styles.duSprichst}>Du sprichst</div>
            </div>
            <div className={styles.deutschWrapper}>
              <b className={styles.deutsch}>Deutsch</b>
            </div>
          </div>
        </div>
        <img className={styles.groupItem} alt="" src="/group-261.svg" />
      </div>
      <div className={styles.groupParent2}>
        <div className={styles.groupWrapper1}>
          <div className={styles.groupParent3}>
            <div className={styles.duBistContainer}>
              <div className={styles.duBist1}>Du bist</div>
            </div>
            <div className={styles.muserWrapper}>
              <b className={styles.muser}>Muser</b>
            </div>
          </div>
        </div>
        <img className={styles.groupInner} alt="" src="/group-262.svg" />
      </div>
      <div className={styles.soZusammenfassend}>So, zusammenfassend</div>
      <img
        className={styles.language24dpFill0Wght400GrIcon}
        alt=""
        src="/language-24dp-fill0-wght400-grad0-opsz24-1.svg"
      />
      <div className={styles.eyeTrackingFill0Wght400Gra} />
    </div>
  );
};

export default Onboarding1;
