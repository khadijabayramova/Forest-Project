import style from "./style.module.css";
import Cards from "../../components/cards/index.jsx";

function CardsPage() {
  return (
    <div className={style.CardsPage}>
      <h1>Public relations and education of forest owners</h1>
      <div className={style.AllCards}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default CardsPage;
