import style from "./ItemCard.module.scss";
import ItemData from "./ItemData/ItemData";
import ItemImage from "./ItemImage/ItemImage";
import ItemLocation from "./ItemLocation/ItemLocation";

export default function ItemCard(props) {
  return (
    <div className={style.itemCardContainer}>
      {props.items.map((item, j) => (
        <div key={item.id} className={style.itemCard}>
          <ItemImage
          picture={item.picture}
          title={item.title}
          />
          <ItemData
            currency={item.price.currency}
            amount={item.price.amount}
            title={item.title}
          />
          <ItemLocation/>
        </div>
      ))}
    </div>
  );
}
