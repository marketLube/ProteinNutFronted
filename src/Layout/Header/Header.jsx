import { useSelector } from "react-redux";
import { HeaderBg, StyledHeader } from "../../UI/MainComponents/StyledHeader";
import Logo from "../../Utils/Logo/Logo";
import HeaderButtonsContainer from "./HeaderButtonsContainer";
import styles from "./Header.module.css";
import { Navbar } from "../../Component/Navigation/Navbar";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  const { isHome } = useSelector((state) => state.general);

  const scrollToTarget = (id) => {
    return () => {
      // Get the target element by its ID and scroll into view
      const targetElement = document.getElementById(id);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };
  };
  console.log(isHome, "iiiiiiiiiiiiiii");

  return (
    <>
      <HeaderBg $isHome={isHome} />
      <StyledHeader $isHome={isHome}>
        <div className={styles.headerText}>
          <Link to={"/"}>
            <button
              onClick={scrollToTarget("grid")}
              className={`btn ${styles.headerLinks}`}
            >
              Shop
            </button>
          </Link>

          <button
            onClick={scrollToTarget("community")}
            className={`btn ${styles.headerLinks}`}
          >
            Community
          </button>
        </div>
        <Link to="/">
          <Logo />
        </Link>
        <div className={styles.headerRight}>
          <a className={styles.headerLinks}></a>
          <button
            onClick={scrollToTarget("contact")}
            className={`btn ${styles.headerLinks}`}
          >
            Contact
          </button>
          <HeaderButtonsContainer />
        </div>
      </StyledHeader>
      {/* <Navbar /> */}
    </>
  );
}

export default Header;
