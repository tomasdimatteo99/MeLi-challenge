import BuyButton from "./BuyButton/BuyButton";
import ItemDetailData from "./ItemDetailData/ItemDetailData";
import ItemDetailDescription from "./ItemDetailDescription/ItemDetailDescription";
import ItemDetailImage from "./ItemDetailImage/ItemDetailImage";
import ItemCategory from "../ItemCategory/ItemCategory";
import style from "./ItemDetail.module.scss"
import { getCategories } from "../../app/utils/getCategories";

export default async function ItemDetail( props ) {
  const id = props.item.category_id;
  const categories = await getCategories( id );
  return (
    <div className={style.divContainer}>
      <ItemCategory itemsCategories={categories.categories}/>
      <section className={style.itemDetailContainer}>
        <div className={style.leftColumn}>
          <ItemDetailImage
            picture={props.item.picture}
            title={props.item.title}
          />
          <ItemDetailDescription
            description={props.description}
          />
        </div>
        <div className={style.rightColumn}>
          <ItemDetailData
            condition={props.item.condition}
            soldQuantity={props.item.sold_quantity}
            title={props.item.title}
            currency={props.item.price.currency}
            amount={props.item.price.amount}
          />
          <BuyButton/>
        </div>
      </section>
    </div>
  );
}