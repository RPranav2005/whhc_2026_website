import React from "react";
import Navigation from '../components/Navigation'
import WhatWeDoCard from "../components/Home/WhatWeDoCard";
import FlagShipEvent from "../components/Home/FlagshipEvent";
import Footer from "../components/Home/Footer";
// import divider from "../assets/divider.png";
import { motion } from "framer-motion";
import bgImage from "../assets/bgg.png";
import TheCrew from "../components/Home/TheCrew";


const Home = () => {
  return (
    <div className="home" style={{
      width: '100%',
      overflowX: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>

      {/* Fixed Background Image */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#000'
      }} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Navigation />

      {/* Hero Section */}
      <div className="hero-container" style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}>




        {/* Centered Content */}
        <div style={{
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
              fontSize: 'clamp(3.5rem, 15vw, 12rem)',
              fontFamily: "'Hunters', sans-serif",
              fontWeight: '900',
              textShadow: '0px 0px 30px rgba(255, 0, 0, 0.8)',
              margin: 0,
              lineHeight: '1'
            }}
          >
            WHHC
          </motion.h1>

          {/* Subtitle removed */}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="home-background" style={{
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
        backgroundColor: 'transparent',
      }}>

        {/* About The Department Card (Vision) */}
        <div id="about" style={{
          margin: '100px auto',
          maxWidth: '1400px',
          width: '95%',
          padding: '0 20px',
          position: 'relative',
          zIndex: 1
        }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 50, 50, 0.2)',
              borderRadius: '24px',
              padding: '60px 40px',
              textAlign: 'left', // Allow children to specify their own alignment
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}
          >
            {/* Icon Header */}
            <div style={{
              position: 'absolute',
              top: '-40px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '80px',
              backgroundColor: '#ff3232',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 15px rgba(255, 50, 50, 0.4)'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h2 style={{
              color: 'white',
              fontSize: 'clamp(1.5rem, 4vw, 32px)',
              fontWeight: '800',
              margin: '20px 0 30px 0',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textAlign: 'center'
            }}>
              Our <span style={{ color: '#ff3232' }}>Vision</span>
            </h2>

            <p style={{
              color: '#ffffff',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              lineHeight: '1.8',
              textAlign: 'justify',
              margin: 0,
              fontWeight: '400'
            }}>
              Our club is based out of the <span style={{ fontWeight: '700', color: '#ff3232' }}>DCSE, SRM Vadapalani, Chennai</span>. Our department boasts a renowned faculty known for their
              <span style={{ fontWeight: '700', color: '#ff3232' }}> expertise in a wide range of fields</span>. A substantial portion of our esteemed faculty members bring extensive experience,
              with many having dedicated over a decade to their respective fields. Our research initiatives revolve around crucial
              domains such as <span style={{ fontWeight: '700', color: '#ff3232' }}>network security, cryptography, wireless sensor networks, data mining, and cloud computing</span>. This steadfast
              dedication to research is exemplified by the productive contributions of both our faculty and students, as they continually
              showcase and publish their work at esteemed national and international conferences.
            </p>
          </motion.div>
        </div>

        {/* About Us Card (Mission) */}
        <div style={{
          margin: '100px auto',
          maxWidth: '1400px',
          width: '95%',
          padding: '0 20px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 50, 50, 0.2)',
              borderRadius: '24px',
              padding: '60px 40px',
              textAlign: 'left',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}
          >
            {/* Icon Header */}
            <div style={{
              position: 'absolute',
              top: '-40px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '80px',
              backgroundColor: '#ff3232',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 15px rgba(255, 50, 50, 0.4)'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="2" fill="white" />
              </svg>
            </div>

            <h2 style={{
              color: 'white',
              fontSize: 'clamp(1.5rem, 4vw, 32px)',
              fontWeight: '800',
              margin: '20px 0 30px 0',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textAlign: 'center'
            }}>
              Our <span style={{ color: '#ff3232' }}>Mission</span>
            </h2>

            <p style={{
              color: '#ffffff',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              lineHeight: '1.8',
              textAlign: 'justify',
              margin: 0,
              fontWeight: '400'
            }}>
              <span style={{ fontWeight: '700', color: '#ff3232' }}>White Hat Hackers Club</span> is a student-driven technical organization headquartered at
              <span style={{ fontWeight: '700', color: '#ff3232' }}> SRMIST, Vadapalani Campus</span>. The club’s primary objective is to inspire students to delve into the realm of
              <span style={{ fontWeight: '700', color: '#ff3232' }}> cybersecurity and ethical hacking</span>, equipping them with the essential skills for success in this field. We
              welcome students from diverse backgrounds and skill levels, ranging from beginners to advanced, to refine
              their abilities. Our main goal is to establish a space where like-minded individuals can initiate discussions
              about ethical hacking and cybersecurity, leveraging their knowledge to drive meaningful progress.
            </p>
          </motion.div>
        </div>

        {/* What We Do */}
        <div style={{ marginTop: '100px', padding: '0 20px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 50, 50, 0.2)',
              borderRadius: '24px',
              padding: '60px clamp(20px, 8vw, 10%)',
              textAlign: 'center',
              maxWidth: '1200px',
              margin: '0 auto',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}
          >
            <h2 style={{
              color: 'white',
              fontSize: 'clamp(2rem, 5vw, 45px)',
              fontWeight: '700',
              margin: '0 0 20px 0',
              textTransform: 'uppercase'
            }}>
              What we do
            </h2>

            <p style={{
              fontWeight: '400',
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              textAlign: 'justify',
              lineHeight: '1.8',
              color: '#ccc',
              margin: '0 auto',
              maxWidth: '900px'
            }}>
              Through our lineup of workshops and events, along with our online publications of articles on our website and social media,
              we aim to impart knowledge about the applications, advancements, and future prospects in the world of ethical hacking and cybersecurity.
            </p>
          </motion.div>

          <div style={{ display: 'flex', justifyContent: 'center', padding: '0 20px', marginTop: '50px' }}>
            <WhatWeDoCard />
          </div>
        </div>

        {/* Flagship Event Divider */}
        <div style={{ width: '100%', margin: '80px 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 50, 50, 0.8), transparent)',
            boxShadow: '0 0 15px rgba(255, 50, 50, 0.3)'
          }} />
        </div>

        {/* Flagship Event — boxed with glow border */}
        <div style={{
          margin: '0 auto',
          maxWidth: '1300px',
          width: '95%',
          padding: '50px clamp(20px, 4vw, 60px)',
          border: '1px solid rgba(255, 50, 50, 0.35)',
          borderRadius: '28px',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 0 40px rgba(255, 50, 50, 0.1), 0 20px 50px rgba(0,0,0,0.4)',
          position: 'relative',
          zIndex: 1,
        }}>
          <FlagShipEvent />
        </div>

        {/* Divider below Flagship Events */}
        <div style={{ width: '100%', margin: '70px 0 0 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '80%',
            maxWidth: '1200px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 50, 50, 0.8), transparent)',
            boxShadow: '0 0 15px rgba(255, 50, 50, 0.3)'
          }} />
        </div>

        {/* The Crew Section */}
        <TheCrew />

        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Home;
