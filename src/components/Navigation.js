import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      // Hide if scrolling down and scrolled more than 100px
      // Always show if scrolling up or at the very top
      if (currentScrollPos < 10) {
        setVisible(true);
      } else {
        setVisible(isScrollingUp);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

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
      <div 
        className="whhc-logo-top-left" 
        onClick={() => handleNavClick("/home")}
        style={{ 
          transform: visible ? 'translateY(0)' : 'translateY(-100px)',
          transition: 'transform 0.4s ease-in-out'
        }}
      >
        <img src={require("../assets/whhcc.png")} alt="WHHC Logo" />
      </div>

      <div 
        className={`navbar-container ${isMenuOpen ? "menu-open" : ""}`}
        style={{ 
          transform: visible ? 'translateY(0)' : 'translateY(-120px)',
          transition: 'transform 0.4s ease-in-out'
        }}
      >
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
