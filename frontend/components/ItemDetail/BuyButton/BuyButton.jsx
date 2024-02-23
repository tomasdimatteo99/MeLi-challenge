import style from './BuyButton.module.scss';

export default function BuyButton() {
  return (
    <div className={style.buttonStyle}>
      <button>Comprar</button>
    </div>
  );
}