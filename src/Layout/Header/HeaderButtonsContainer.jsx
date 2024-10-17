import { motion } from "framer-motion";
import { RoundButton } from "../../UI/Buttons";
import styles from "./HeaderButtonsContainer.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function HeaderButtonsContainer() {
  const isLoggin = true;

  return (
    <div className={styles.headerBtnContainer}>
      <Link to={isLoggin ? "Myaccount" : "login"}>
        <motion.div
          className="your-class-name"
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <RoundButton />
        </motion.div>
      </Link>
      <Link to="cartpage">
        <motion.div
          className="your-class-name"
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <RoundButton />
        </motion.div>
      </Link>
    </div>
  );
}

export default HeaderButtonsContainer;
