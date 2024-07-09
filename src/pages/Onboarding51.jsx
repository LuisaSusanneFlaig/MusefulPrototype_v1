import styles from "./Onboarding51.module.css";

const Onboarding5 = () => {
  return (
    <div className={styles.onboarding9}>
      <img className={styles.onboarding9Child} alt="" src="/vector-1.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.parent}>
          <div className={styles.div}>18</div>
          <img className={styles.groupItem} alt="" src="/polygon-2.svg" />
          <img className={styles.groupInner} alt="" src="/polygon-1.svg" />
        </div>
      </div>
      <div className={styles.willkommen}>Willkommen!</div>
      <div className={styles.wieAltBist}>Wie alt bist Du?</div>
      <div className={styles.status}>
        <div className={styles.statusChild} />
        <div className={styles.statusItem} />
        <div className={styles.statusInner} />
        <div className={styles.rectangleDiv} />
      </div>
    </div>
  );
};

export default Onboarding5;
