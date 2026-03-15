"use client";
import About from "@/components/About";
import Aside from "@/components/Aside";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const PersonalPortfolio = () => {
  const [activeRoute, setActiveRoute] = useState("about");
  const [lightMode, setLightMode] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false); // Ensure no flicker

  // Apply theme based on state (safe when document/body not yet available)
  const applyTheme = (isLightMode) => {
    if (typeof document === "undefined" || !document.body) return;
    const theme = isLightMode ? "light" : "dark";
    document.body.setAttribute("data-theme", theme);
  };

  // Toggle theme and save preference in localStorage
  const toggleTheme = () => {
    const newLightMode = !lightMode;
    setLightMode(newLightMode);
    applyTheme(newLightMode);
    try {
      localStorage.setItem("theme", newLightMode ? "light" : "dark");
    } catch (_) {}
  };

  // Load theme preference on component mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      const isLightMode = savedTheme === "light";
      setLightMode(isLightMode);
      applyTheme(isLightMode);
    } catch (_) {}
    setIsHydrated(true);
  }, []);

  return (
    <>
      <main>
        <Aside />
        <div className="main-content mt-[100px]">
          <span className="red-circle"></span>
          <span className="purple-circle"></span>
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item" onClick={() => setActiveRoute("about")}>
                <button className={`navbar-link ${activeRoute === "about" ? "active" : ""}`}>
                  About
                </button>
              </li>

              <li className="navbar-item" onClick={() => setActiveRoute("resume")}>
                <button className={`navbar-link ${activeRoute === "resume" ? "active" : ""}`}>
                  Resume
                </button>
              </li>

              <li className="navbar-item" onClick={() => setActiveRoute("portfolio")}>
                <button className={`navbar-link ${activeRoute === "portfolio" ? "active" : ""}`}>
                  Portfolio
                </button>
              </li>

              <li className="navbar-item" onClick={() => setActiveRoute("contact")}>
                <button className={`navbar-link ${activeRoute === "contact" ? "active" : ""}`}>
                  Contact
                </button>
              </li>
            </ul>
            <motion.button
              className="p-2 rounded-full focus:outline-none transition duration-300"
              onClick={toggleTheme}
              whileTap={{ rotate: 360 }}
            >
              {lightMode ? <FaMoon className="moon" /> : <FaSun className="sun" />}
            </motion.button>
          </nav>
          {activeRoute === "about" ? <About /> : ""}
          {activeRoute === "resume" ? <Resume /> : ""}
          {activeRoute === "portfolio" ? <Portfolio /> : ""}
          {activeRoute === "contact" ? <Contact /> : ""}
        </div>
      </main>
    </>
  );
};

export default PersonalPortfolio;
