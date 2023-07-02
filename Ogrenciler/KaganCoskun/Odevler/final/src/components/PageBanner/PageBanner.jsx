import Button from "../Shared/Button";
import styles from "./pageBanner.module.css";
import image from "../../assets/login.png";

const PageBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={`${styles.rectangle} ${styles.rec1}`} />
      <div className={`${styles.rectangle} ${styles.rec2}`} />
      <div className={`w-100 container ${styles.content}`}>
        <div
          className={`row justify-content-lg-between justify-content-center align-items-center w-100 h-100 ${styles.cover}`}
        >
          <div className={`col-lg-6 col-sm-12 z-1 ${styles["img-container"]}`}>
            <img className={styles.image} src={image} />
          </div>
          <div
            className={`d-flex flex-column col-lg-6 col-sm-12 z-1 align-items-end text-end ${styles.wrapper}`}
          >
            <p className={styles.title1}>One more friend</p>
            <p className={styles.title2}>Thousands more fun!</p>
            <p className="m-0 pb-3">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <Button>Explore Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
