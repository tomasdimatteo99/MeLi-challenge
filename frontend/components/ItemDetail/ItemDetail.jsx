import BuyButton from "./BuyButton/BuyButton";
import ItemDetailData from "./ItemDetailData/ItemDetailData";
import ItemDetailDescription from "./ItemDetailDescription/ItemDetailDescription";
import ItemDetailImage from "./ItemDetailImage/ItemDetailImage";
import style from "./ItemDetail.module.scss"

export default function ItemDetail( item ) {
  return (
    <section className={style.itemDetailContainer}>
      <div className={style.leftColumn}>
        <ItemDetailImage
          picture={item.item.items.picture}
          title={item.item.items.title}
        />
        <ItemDetailDescription
          description={item.item.description}
        />
      </div>
      <div className={style.rightColumn}>
        <ItemDetailData
          condition={item.item.items.condition}
          soldQuantity={item.item.items.sold_quantity}
          title={item.item.items.title}
          currency={item.item.items.price.currency}
          amount={item.item.items.price.amount}
        />
        <BuyButton/>
      </div>
    </section>
  );
}