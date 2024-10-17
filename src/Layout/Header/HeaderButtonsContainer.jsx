import { motion } from "framer-motion";
import { RoundButton } from "../../UI/Buttons";
import styles from "./HeaderButtonsContainer.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
function HeaderButtonsContainer() {
  return (
    <div className={styles.headerBtnContainer}>
      <motion.div
        className="your-class-name"
        initial={{ scale: 0 }}
        animate={{  scale: 1 }}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <RoundButton>
        <FaRegUserCircle fontSize="2rem"  /> 
        </RoundButton>
        {/* <MdOutlineShoppingCart /> */}
        {/* <div style={{borderRadius:"50%",backgroundColor:"green",width:"10rem",height:"10rem"}}></div> */}
      </motion.div>
      <motion.div
        className="your-class-name"
        initial={{ scale: 0 }}
        animate={{  scale: 1 }}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <RoundButton>
        <MdOutlineShoppingCart fontSize="2rem"/> 
        </RoundButton>
      </motion.div>
    </div>
  );
}

export default HeaderButtonsContainer;
