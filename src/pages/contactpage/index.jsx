import styles from "./style.module.css";
import ContactCard from "../../components/contactCard/index.jsx";
import XLbuttons from "../../components/XLbuttons/index.jsx";

function ContactPage() {
  return (
    <div className={styles.wholeContact}>
      <div className={styles.containerForm}>
        <ContactCard name={"Enter your name"} address={"Enter your email"} />
        <ContactCard
          className={styles.secondInput}
          name={"Enter your number"}
          address={"Confirm your email"}
        />
      </div>
      <XLbuttons innerText={"Submit"} />
    </div>
  );
}

export default ContactPage;
