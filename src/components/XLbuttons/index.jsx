import style from "./style.module.css";

function XLbuttons(props) {
  const { innerText } = props;
  return (
    <div>
      <button className={style.XLbuttons}>{innerText}</button>
    </div>
  );
}

export default XLbuttons;
