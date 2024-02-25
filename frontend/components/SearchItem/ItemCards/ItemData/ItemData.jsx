import style from "./ItemData.module.scss";
import { LiaShippingFastSolid } from "react-icons/lia";


export default function ItemData(props) {
  return (
    <div className={style.itemData}>
      <div className={style.priceShippingContainer}>
        <span>
          {Number(props.amount).toLocaleString("es-AR", {
            style: "currency",
            currency: props.currency,
          })}
        </span>
        { props.shipping ? (
          <LiaShippingFastSolid className={style.freeShipping}/>
        ):(
          null
        )}
      </div>
      <h2>{props.title}</h2>
    </div>
  );
}
