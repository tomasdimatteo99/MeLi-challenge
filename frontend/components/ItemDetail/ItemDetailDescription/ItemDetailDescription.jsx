import style from "./ItemDetailDescription.module.scss";

export default function ItemDetailDescription( prop ) {
  return (
    <div className={style.descriptionStyle}>
      <div className={style.descriptionTitleContainer}>
        <span>Descripción del producto</span>
      </div>
      <div className={style.descriptionContainer}>
        <p>{prop.description}</p>
      </div>
    </div>
  );
}