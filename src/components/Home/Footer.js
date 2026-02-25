import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgb(0, 0, 0)', padding: '20px 40px',marginTop: '40px' }}>
      <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ textAlign: 'left' }}>
          <h6 style={{ fontWeight: 'bold', marginBottom: '5px', color: 'red', fontSize: 20 }}>
            WHHC
          </h6>
          <p style={{ margin: 0, color: 'white', fontStyle: 'italic' }}>
            SECURING THE CYBER WORLD ONE BYTE AT A TIME
          </p>
        </div>

        <div style={{ textAlign: 'right', marginRight: '20px', display: 'inline-block' }}>
          <h6 style={{ fontWeight: 'bold', marginBottom: '10px', color: 'red', textAlign: 'left', fontSize: 20 }}>QUICK LINKS</h6>
          <div style={{ textAlign: 'left' }}  >
            {/* <p style={{ margin: '0 0 5px' }}>
              <a href="/brainwaveshub" style={{ textDecoration: 'none', color: '#6c757d' }}>Brainwaves Hub</a>
            </p> */}
            <p style={{ margin: '0 0 5px' }}>
              <a href="/technozarre" style={{ textDecoration: 'none', color: 'red',fontSize: '18px' }} >Technozarre2k26</a>
            </p>

            <p style={{ margin: '0 0 5px' }}>
              <a href="/photogallery" style={{ textDecoration: 'none', color: '#6c757d' }} onMouseOver={(e) => e.target.style.color = 'rgb(228, 37, 37)'} onMouseOut={(e) => e.target.style.color = '#6c757d'}>Events</a>
            </p>
            <p style={{ margin: 0 }}>
              <a href="/team" style={{ textDecoration: 'none', color: '#6c757d' }} onMouseOver={(e) => e.target.style.color = 'rgb(228, 37, 37)'} onMouseOut={(e) => e.target.style.color = '#6c757d'}>Team</a>
            </p>
          </div>
        </div>
      </section>

      <div>
        <br />
        <br />
        <hr
          style={{
            borderTop: '1px solid lightgrey',
            width: '100%',
            margin: '0 auto',
          }}
        />
      </div>
      <br />

      <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgb(0, 0, 0)', color: 'white' }}>
        <div style={{ textAlign: 'left' }}>
          Copyright © 2026 WHHC
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} onMouseOver={(e) => e.target.style.color = 'red'} onMouseOut={(e) => e.target.style.color = 'white'}>
          <a href="https://www.instagram.com/whhc.srm.vdp/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <FaInstagram style={{ color: 'white', fontSize: '24px' }} />
          </a>
          <a href="https://www.linkedin.com/in/white-hat-hackers-club-638389212/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <FaLinkedin style={{ color: 'white', fontSize: '24px' }} />
          </a>
          <a href="https://www.facebook.com/WHHC.SRM/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <FaFacebook style={{ color: 'white', fontSize: '24px' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;