import Image from "next/image";
import style from './ItemDetailImage.module.scss'

export default function ItemDetailImage(props) {
  return (
    <div className={style.itemDetailImgContainer}>
      <Image
        src={props.picture}
        alt={props.title}
        fill
        style={{objectFit:"contain"}}
        className={style.ImageStyle}
      />
    </div>
  );
}