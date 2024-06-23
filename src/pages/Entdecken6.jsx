import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardsIPhone from "../components/KeyboardsIPhone";
import styles from "./Entdecken6.module.css";

const Entdecken6 = () => {
  const navigate = useNavigate();

  const onSendButtonIconClick = useCallback(() => {
    navigate("/entdecken8");
  }, [navigate]);

  const onCloseButtonIconClick = useCallback(() => {
    navigate("/entdecken1");
  }, [navigate]);

  const onCameraButtonIconClick = useCallback(() => {
    navigate("/entdecken3");
  }, [navigate]);

  return (
    <div className={styles.entdecken7}>
      <img
        className={styles.sendButtonIcon}
        alt=""
        src="/send-button.svg"
        onClick={onSendButtonIconClick}
      />
      <KeyboardsIPhone />
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
      <div className={styles.chat} onClick={onSendButtonIconClick}>
        <div className={styles.zeigMir}>Zeig mir|</div>
        <img
          className={styles.micFill0Wght400Grad0Opsz24Icon}
          alt=""
          src="/mic-fill0-wght400-grad0-opsz24-1.svg"
        />
      </div>
    </div>
  );
};

export default Entdecken6;
