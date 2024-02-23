import style from "./ItemData.module.scss";

export default function ItemData(props) {
  return (
    <div className={style.itemData}>
      <span>
        {Number(props.amount).toLocaleString("es-AR", {
          style: "currency",
          currency: props.currency,
        })}
      </span>
      <h2>{props.title}</h2>
    </div>
  );
}
