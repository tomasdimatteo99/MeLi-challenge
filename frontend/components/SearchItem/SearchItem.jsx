import style from "./SearchItem.module.scss";
import ItemCards from "./ItemCards/ItemCards";
import ItemCategory from "./ItemCategory/ItemCategory";

export default function SearchItem( items ) {
  return (
    <section className={style.itemsContainer}>
        <ItemCategory itemsCategories={items.items.categories}/>
        <ItemCards items={items.items.items}/>
    </section>
  );
}