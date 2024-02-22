import Image from "next/image";
import style from "./ItemImage.module.scss";

export default function ItemImage(props) {
  return (
    <div className={style.itemImg}>
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
