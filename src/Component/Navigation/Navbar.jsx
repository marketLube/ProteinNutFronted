import React, { useRef, useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../../Utils/Logo/Logo";
import styles from "./Navbar.module.css";
import { FaGripLines } from "react-icons/fa6";

const navItems = [
  { name: "Shop", id: "grid" },
  { name: "Community", id: "community" },
  { name: "Contact", id: "contact" },
  { name: "Profile", id: "profile" },
  { name: "Cart", id: "cart" }
];

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height + 160}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at calc(100% - 40px) 40px)",
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
  const [hasScrolled, setHasScrolled] = useState(false);
  const containerRef = useRef(null);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // You can adjust this value (50) to change when the background appears
      setHasScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollAndClose = (id) => {
    toggleOpen();
    setTimeout(() => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const handleNavClick = (id) => {
    if (id === "profile") {
      toggleOpen();
      setTimeout(() => {
        window.location.href = '/myaccount';
      }, 300);
      return;
    }
    if (id === "cart") {
      toggleOpen();
      setTimeout(() => {
        window.location.href = '/cartpage';
      }, 300);
      return;
    }
    handleScrollAndClose(id);
  };

  return (
    <div 
      className={styles.naavbar}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background-color 0.3s ease',
        backgroundColor: hasScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: hasScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
        padding: '10px 20px',
      }}
    >
      <Link to={'/'}><Logo /></Link>

      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={1000}
        ref={containerRef}
      >
        <motion.div
          className="background"
          variants={sidebar}
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
          }}
        >
          <motion.ul
            variants={navVariants}
            style={{
              padding: "25px",
              position: "absolute",
              top: "100px",
              width: "100vw",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
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
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      width: "200px",
                      height: "20px",
                      borderRadius: "5px",
                      color: "#43bb0b",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "2rem",
                    }}
                  >
                    {item.name}
                  </button>
                </Link>
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
            right: "6px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaGripLines size={30} color={hasScrolled ? "#43bb0b" : "#43bb0b"} />
        </button>
      </motion.nav>
    </div>
  );
};