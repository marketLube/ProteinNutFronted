import { useSelector } from "react-redux";
import { HeaderBg, StyledHeader } from "../../UI/MainComponents/StyledHeader";
import Logo from "../../Utils/Logo/Logo";
import HeaderButtonsContainer from "./HeaderButtonsContainer";
import styles from "./Header.module.css";
import { Navbar } from "../../Component/Navbar";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const { isHome } = useSelector((state) => state.general);
  return (
    <>
      <HeaderBg $isHome={isHome} />
      <StyledHeader $isHome={isHome}>
        <div className={styles.headerText}>
          <Link to="/shop" className={styles.headerLinks}>
            Shop
          </Link>

          <a className={styles.headerLinks}>Order</a>
        </div>
        <Link to="/">
          <Logo />
        </Link>
        <div className={styles.headerRight}>
          <a className={styles.headerLinks}></a>
          <a className={styles.headerLinks}></a>
          <HeaderButtonsContainer />
        </div>
      </StyledHeader>
      <Navbar />
    </>
  );
}

export default Header;
