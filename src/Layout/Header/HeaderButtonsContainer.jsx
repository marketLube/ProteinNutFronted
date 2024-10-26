import { motion } from "framer-motion";
import { RoundButton } from "../../UI/Buttons";
import styles from "./HeaderButtonsContainer.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function HeaderButtonsContainer() {
  const { isLoggedIn, user } = useSelector((state) => state.general);
  const endpoint = isLoggedIn ? "/login" : "/myaccount";

  console.log(user, "user");

  return (
    <div className={styles.headerBtnContainer}>
      <Link to="/myaccount">
        <motion.div
          className="your-class-name"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <RoundButton>
            <FaRegUserCircle fontSize="2rem" />
          </RoundButton>
          {/* <MdOutlineShoppingCart /> */}
          {/* <div style={{borderRadius:"50%",backgroundColor:"green",width:"10rem",height:"10rem"}}></div> */}
        </motion.div>
      </Link>
      <Link to="cartpage">
        <motion.div
          className="your-class-name"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <RoundButton>
            <MdOutlineShoppingCart fontSize="2rem" />
          </RoundButton>
        </motion.div>
      </Link>
    </div>
  );
}

export default HeaderButtonsContainer;
