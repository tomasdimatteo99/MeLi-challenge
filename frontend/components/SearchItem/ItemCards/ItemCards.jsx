import Link from "next/link";
import style from "./ItemCard.module.scss";
import ItemData from "./ItemData/ItemData";
import ItemImage from "./ItemImage/ItemImage";
import ItemLocation from "./ItemLocation/ItemLocation";

export default function ItemCard(props) {
  return (
    <div className={style.itemCardContainer}>
      {props.items.map((item, j) => (
        <Link
          href={`/items/${item.id}`}
          key={item.id}
          className={style.itemCard}
        >
            <ItemImage
            picture={item.picture}
            title={item.title}
            />
            <ItemData
              currency={item.price.currency}
              amount={item.price.amount}
              title={item.title}
            />
            <ItemLocation id={item.id}/>
        </Link>
      ))}
    </div>
  );
}
