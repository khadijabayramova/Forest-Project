import styles from "./style.module.css";

function Cards() {
  return (
    <div className={styles.Cards}>
      <div className={styles.innerContent}>
       <input className={styles.input} type="checkbox" />
       <p>
        Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Dui ut
        ornare lectus sit. Tincidunt lobortis feugiat vivamus at augue eget
        arcu. Vulputate mi sit amet mauris commodo
       </p>  
      </div>
     
    </div>
  );
}

export default Cards;
