import React, { useState, useEffect } from "react";
import Navigation from '../components/Navigation'
// import { Button } from "react-bootstrap";
// import video from '../assets/home-video.mp4';
import WhatWeDoCard from "../components/Home/WhatWeDoCard";
import FlagShipEvent from "../components/Home/FlagshipEvent";
import Footer from "../components/Home/Footer";
import MatrixRain from "../components/Home/MatrixRain";
import { motion } from "framer-motion";
const Home = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  // This hook listens to the scroll position
  useEffect(() => {
    const handleScroll = () => {
      // If the user scrolls down more than 50 pixels, show the navbar
      if (window.scrollY > 50) {
        setIsNavVisible(true);
      } else {
        // Hide it if they are at the very top
        setIsNavVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      
      {/* The Animated Navbar (Hover triggers removed) */}
      <motion.div
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ 
          y: isNavVisible ? 0 : '-100%', 
          opacity: isNavVisible ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          backgroundColor: 'rgba(0, 0, 0, 0.85)', // Dark translucent background
          backdropFilter: 'blur(5px)', // Blurs the content behind the navbar
          borderBottom: '1px solid rgba(255, 0, 0, 0.3)' // Subtle red bottom border
        }}
      >
        <Navigation />
      </motion.div>

      {/* 3. The Matrix Rain Container - Now sits at the absolute top */}
      <div className="video-container" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'black' }}>
        
        {/* The Rain Background */}
        <MatrixRain />
        
        {/* The Text Floating Over It */}
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          zIndex: 10, 
          textAlign: 'center', 
          width: '100%',
          pointerEvents: 'none' 
        }}>
          {/* Glitching, Massive WHHC Title */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0, 1, 0.3, 1], 
              x: [-20, 20, -10, 10, -5, 0], 
              skewX: [20, -20, 10, -10, 0, 0], 
              filter: ['blur(10px)', 'blur(0px)', 'blur(5px)', 'blur(0px)', 'blur(2px)', 'blur(0px)']
            }}
            transition={{ 
              duration: 0.7, 
              times: [0, 0.2, 0.4, 0.6, 0.8, 1], 
              ease: "easeInOut" 
            }}
            style={{ 
              color: 'white', 
              fontSize: 'clamp(6rem, 15vw, 12rem)', 
              fontFamily: "'Akira', sans-serif",
              fontWeight: '900', 
              textShadow: '0px 0px 30px rgba(255, 0, 0, 0.8)',
              margin: 0,
              lineHeight: '1'
            }}
          >
            WHHC
          </motion.h1>

          {/* Subtitle fading in right after the glitch finishes */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            style={{ 
              color: 'rgb(255, 50, 50)', 
              fontSize: 'clamp(1rem, 2vw, 1.5rem)', 
              fontWeight: 'bold', 
              letterSpacing: '5px',
              marginTop: '10px'
            }}
          >
            SECURING THE CYBER WORLD ONE BYTE AT A TIME
          </motion.p>
        </div>
      </div>

      <div className="home-background">
        <div style={{ textAlign: 'center', marginLeft: '10%', marginRight: '10%'}}>
          <div>
            <br />
            <br />
            <text style={{color: 'white', fontSize: '45px', fontWeight: '700'}}>About The Department</text>
            <br />
            <br />
          <p className="home-paragraphtext">Our club is based out of the <text style={{color: 'rgb(255, 50, 50)'}}>DCSE, SRM Vadapalani, Chennai</text>. Our department boasts a renowned faculty known for their 
          <text style={{color: 'rgb(255, 50, 50)'}}> expertise in a wide range of fields</text>. A substantial portion of our esteemed faculty members bring extensive experience,
          with many having dedicated over a decade to their respective fields. Our research initiatives revolve around crucial
          domains such as <text style={{color: 'rgb(255, 50, 50)'}}>network security, cryptography, wireless sensor networks, data mining, and cloud computing</text>. This steadfast
          dedication to research is exemplified by the productive contributions of both our faculty and students, as they continually
          showcase and publish their work at esteemed national and international conferences.
          </p>
          </div>
        </div>
        <div>
          <br />
          <br />
          <hr
            style={{
            borderTop: '1px solid rgba(255, 0, 0, 0.4)', /* Changed from lightgrey to a dark red */
            boxShadow: '0px 0px 10px rgba(255, 0, 0, 0.5)', /* Adds a slight red neon glow */
            width: '5%', 
            margin: '0 auto', 
            }}
            />
        </div>
        <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
            <br />
            <br />
            <text style={{color: 'white', fontSize: '45px', fontWeight: '700'}}>About Us</text>
            <br />
            <br />
          <div className="home-aboutustext">
            <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '2%', paddingBottom: '2%'}}>
            <p className="home-paragraphtext">
            <text style={{color: 'rgb(255, 50, 50)'}}>White Hat Hackers Club</text> is a student-driven technical organization headquartered at  
            <text style={{color: 'rgb(255, 50, 50)'}}> SRMIST, Vadapalani Campus</text>. The club’s primary objective is to inspire students to delve into the realm of 
            <text style={{color: 'rgb(255, 50, 50)'}}> cybersecurity and ethical hacking</text>, equipping them with the essential skills for success in this field. We
            welcome students from diverse backgrounds and skill levels, ranging from beginners to advanced, to refine
            their abilities. Our main goal is to establish a space where like-minded individuals can initiate discussions
            about ethical hacking and cybersecurity, leveraging their knowledge to drive meaningful progress.
            </p>
            </div>
          </div>
        </div>
        <div>
          <br />
          <br />
          <hr
            style={{
            borderTop: '1px solid rgba(255, 0, 0, 0.4)',
            boxShadow: '0px 0px 10px rgba(255, 0, 0, 0.5)',
            width: '5%', 
            margin: '0 auto', 
            }}
            />
        </div>
        <div>
          <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
            <br />
            <br />
            <text style={{color: 'white', fontSize: '45px', fontWeight: '700'}} >What we do</text>
            <br />
            <br />
            <p className="home-paragraphtext" style={{fontSize: '23px', textAlign: 'center'}}>
            Through our lineup of workshops and events, along with our online publications of articles on our website and social media,
            we aim to impart knowledge about the applications, advancements, and future prospects in the world of ethical hacking and cybersecurity.
            </p>
          </div>
          <div style={{ justifyContent: 'center', marginLeft: '10%', marginRight: '10%', marginTop: '50px'}}>
            <WhatWeDoCard />
          </div>
        </div>
        <div>
          <br />
          <br />
          <hr
            style={{
            borderTop: '1px solid rgba(255, 0, 0, 0.4)',
            boxShadow: '0px 0px 10px rgba(255, 0, 0, 0.5)',
            width: '5%', 
            margin: '0 auto', 
            }}
            />
        </div>
        <div>
          <br />
          <br />
          <br />
          <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '10%'}}>
            <FlagShipEvent />
          </div>
        </div>
        <div style={{ textAlign: 'center'}}>
          <div className="home-team">
            <div style={{textAlign: "center",  marginLeft: '30%', marginRight: '30%',paddingTop: '6%'}}>
              {/* Keeping this commented out as it was in your original code */}
            </div>
          </div>
        </div>
        <div >
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home;