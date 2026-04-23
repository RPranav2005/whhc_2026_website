import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navigation.css";
import whhcLogo from "../assets/logo.png"; // Using existing logo

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path, sectionId) => {
    if (location.pathname === "/home" && sectionId) {
      const target = document.getElementById(sectionId);
      if (target) {
        // Offset for fixed header
        const headerOffset = 120;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        return;
      }
    }

    if (path) {
      navigate(path);
      // Ensure we scroll to top on page change
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {/* Capsule Navigation */}

      <div className="whhc-logo-top-left" onClick={() => handleNavClick("/home")}>
        <img src={require("../assets/whhcc.png")} alt="WHHC Logo" />
      </div>

      <div className="navbar-container">
        <nav className="nav-capsule">
          <span className="nav-item" onClick={() => handleNavClick("/home")}>Home</span>
          <span className="nav-item" onClick={() => handleNavClick("/home", "about")}>About</span>
          <span className="nav-item" onClick={() => handleNavClick("/photogallery")}>Events</span>
          <span className="nav-item" onClick={() => handleNavClick("/team")}>The Crew</span>
          <span className="nav-item" onClick={() => handleNavClick("/technozarre")}>Technozarre'26</span>
        </nav>

      </div>
    </>
  );
};

export default Navigation;
