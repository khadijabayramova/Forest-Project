import styles from "./style.module.css";
import DonateTree from "./imgs/donateTree1.jpg";
import leftBtn from "./imgs/arrow_back_ios_new_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import rightBtn from "./imgs/arrow_forward_ios_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import Sbuttons from "../Sbuttons/index.jsx";
import { useState } from "react";
function CharityCards(props) {
  const { img , title ,desc } = props
  const [count, setCount] = useState(0);
  return (
    <div className={styles.wholedonateCrd}>
      <button  className={styles.leftBtn}>
        <img src={leftBtn} alt="leftbtn" />
      </button>
      <div className={styles.DonationCard}>
        <img src={DonateTree} alt="DonateTree" />
        <h2>Donate A Plant</h2>
        <p>Plants are our future.Let's donate a plant for better future.</p>
        <div className={styles.buyNowbtn}>
          <button
            onClick={() => setCount((count) => Math.max(count - 1, 0))}
            className={styles.lessBtn}
          >
            -
          </button>
          <Sbuttons text={count} />
          <button
            onClick={() => setCount((count) => count + 1)}
            className={styles.moreBtn}
          >
            +
          </button>
        </div>
      </div>
      <button className={styles.rightBtn}>
        <img src={rightBtn} alt="rightbtn" />
      </button>
    </div>
  );
}

export default CharityCards;
