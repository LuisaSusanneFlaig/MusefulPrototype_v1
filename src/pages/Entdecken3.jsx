import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Entdecken3.module.css";

const Entdecken3 = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/entdecken5");
  }, [navigate]);

  const onCloseButtonIconClick = useCallback(() => {
    navigate("/entdecken1");
  }, [navigate]);

  const onLoginButtonContainerClick1 = useCallback(() => {
    navigate("/entdecken7");
  }, [navigate]);

  return (
    <div className={styles.entdecken4}>
      <img className={styles.img56161Icon} alt="" src="/img-5616-11@2x.png" />
      <div className={styles.header}>
        <b className={styles.dauerausstellung}>Dauerausstellung</b>
      </div>
      <div className={styles.loginButton} onClick={onLoginButtonContainerClick}>
        <div className={styles.info}>Info</div>
      </div>
      <img
        className={styles.closeButtonIcon}
        alt=""
        src="/closebutton.svg"
        onClick={onCloseButtonIconClick}
      />
      <div
        className={styles.loginButton1}
        onClick={onLoginButtonContainerClick1}
      >
        <div className={styles.chat}>Chat</div>
      </div>
    </div>
  );
};

export default Entdecken3;
