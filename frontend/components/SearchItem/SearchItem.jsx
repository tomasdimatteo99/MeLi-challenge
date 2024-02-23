import style from "./SearchItem.module.scss";
import ItemCards from "./ItemCards/ItemCards";
import ItemCategory from "../ItemCategory/ItemCategory";

export function generateMetadata(props) { 
  return {
    title: props,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg'],
    // },
  }
}

export default function SearchItem( items ) {
  const metaData = generateMetadata(items.items.items.title);
  return (
    <section className={style.itemsContainer}>
        
        <ItemCategory itemsCategories={items.items.categories}/>
        <ItemCards items={items.items.items}/>
    </section>
  );
}