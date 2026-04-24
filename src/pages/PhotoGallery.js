import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Footer from "../components/Home/Footer";
import bgImage from "../assets/bgg.png";

// Hack Horizons Images
import hh1 from "../assets/hh25/hh1.JPG";
import hh2 from "../assets/hh25/hh2.JPG";
import hh3 from "../assets/hh25/hh3.JPG";
import hh4 from "../assets/hh25/hh4.JPG";
import hh5 from "../assets/hh25/hh5.JPG";
import hh6 from "../assets/hh25/hh6.JPG";

// Cicada Images
import cc1 from "../assets/cc25/cc1.jpeg";
import cc2 from "../assets/cc25/cc2.jpeg";
import cc3 from "../assets/cc25/cc3.jpeg";
import cc4 from "../assets/cc25/cc4.jpeg";
import cc5 from "../assets/cc25/cc5.jpeg";
import cc6 from "../assets/cc25/cc6.jpeg";

// Technozarre Images
import tz1 from "../assets/tz25/tz1.jpeg";
import tz2 from "../assets/tz25/tz2.jpeg";
import tz3 from "../assets/tz25/tz3.jpeg";
import tz4 from "../assets/tz25/tz4.jpeg";
import tz5 from "../assets/tz25/tz5.jpeg";
import tz6 from "../assets/tz25/tz6.jpeg";

const glassCard = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 50, 50, 0.2)',
  borderRadius: '24px',
  padding: '50px 40px',
  boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
};

const Divider = () => (
  <div style={{ width: '100%', margin: '80px 0', display: 'flex', justifyContent: 'center' }}>
    <div style={{ 
      width: '100%', 
      maxWidth: '1200px', 
      height: '1px', 
      background: 'linear-gradient(90deg, transparent, rgba(255, 50, 50, 0.8), transparent)',
      boxShadow: '0 0 15px rgba(255, 50, 50, 0.3)'
    }} />
  </div>
);

const photoStyle = {
  width: '100%',
  height: '250px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '10px',
  border: '1px solid rgba(255, 50, 50, 0.3)',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
};

