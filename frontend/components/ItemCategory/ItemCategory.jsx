import style from "./ItemCategory.module.scss";

export default function ItemCategory(props) {
  return (
    <div className={style.categoryContainer}>
      {props.itemsCategories.map((category, i) => (
        <span key={category}>
          {i === props.itemsCategories.length - 1 ? (
            <span className={style.lastCategorySpan}>{category}</span>
          ) : (
            <span>
              {category} {" > "}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
