import Link from "next/link";
import Image from "next/image";
import style from './Navbar.module.scss';
import { SearchBar } from "./SearchBar/SearchBar"

export const Navbar = async() => {

  return (
    <nav className={style.NavbarStyle}>
      <div className={style.contentContainer}>
        <div className={style.LinkStyle}>
          <Link href={'/'}>
            <Image
              src="/logoML.png"
              width={100}
              height={100}
              alt="Logo de Mercado Libre"
            />
          </Link>
        </div>
        <div className={style.barStle}>
          <SearchBar/>
        </div>
      </div>
    </nav>
  );

};
