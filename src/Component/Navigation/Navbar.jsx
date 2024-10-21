import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import Logo from "../../Utils/Logo/Logo";
import styles from "./Navbar.module.css";
import { FaGripLines } from "react-icons/fa6";

const navItems = ["Shop", "Community", "Contact", "Profile", "Cart"];

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height + 160}px at calc(100% - 40px) 40px)`, // Adjusted for right
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at calc(100% - 40px) 40px)", // Adjusted for right
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <div className={styles.naavbar}>
      <Logo />

      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={1000}
        ref={containerRef}
        style={{}}
      >
        <motion.div
          className="background"
          variants={sidebar}
          style={{
            position: "fixed",
            top: 0,
            right: 0, // Changed from left to right
            bottom: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
          }}
        >
          {" "}
          <motion.ul
            variants={navVariants}
            style={{
              padding: "25px",
              position: "absolute",
              top: "100px",
              width: "100vw",
              margin: 0,
              display: "flex", // Enable flexbox
              flexDirection: "column", // Stack items in a column
              justifyContent: "center", // Center items vertically
              alignItems: "center",
            }}
          >
            {navItems.map((item, i) => (
              <motion.li
                key={i}
                variants={navItemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  listStyle: "none",
                  marginBottom: "20px",

                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "2rem",
                  textAlign: "center",
                }}
              >
                <div
                  className="icon-placeholder"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "20px",
                  }}
                />
                <div
                  className="text-placeholder"
                  style={{
                    width: "200px",
                    height: "20px",
                    borderRadius: "5px",
                    color: "#43bb0b",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <button
          onClick={() => toggleOpen()}
          style={{
            outline: "none",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            top: "-4px",
            right: "6px", // Changed from left to right
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "transparent",
            display: "flex", // Use flexbox
            justifyContent: "center", // Center horizontally
            alignItems: "center",
          }}
        >
          <FaGripLines size={30} color="#43bb0b" />
        </button>
      </motion.nav>
    </div>
  );
};
