import styles from "./Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee Shop </span>
        <span className={styles.title2}>Explorer</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops</p>
      <button className={styles.button} onClick={props.handleOnClick}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
