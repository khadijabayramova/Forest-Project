import styles from "./style.module.css";
function Hero() {
  return (
    <div className={styles.Herocontainer}>
      <div className={styles.contentHero}>
        <div className={styles.greenCircle}></div>
        <h2 className={styles.smallText}>Caring for</h2>
        <h1 className={styles.giantText}>THE FOREST</h1>
      </div>
    </div>
  );
}

export default Hero;
