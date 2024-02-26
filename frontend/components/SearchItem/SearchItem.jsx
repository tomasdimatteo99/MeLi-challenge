import style from "./SearchItem.module.scss";
import ItemCards from "./ItemCards/ItemCards";
import ItemCategory from "../ItemCategory/ItemCategory";

export default function SearchItem( props ) {
  return (
    <section className={style.itemsContainer}>
        <ItemCategory itemsCategories={props.categories}/>
        <ItemCards items={props.items}/>
    </section>
  );
}