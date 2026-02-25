import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../Navigation"; // Adjust path if needed
import Footer from "../Home/Footer";    // Adjust path if needed

import cc1 from '../../assets/cc25/cc1.jpeg';
import cc2 from '../../assets/cc25/cc2.jpeg';
import cc3 from '../../assets/cc25/cc3.jpeg';
import cc4 from '../../assets/cc25/cc4.jpeg';
import cc5 from '../../assets/cc25/cc5.jpeg';
import cc6 from '../../assets/cc25/cc6.jpeg';

const Cicada = () => {
  const cicadaImages = [cc1, cc2, cc3, cc4, cc5, cc6];

  return (
    // 🛑 FIX: Added flexbox column layout to push footer down
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column' }}>
      
      {/* Sticky Navbar */}
      <div style={{ backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <Navigation />
      </div>

      {/* 🛑 FIX: Added flex: 1 so this container stretches to fill empty space */}
      <Container style={{ paddingTop: '60px', paddingBottom: '60px', flex: 1 }}>
        
        {/* =========================================
            CICADA SECTION
            ========================================= */}
        <div style={{ marginBottom: '60px' }}>
          <h1 style={{ 
            fontFamily: "'Akira', sans-serif", 
            color: 'rgb(255, 50, 50)', 
            textShadow: '0px 0px 15px rgba(255, 0, 0, 0.6)',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            CICADA 25
          </h1>
          
          {/* The Professional Cicada 25 Writeup */}
          <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgb(220, 220, 220)', textAlign: 'justify', marginBottom: '40px' }}>
            <p>
              The <strong style={{ color: 'rgb(255, 50, 50)' }}>White Hat Hackers Club (WHHC)</strong> successfully hosted <strong style={{ color: 'white' }}>Cicada 25 - Python Puzzle Hunt</strong>, an intensive one-day workshop and technical challenge on September 12, 2025. Designed to test and elevate programming proficiency, the event drew an impressive crowd of 86 participants, comprising 70 internal students and 16 external challengers.
            </p>
            <p>
              The competition was divided into two rigorous tiers—an Easy Round and a Hard Round—hosted on the Hackerrank platform. Participants tackled complex algorithmic puzzles requiring mastery of core Python concepts, including advanced string manipulation, nested loops, recursion, and intricate data parsing. Cicada 25 successfully fostered collaborative learning and pushed the boundaries of students' algorithmic thinking, making it a cornerstone event for developing sharp, adaptable problem-solvers!
            </p>
          </div>

          {/* The Image Grid */}
          <Row className="g-4">
            {cicadaImages.map((img, index) => (
              <Col md={4} sm={6} xs={12} key={index}>
                <div style={{
                  width: '100%',
                  height: '250px',
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 50, 50, 0.3)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 50, 50, 0.6)';
                  e.currentTarget.style.zIndex = '10';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)';
                  e.currentTarget.style.zIndex = '1';
                }}
                />
              </Col>
            ))}
          </Row>
        </div>

      </Container>
      
      <Footer />
    </div>
  );
};

export default Cicada;