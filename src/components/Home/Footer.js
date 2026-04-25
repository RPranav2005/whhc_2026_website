import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../../assets/whhcc.png'; // Using the official WHHC logo

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path, sectionId) => {
    if (location.pathname === "/home" && sectionId) {
      const target = document.getElementById(sectionId);
      if (target) {
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
      if (sectionId && path === "/home") {
        setTimeout(() => {
          const target = document.getElementById(sectionId);
          if (target) {
            const headerOffset = 120;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 150);
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <>
      {/* Cinematic Glow Divider (Global) */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#050505', paddingTop: '40px' }}>
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 50, 50, 0.8), transparent)',
          boxShadow: '0 0 15px rgba(255, 50, 50, 0.3)'
        }} />
      </div>

      <footer style={{
        backgroundColor: '#000',
        padding: '30px 0 40px 0',
        marginTop: '0',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
        zIndex: 2,
      }}>
        <Container>
          <Row className="gy-4">
            {/* Column 1: Branding & Socials */}
            <Col lg={4} md={12}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ marginBottom: '15px', marginLeft: '-8px' }}> {/* Negative margin to compensate for logo whitespace */}
                  <img
                    src={logo}
                    alt="WHHC Logo"
                    style={{
                      height: '95px',
                      width: 'auto',
                      filter: 'drop-shadow(0 0 15px rgba(255, 50, 50, 0.3))',
                      cursor: 'pointer',
                      display: 'block'
                    }}
                    onClick={() => handleNavClick("/home")}
                  />
                </div>
                <p style={{
                  color: '#aaa',
                  fontSize: '15px',
                  lineHeight: '1.7',
                  marginBottom: '25px',
                  maxWidth: '400px',
                  textAlign: 'left'
                }}>
                  White Hat Hackers Club : Securing the cyber world one byte at a time at SRM Vadapalani.
                </p>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {[
                    { icon: <FaInstagram />, link: "https://www.instagram.com/whhc.srm.vdp/" },
                    { icon: <FaFacebook />, link: "https://www.facebook.com/WHHC.SRM/" },
                    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/white-hat-hackers-club-638389212/" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        fontSize: '18px'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 50, 50, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 50, 50, 0.4)';
                        e.currentTarget.style.color = '#ff3232';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Col>

            {/* Column 2: Quick Links */}
            <Col lg={3} md={6}>
              <div style={{ textAlign: 'left' }}>
                <h6 style={{ color: '#ff3232', fontWeight: '800', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>QUICK LINKS</h6>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { name: 'Home', path: '/home' },
                    { name: 'About', path: '/home', section: 'about' },
                    { name: 'Events', path: '/photogallery' },
                    { name: 'The Crew', path: '/team' },
                    { name: "Technozarre'26", path: '/technozarre' }
                  ].map((link, i) => (
                    <li key={i} style={{ marginBottom: '12px' }}>
                      <div
                        onClick={() => handleNavClick(link.path, link.section)}
                        style={{
                          color: '#ddd',
                          textDecoration: 'none',
                          fontSize: '15px',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.color = '#ff3232'; e.currentTarget.style.transform = 'translateX(5px)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.color = '#ddd'; e.currentTarget.style.transform = 'translateX(0)'; }}
                      >
                        <span style={{ color: '#ff3232', marginRight: '10px' }}>•</span> {link.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            {/* Column 3: Map */}
            <Col lg={5} md={6}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 50, 50, 0.2)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                height: '200px'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.816628835069!2d80.20815181156543!3d13.0473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e746409951%3A0xc391b7d5f0e13768!2sSRM%20University%2C%20Vadapalani%20Campus!5e0!3m2!1sen!2sin!4v1713886000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SRM Vadapalani Map"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;