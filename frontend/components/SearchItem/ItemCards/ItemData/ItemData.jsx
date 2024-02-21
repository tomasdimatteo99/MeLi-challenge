import style from "./ItemData.module.scss";

export default function ItemData(props) {
  return (
    <div className={style.itemData}>
      <span>
        {props.currency} {props.amount}
      </span>
      <h2>{props.title}</h2>
    </div>
  );
}
