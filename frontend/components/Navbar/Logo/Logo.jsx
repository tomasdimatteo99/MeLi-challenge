import Link from "next/link";
import Image from "next/image";
import style from "./Logo.module.scss";

export default function Logo() {
  return (
    <div>
        <Link href={"/"}>
          <div className={style.imgContainer}>
            <Image
                  src="/logoML.png"
                  alt="Logo de Mercado Libre"
                  fill
                  style={{objectFit:"contain"}}
              />
          </div>
        </Link>
    </div>
  );
}
