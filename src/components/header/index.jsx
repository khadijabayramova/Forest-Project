import styles from "./style.module.css";
import Logo from "./imgs/default-logo.png";
import Hamburger from "./imgs/hamburger.svg";
import Hero from "../../pages/hero";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MainPage from "../../pages/mainPage/index";

function Header() {
  const Navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.Header}>
      <img
        onClick={() => {
          Navigate("/");
        }}
        className={styles.Logo}
        src={Logo}
        alt="Logo"
      />

      <ul className={open ? styles.OpenNav : styles.CloseNav}>
        <li className={styles.closeHamburger}>
          <a
            onClick={() => {
              setOpen(!open);
            }}
          >
            X
          </a>
        </li>

        <li>
          <a
            onClick={() => {
              Navigate("/");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              Navigate("/About");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              Navigate("/CharityCards");
            }}
          >
            Charity
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              Navigate("/Contact");
            }}
          >
            Contact{" "}
          </a>
        </li>
        <li>
          <a onClick={() => {
              Navigate("/Info");
            }}>Info </a>
        </li>
      </ul>

      <img
        onClick={() => {
          setOpen(!open);
        }}
        className={styles.Hamburger}
        src={Hamburger}
        alt="Hamburger"
      />
    </div>
  );
}

export default Header;
