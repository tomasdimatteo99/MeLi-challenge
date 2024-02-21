import Image from "next/image";
import style from "./ItemImage.module.scss";

export default function ItemImage(props) {
  return (
    <div className={style.itemImg}>
      <Image
        src={props.picture}
        alt={props.title}        
        layout="fill"
        objectFit="contain"
        className={style.ImageStyle}
      />
    </div>
  );
}
