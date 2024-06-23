import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding5.module.css";

const Onboarding = () => {
  const navigate = useNavigate();

  const onOnboarding1ContainerClick = useCallback(() => {
    navigate("/onboarding2");
  }, [navigate]);

  return (
    <div className={styles.onboarding1} onClick={onOnboarding1ContainerClick}>
      <img className={styles.onboarding1Child} alt="" src="/vector-1.svg" />
      <div className={styles.deinePersonalisierteMuseumse}>
        Deine personalisierte Museumserfahrung
      </div>
      <div className={styles.erlebeUndInteragiere}>
        Erlebe und Interagiere mit Ausstellungsobjekten wie nie zuvor mit HIlfe
        von Künstlicher Intelligenz und Augmented Reality
      </div>
      <b className={styles.museful}>Museful</b>
    </div>
  );
};

export default Onboarding;
