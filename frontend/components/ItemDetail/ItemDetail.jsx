import BuyButton from "./BuyButton/BuyButton";
import ItemDetailData from "./ItemDetailData/ItemDetailData";
import ItemDetailDescription from "./ItemDetailDescription/ItemDetailDescription";
import ItemDetailImage from "./ItemDetailImage/ItemDetailImage";
import ItemCategory from "../ItemCategory/ItemCategory";
import style from "./ItemDetail.module.scss"
import { getCategories } from "../../app/api/getCategories";

export default async function ItemDetail( item ) {
  const id = item.item.items.category_id;
  const categories = await getCategories( id );
  return (
    <div className={style.divContainer}>
      <ItemCategory itemsCategories={categories.categories}/>
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
    </div>
  );
}