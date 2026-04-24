import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path, sectionId) => {
    setIsMenuOpen(false); // Close menu on click
    if (location.pathname === "/home" && sectionId) {
      const target = document.getElementById(sectionId);
      if (target) {
        const headerOffset = 120;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        return;
      }
    }

    if (path) {
      navigate(path);
      window.scrollTo(0, 0);
      if (sectionId && path === "/home") {
        setTimeout(() => {
          const target = document.getElementById(sectionId);
          if (target) {
            const headerOffset = 120;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
        }, 300);
      }
    }
  };

  return (
    <>
      <div className="whhc-logo-top-left" onClick={() => handleNavClick("/home")}>
        <img src={require("../assets/whhcc.png")} alt="WHHC Logo" />
      </div>

      <div className={`navbar-container ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`nav-capsule ${isMenuOpen ? "active" : ""}`}>
          <span className="nav-item" onClick={() => handleNavClick("/home")}>Home</span>
          <span className="nav-item" onClick={() => handleNavClick("/home", "about")}>About</span>
          <span className="nav-item" onClick={() => handleNavClick("/home", "crew")}>The Crew</span>
          <span className="nav-item" onClick={() => handleNavClick("/photogallery")}>Events</span>
          <span className="nav-item" onClick={() => handleNavClick("/technozarre")}>Technozarre'26</span>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
