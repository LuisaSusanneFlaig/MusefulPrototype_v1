import { useState, useCallback } from "react";
import Entdecken5 from "../components/Entdecken5";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Entdecken4.module.css";

const Entdecken4 = () => {
  const [isEntdecken6Open, setEntdecken6Open] = useState(false);
  const navigate = useNavigate();

  const openEntdecken6 = useCallback(() => {
    setEntdecken6Open(true);
  }, []);

  const closeEntdecken6 = useCallback(() => {
    setEntdecken6Open(false);
  }, []);

  const onCloseButtonIconClick = useCallback(() => {
    navigate("/entdecken1");
  }, [navigate]);

  const onCameraButtonIconClick = useCallback(() => {
    navigate("/entdecken3");
  }, [navigate]);

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/entdecken7");
  }, [navigate]);

  return (
    <>
      <div className={styles.entdecken5}>
        <div className={styles.text}>
          <div className={styles.textChild} />
          <div className={styles.pacManJapPakkuman}>
            <p className={styles.pacManJapPakkuman1}>
              Pac-Man (jap. パックマン, Pakkuman) ist ein Arcarde-
              und Videospiel welches erstmals am 22. Mai 1980 von Namco in Japan
              als „Puck Man“ für Arcarde-Automaten veröffentlicht wurde.
            </p>
            <p className={styles.esErschienenZahlreicheKlone}>
              Es erschienen zahlreiche Klone, Varianten und Weiterentwicklungen
              des Spiels für so gut wie alle Betriebssysteme....
              <span className={styles.weiterlesen}> weiterlesen</span>
            </p>
          </div>
        </div>
        <div className={styles.entdecken5Child} />
        <div className={styles.header}>
          <b className={styles.pacMan}>Pac Man</b>
          <b className={styles.pacMan1}>Pac Man</b>
        </div>
        <img
          className={styles.closeButtonIcon}
          alt=""
          src="/closebutton1.svg"
          onClick={onCloseButtonIconClick}
        />
        <img
          className={styles.cameraButtonIcon}
          alt=""
          src="/camerabutton.svg"
          onClick={onCameraButtonIconClick}
        />
        <div
          className={styles.loginButton}
          onClick={onLoginButtonContainerClick}
        >
          <div className={styles.chat}>Chat</div>
        </div>
        <img
          className={styles.saveButtonIcon}
          alt=""
          src="/savebutton.svg"
          onClick={openEntdecken6}
        />
      </div>
      {isEntdecken6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEntdecken6}
        >
          <Entdecken5 onClose={closeEntdecken6} />
        </PortalPopup>
      )}
    </>
  );
};

export default Entdecken4;
