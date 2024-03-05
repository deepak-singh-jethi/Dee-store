import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="bg-gray-800 text-white p-4 fixed w-full z-50 "
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, stiffness: 200 }}>
      <nav className="container mx-auto">
        <ul className="flex items-center justify-between">
          <NavLink to="" className="text-2xl font-bold font-mono">
            Logo
          </NavLink>

          <li className="md:hidden cursor-pointer" onClick={handleToggleMenu}>
            {isMenuOpen ? (
              <span className="text-2xl">&#10006;</span>
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
          </li>
          {/* Additional menu items and close button for medium and larger screens */}
          <div className="hidden md:flex items-center w-1/2 justify-around">
            <NavLink
              to="profile"
              className="cursor-pointer py-2 text-2xl hover:bg-slate-500 font-mono"
              onClick={closeMenu}>
              Profile
            </NavLink>
            <NavLink
              to="shop"
              className="cursor-pointer py-2 text-2xl font-mono"
              onClick={closeMenu}>
              Shop
            </NavLink>
            <NavLink
              to="about"
              className="cursor-pointer py-2 text-2xl font-mono"
              onClick={closeMenu}>
              About
            </NavLink>
          </div>
        </ul>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="md:hidden fixed inset-0 bg-gray-800 p-4 z-50">
            {/* Mobile menu items */}
            <motion.ul className="text-center flex flex-col mt-10">
              <NavLink
                to="profile"
                className="py-2 text-xl mt-6 border rounded-lg border-cyan-50 font-mono"
                onClick={closeMenu}>
                Profile
              </NavLink>
              <NavLink
                to="shop"
                className="py-2 text-xl mt-6 border rounded-lg border-cyan-50 font-mono"
                onClick={closeMenu}>
                Shop
              </NavLink>
              <NavLink
                to="about"
                className="py-2 text-xl mt-6 border rounded-lg border-cyan-50 font-mono"
                onClick={closeMenu}>
                About
              </NavLink>
            </motion.ul>
            {/* Close button for mobile screens */}
            <div
              className="absolute top-4 right-4 cursor-pointer text-2xl text-center"
              onClick={closeMenu}>
              &times;
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;
