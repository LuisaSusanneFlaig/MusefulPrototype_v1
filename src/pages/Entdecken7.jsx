import { useState, useCallback } from "react";
import Entdecken5 from "../components/Entdecken5";
import PortalPopup from "../components/PortalPopup";
import KeyboardsIPhone from "../components/KeyboardsIPhone1";
import { useNavigate } from "react-router-dom";
import styles from "./Entdecken7.module.css";

const Entdecken7 = () => {
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
    navigate("/entdecken9");
  }, [navigate]);

  return (
    <>
      <div className={styles.entdecken8}>
        <KeyboardsIPhone />
        <div className={styles.kiChat}>
          <img className={styles.youIcon} alt="" src="/you-icon.svg" />
          <img className={styles.aiIcon} alt="" src="/ai-icon.svg" />
          <div className={styles.du}>Du</div>
          <div className={styles.museful}>Museful</div>
          <div className={styles.zeigMitEin}>
            Zeig mit ein Video von Pac Man
          </div>
          <div className={styles.gerneHierIst}>
            Gerne. Hier ist ein Video von Pac Man.
          </div>
        </div>
        <div className={styles.header}>
          <b className={styles.pacMan}>Pac Man</b>
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
        <img
          className={styles.saveButtonIcon}
          alt=""
          src="/savebutton.svg"
          onClick={openEntdecken6}
        />
        <img
          className={styles.questionButtonIcon}
          alt=""
          src="/question-button.svg"
        />
        <div className={styles.chat}>
          <div className={styles.frage}>Frage</div>
          <img
            className={styles.micFill0Wght400Grad0Opsz24Icon}
            alt=""
            src="/mic-fill0-wght400-grad0-opsz24-1.svg"
          />
        </div>
        <div
          className={styles.loginButton}
          onClick={onLoginButtonContainerClick}
        >
          <div className={styles.video}>Video</div>
        </div>
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

export default Entdecken7;
