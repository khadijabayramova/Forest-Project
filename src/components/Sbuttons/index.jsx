import styles from "./style.module.css";

function Sbuttons(props) {
  const { text } = props;
  return (
    <div>
      <button className={styles.Sbuttons}>{text}</button>
    </div>
  );
}

export default Sbuttons;
