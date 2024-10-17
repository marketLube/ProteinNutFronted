import { useSelector } from "react-redux";
import { HeaderBg, StyledHeader } from "../../UI/MainComponents/StyledHeader";
import Logo from "../../Utils/Logo/Logo";
import HeaderButtonsContainer from "./HeaderButtonsContainer";
import styles from "./Header.module.css";
import { Navbar } from "../../Component/Navbar";
import { Link } from "react-router-dom";

function Header() {
  const { isHome } = useSelector((state) => state.general);
  return (
    <>
      <HeaderBg $isHome={isHome} />
      <StyledHeader $isHome={isHome}>
        <div className={styles.headerText}>
          <a className={styles.headerLinks}>Shop</a>
          <a className={styles.headerLinks}>Where to buy</a>
        </div>
        <Logo />
        <div className={styles.headerRight}>
          <a className={styles.headerLinks}>Recipies</a>
          <a className={styles.headerLinks}>Learn</a>
          <HeaderButtonsContainer />
        </div>
      </StyledHeader>
      <Navbar/>
    </>
  );
}

export default Header;
