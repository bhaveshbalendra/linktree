import hbo from "../../assets/images/carousel/hbo.png";
import comedyCentral from "../../assets/images/carousel/comedy-central.png";
import funkynutmeg from "../../assets/images/carousel/funkynutmeg.png";
import laclippers from "../../assets/images/carousel/laclippers.png";
import pharrell from "../../assets/images/carousel/pharrell.png";
import selenaGomez from "../../assets/images/carousel/selena-gomez.png";
import tonyhawk from "../../assets/images/carousel/tonyhawk.png";
import styles from "./Carousel.module.css";

function Carousel() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.wrapper}>
        <div className={styles.carousel}>
          <img className={styles.item} src={hbo} alt="hbo" />
          <img
            className={styles.item}
            src={comedyCentral}
            alt="comedy central"
          />
          <img className={styles.item} src={pharrell} alt="pharrell" />
          <img className={styles.item} src={tonyhawk} alt="tony hawk" />
          <img className={styles.item} src={laclippers} alt="la clippers" />
          <img className={styles.item} src={selenaGomez} alt="selena gomez" />
          <img className={styles.item} src={funkynutmeg} alt="funkynutmeg" />

          <img className={styles.item} src={hbo} alt="hbo" />
          <img
            className={styles.item}
            src={comedyCentral}
            alt="comedy central"
          />
          <img className={styles.item} src={pharrell} alt="pharrell" />
          <img className={styles.item} src={tonyhawk} alt="tony hawk" />
          <img className={styles.item} src={laclippers} alt="la clippers" />
          <img className={styles.item} src={selenaGomez} alt="selena gomez" />
          <img className={styles.item} src={funkynutmeg} alt="funkynutmeg" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
