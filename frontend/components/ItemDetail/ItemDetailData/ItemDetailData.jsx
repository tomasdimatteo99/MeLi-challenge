import style from './ItemDetailData.module.scss'

export default function ItemDetailData(props) {
  return (
    <div className={style.dataContainer}>
      <div className={style.conditionContainer}>
        <h3>
          {props.condition}
          {props.soldQuantity !== 0 ? (
            <>{" - "}{props.soldQuantity}{" vendidos"}</>
          ) : ( null 
          )}
        </h3>
      </div>
      <div className={style.titleContainer}>
        <h1>
          {props.title}
        </h1>
      </div>
      <div className={style.amountContainer}>
        <h2>
          {Number(props.amount).toLocaleString("es-AR",{
            style: "currency",
            currency: props.currency
          })}
        </h2>
      </div>
    </div>
  );
}