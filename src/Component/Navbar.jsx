import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FaGripLines } from "react-icons/fa6";
import Logo from '../Utils/Logo/Logo';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
   "Home", "Where to by", "Shop" ,"Recipies","Learn"
]
export const Navbar = () => {

   const [isClicked, setIsClicked] = useState(false)

   const handleOpen = () => {
      setIsClicked(true)
   }
   const handleClose = () => {
      setIsClicked(false);
   }

   const [isOpen, setIsOpen] = useState(false);


   return (
      <>
         <div className={styles.naavbar}>
            <div><Logo /></div>


            <AnimatePresence>
               {isOpen && (
                  <motion.div
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -10 }}
                     transition={{ duration: 0.2 }}
                  >
                     {isOpen &&
            <div className={styles.datas}>
               {navItems.map((item) => (
                  <div>
                     <h1>{item}</h1>
                  </div>
               ))}
            </div>}
                  </motion.div>
               )}
            </AnimatePresence>

            <button onClick={() => setIsOpen(!isOpen)} className={styles.drpdown} ><FaGripLines /></button>
            {/* {  !isClicked?
        (<button className={styles.drpdown} onClick={handleOpen}><FaGripLines /></button>):(<button className={styles.drpdown} onClick={handleClose}><IoIosCloseCircleOutline /></button>) 
    } */}



         </div>
         {
            isClicked &&
            <div className={styles.datas}>
               {navItems.map((item) => (
                  <div>
                     <h1>{item}</h1>
                  </div>
               ))}
            </div>
         }
      </>
   )
}
