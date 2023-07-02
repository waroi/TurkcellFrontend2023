import styles from "./banner.module.css";
import Button from "../Shared/Button";
import image from "../../assets/login.png";

const Banner = () => {
  return (
    <>
      <div className={`${styles.banner} p-0`}>
        <div className={`${styles.rectangle} ${styles.rec1}`} />
        <div className={`${styles.rectangle} ${styles.rec2}`} />
        <div className={`${styles.rectangle} ${styles.rec3}`} />
        <div className={`${styles.rectangle} ${styles.rec4}`} />
      </div>
      <div className="w-100 vh-100 container">
        <div className="row justify-content-lg-between justify-content-center align-items-center h-100 w-100">
          <div className="col-lg-6 col-sm-12 z-1">
            <p className={styles.title1}>One more friend</p>
            <p className={styles.title2}>Thousands more fun!</p>
            <p className="w-75">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <Button>Explore Now</Button>
          </div>
          <div className="col-lg-6 col-sm-12 z-1">
            <img className="img-fluid" src={image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
