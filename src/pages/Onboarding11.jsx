import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding11.module.css";

const Onboarding1 = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/onboarding3");
  }, [navigate]);

  return (
    <div className={styles.onboarding2}>
      <img className={styles.onboarding2Child} alt="" src="/vector-1.svg" />
      <div className={styles.willkommen}>Willkommen!</div>
      <div className={styles.bevorEsLosgeht}>
        Bevor es losgeht, haben wir ein paar Fragen
      </div>
      <div className={styles.loginButton} onClick={onLoginButtonContainerClick}>
        <div className={styles.losGehts}>Los geht’s</div>
      </div>
      <img
        className={styles.monaLisaSvgrepoCom1Icon}
        alt=""
        src="/monalisasvgrepocom-1.svg"
      />
    </div>
  );
};

export default Onboarding1;
