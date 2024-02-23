import SearchBar from "./SearchBar/SearchBar"
import Logo from "./Logo/Logo";
import style from './Navbar.module.scss';

export const Navbar = async() => {

  return (
    <nav className={style.navbarContainer}>
      <div className={style.contentContainer}>
        <div className={style.logoContainer}>
          <Logo/>
        </div>
        <div className={style.searchBarContainer}>
          <SearchBar/>
        </div>
      </div>
    </nav>
  );

};
