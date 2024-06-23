import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Entdecken2.module.css";

const Entdecken2 = () => {
  const navigate = useNavigate();

  const onEntdecken3ContainerClick = useCallback(() => {
    navigate("/entdecken4");
  }, [navigate]);

  const onCloseButtonIconClick = useCallback(() => {
    navigate("/entdecken1");
  }, [navigate]);

  return (
    <div className={styles.entdecken3} onClick={onEntdecken3ContainerClick}>
      <img className={styles.img56161Icon} alt="" src="/img-5616-1@2x.png" />
      <div className={styles.kameraFrame} />
      <div className={styles.header}>
        <b className={styles.dauerausstellung}>Dauerausstellung</b>
      </div>
      <img
        className={styles.closeButtonIcon}
        alt=""
        src="/closebutton.svg"
        onClick={onCloseButtonIconClick}
      />
    </div>
  );
};

export default Entdecken2;
