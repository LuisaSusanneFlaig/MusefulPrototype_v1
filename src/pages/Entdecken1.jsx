import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Entdecken1.module.css";

const Entdecken1 = () => {
  const navigate = useNavigate();

  const onArrowBackFILL0Wght400GRADClick = useCallback(() => {
    navigate("/entdecken1");
  }, [navigate]);

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/entdecken3");
  }, [navigate]);

  return (
    <div className={styles.entdecken2}>
      <div className={styles.header}>
        <b className={styles.dauerausstellung}>Dauerausstellung</b>
      </div>
      <div className={styles.mit2000ObjektenContainer}>
        <p className={styles.mit2000Objekten}>
          Mit 2.000 Objekten aus unserer Sammlung erzählen wir auf 3.000
          Quadratmetern über 40.000 Jahre Kommunikationsgeschichte – vom
          Faustkeil bis zum Smartphone.
        </p>
        <p className={styles.entdeckenSieEinzigartige}>
          Entdecken Sie einzigartige Objekte wie die sagenumwobene Blaue
          Mauritius, das erste Telefon von Philipp Reis oder die legendäre
          Chiffriermaschine Enigma.
        </p>
        <p className={styles.verschickenSieEinen}>
          Verschicken Sie einen Brief mit der Rohrpost, morsen Sie
          ein Telegramm nach Hamburg oder präsentieren Sie die Nachrichten in
          unserem Fernsehstudio. Vom Rauchzeichen über die Rohrpost bis zur
          virtuellen Botschaft: Das Museum für Kommunikation Berlin lässt das
          Thema Kommunikation vielfältig und interaktiv lebendig werden.
        </p>
      </div>
      <img
        className={styles.arrowBackFill0Wght400Grad0Icon}
        alt=""
        src="/arrow-back-fill0-wght400-grad0-opsz24-1.svg"
        onClick={onArrowBackFILL0Wght400GRADClick}
      />
      <div className={styles.loginButton} onClick={onLoginButtonContainerClick}>
        <div className={styles.start}>Start</div>
      </div>
    </div>
  );
};

export default Entdecken1;
