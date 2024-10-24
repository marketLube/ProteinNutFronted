import { useSelector } from "react-redux";
import { HeaderBg, StyledHeader } from "../../UI/MainComponents/StyledHeader";
import Logo from "../../Utils/Logo/Logo";
import HeaderButtonsContainer from "./HeaderButtonsContainer";
import styles from "./Header.module.css";
import { Navbar } from "../../Component/Navigation/Navbar";
import { Link } from "react-router-dom";
import { scrollToTarget } from "../../Helper/scrollToTarget";

function Header() {
  const { isHome, isCart } = useSelector((state) => state.general);
const isTrue = isCart || isHome;
  return (
    <>
      <HeaderBg $isHome={isTrue}  />
      <StyledHeader $isHome={isTrue}>
        <div className={styles.headerText}>
          <Link to={"/"}>
            <button
              onClick={scrollToTarget("grid")}
              className={`btn ${styles.headerLinks}`}
            >
              Shop
            </button>
          </Link>

          <Link to={"/"}>
            <button
              onClick={scrollToTarget("community")}
              className={`btn ${styles.headerLinks}`}
            >
              Community
            </button>
          </Link>
        </div>
        <Link to="/">
          <Logo />
        </Link>

        <div className={styles.headerRight}>
          <a className={styles.headerLinks}></a>

          <Link>
            <button
              onClick={scrollToTarget("contact")}
              className={`btn ${styles.headerLinks}`}
            >
              Contact
            </button>
          </Link>

          <HeaderButtonsContainer />
        </div>
      </StyledHeader>
      <Navbar />
    </>
  );
}

export default Header;