const Photogallery = () => {
  const hhImages = [hh1, hh2, hh3, hh4, hh5, hh6];
  const cicadaImages = [cc1, cc2, cc3, cc4, cc5, cc6];
  const tzImages = [tz1, tz2, tz3, tz4, tz5, tz6];

  const onEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 50, 50, 0.6)';
    e.currentTarget.style.zIndex = '10';
  };
  const onLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)';
    e.currentTarget.style.zIndex = '1';
  };

  return (
    <div style={{ 
      width: '100%', 
      overflowX: 'hidden', 
      position: 'relative', 
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>

      {/* Fixed Background — stays in place while content scrolls */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        zIndex: -1,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#000'
      }} />

      {/* Sticky Navbar */}
      <div style={{ backgroundColor: 'transparent', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <Navigation />
      </div>

      <div style={{ flex: 1 }}>
        <Container style={{ paddingTop: '120px', paddingBottom: '60px' }}>

          {/* ── SECTION 1: HACK HORIZONS 2025 ── */}
          <div style={glassCard}>
            <h1 style={{
              fontFamily: "'Hunters', sans-serif",
              color: 'rgb(255, 50, 50)',
              textShadow: '0px 0px 15px rgba(255, 0, 0, 0.6)',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              HACK HORIZONS'25
            </h1>

            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgb(220, 220, 220)', textAlign: 'justify', marginBottom: '40px' }}>
              <p>
                <strong style={{ color: 'rgb(255, 50, 50)' }}>White Hat Hackers Club</strong> of the Department of Computer Science and Engineering, SRMIST Vadapalani has proudly hosted "HackHorizons 2025," a rigorous 12-hour innovation marathon on October 9th-10th, 2025. With a massive turnout of 265 participants from both internal and external institutions, the competition saw strong and enthusiastic engagement. This high-energy hackathon focused on cutting-edge problem statements related to <strong style={{ color: 'white' }}>Generative AI, Agentic AI, and Cybersecurity</strong>. Participants brought their best ideas to the table, and the top teams were evaluated on foundational quality, technical rigor, and market potential, making HackHorizons 2025 not just a competition but a celebration of vision, skill, and architectural integrity!
              </p>
              <p style={{ marginBottom: 0 }}>
                The event kicked off early on Day 1 with the problem statement release and theme reveal, setting the tone for an intense 12-hour coding window. Each team worked relentlessly, transforming early concepts into functional, high-quality Minimum Viable Products (MVPs) with the help of dedicated internal mentoring rounds. Judges utilized a strict two-stage rubric and praised the elevated technical standards of the solutions. HackHorizons 2025 provided a vital platform for students to translate theoretical knowledge into practical solutions, cementing its role as a premier technical competition!
              </p>
            </div>

            <Row className="g-4">
              {hhImages.map((img, i) => (
                <Col md={4} sm={6} xs={12} key={`hh-${i}`}>
                  <div style={{ ...photoStyle, backgroundImage: `url(${img})` }}
                    onMouseEnter={onEnter} onMouseLeave={onLeave} />
                </Col>
              ))}
            </Row>
          </div>

          <Divider />

          {/* ── SECTION 2: CICADA'25 ── */}
          <div style={glassCard}>
            <h1 style={{
              fontFamily: "'Hunters', sans-serif",
              color: 'rgb(255, 50, 50)',
              textShadow: '0px 0px 15px rgba(255, 0, 0, 0.6)',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              CICADA'25
            </h1>

            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgb(220, 220, 220)', textAlign: 'justify', marginBottom: '40px' }}>
              <p>
                The <strong style={{ color: 'rgb(255, 50, 50)' }}>White Hat Hackers Club (WHHC)</strong> successfully hosted <strong style={{ color: 'white' }}>Cicada 25 - Python Puzzle Hunt</strong>, an intensive one-day workshop and technical challenge on September 12, 2025. Designed to test and elevate programming proficiency, the event drew an impressive crowd of 86 participants, comprising 70 internal students and 16 external challengers.
              </p>
              <p style={{ marginBottom: 0 }}>
                The competition was divided into two rigorous tiers—an Easy Round and a Hard Round—hosted on the Hackerrank platform. Participants tackled complex algorithmic puzzles requiring mastery of core Python concepts, including advanced string manipulation, nested loops, recursion, and intricate data parsing. Cicada 25 successfully fostered collaborative learning and pushed the boundaries of students' algorithmic thinking, making it a cornerstone event for developing sharp, adaptable problem-solvers!
              </p>
            </div>

            <Row className="g-4">
              {cicadaImages.map((img, i) => (
                <Col md={4} sm={6} xs={12} key={`cc-${i}`}>
                  <div style={{ ...photoStyle, backgroundImage: `url(${img})` }}
                    onMouseEnter={onEnter} onMouseLeave={onLeave} />
                </Col>
              ))}
            </Row>
          </div>

          <Divider />

          {/* ── SECTION 3: TECHNOZARRE'25 ── */}
          <div style={glassCard}>
            <h1 style={{
              fontFamily: "'Hunters', sans-serif",
              color: 'rgb(255, 50, 50)',
              textShadow: '0px 0px 15px rgba(255, 0, 0, 0.6)',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              TECHNOZARRE'25
            </h1>

            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgb(220, 220, 220)', textAlign: 'justify', marginBottom: '40px' }}>
              <p>
                The <strong style={{ color: 'rgb(255, 50, 50)' }}>White Hat Hackers Club</strong> proudly hosted <strong style={{ color: 'white' }}>Technozarre'25</strong>, our flagship national-level technical symposium, centered around the captivating theme of "Tinkering Through Time." This immersive event took participants on an exhilarating journey through the evolution of computing, challenging them to bridge the gap between legacy systems and the bleeding edge of modern innovation. Drawing a massive crowd of tech enthusiasts, developers, and problem-solvers across various institutions, the symposium celebrated the rich history of technology while pushing students to architect the solutions of tomorrow.
              </p>
              <p style={{ marginBottom: 0 }}>
                The symposium featured a dynamic lineup of rigorous technical competitions, hands-on workshops, and engaging non-technical events tailored to diverse skill levels. Participants tackled everything from retro-coding challenges and classic hardware debugging to futuristic cybersecurity simulations and AI-driven problem-solving. Technozarre'25 successfully merged the nostalgia of the past with the limitless potential of the future, serving as a powerful testament to WHHC's commitment to building a community of relentless, forward-thinking creators!
              </p>
            </div>

            <Row className="g-4">
              {tzImages.map((img, i) => (
                <Col md={4} sm={6} xs={12} key={`tz-${i}`}>
                  <div style={{ ...photoStyle, backgroundImage: `url(${img})` }}
                    onMouseEnter={onEnter} onMouseLeave={onLeave} />
                </Col>
              ))}
            </Row>
          </div>

        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default Photogallery;