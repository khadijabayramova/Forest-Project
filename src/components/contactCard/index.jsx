import styles from "./style.module.css"

function ContactCard(props){
const {name,address} = props
  return(
    <div className={styles.contactCard}>
      <input placeholder={name} type="text" />
      <input placeholder={address} type="email" />
    </div>
  )
}

export default ContactCard