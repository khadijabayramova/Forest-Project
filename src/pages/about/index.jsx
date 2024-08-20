import styles from "./styles.module.css";
import XLbuttons from "../../components/XLbuttons";

function About() {
  return (
    <div className={styles.About}>
      <h1>Biosecurity - caring for the forest</h1>
      <p>
        Sodales neque sodales ut etiam sit amet nisl. Blandit libero volutpat
        sed cras ornare arcu dui vivamus arcu. Luctus venenatis lectus magna
        fringilla urna porttitor rhoncus. Vitae suscipit tellus mauris a. Urna
        neque viverra justo nec ultrices dui sapien.
      </p>
      <XLbuttons innerText={"Learn More"} />
    </div>
  );
}
export default About;
