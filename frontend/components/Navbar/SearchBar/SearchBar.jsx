import { CiSearch } from "react-icons/ci";
//import '../styles/sass/globals.scss';
import style from './SearchBar.module.scss';

export const SearchBar = () => {

  return (
      <form action='/items'className={style.SearchBarStyle}>
          <input
            type="text"
            name="search"
            placeholder="Nunca dejes de buscar"
            className={style.inputStyle}
          />
          <button type="submit" className={style.buttonStyle}>
            <CiSearch className={style.icoSize}/>
          </button>
      </form>
  );

}