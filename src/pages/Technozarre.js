import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timer from "../components/Technozarre/Timer";
import Workshops from "../components/Technozarre/Workshops";
import Navigation from "../components/Navigation";
import Events from "../components/Technozarre/Events";
import Footer from "../components/Home/Footer";

const Technozarre = () => {
  // State to control the loading screen
  const [loading, setLoading] = useState(true);

  // Simulate a 2.5-second boot-up sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll-reveal for the rest of the page
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const heroContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const heroItem = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', width: '100%', overflowX: 'hidden', color: 'white' }}>
      
      {/* AnimatePresence allows elements to animate out when they are removed from the screen */}
      <AnimatePresence mode="wait">
        
        {loading ? (
          /* =========================================
             THE LOADING SCREEN
             ========================================= */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }} // Smooth crossfade out
            style={{
              height: '100vh',
              width: '100vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 9999,
              backgroundColor: '#050505'
            }}
          >
            {/* Blinking Loading Text */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              style={{
                fontFamily: 'monospace',
                color: 'rgb(255, 50, 50)',
                fontSize: '1.5rem',
                letterSpacing: '8px',
                marginBottom: '20px',
                textShadow: '0 0 10px rgba(255, 0, 0, 0.5)'
              }}
            >
              LOADING_SYSTEM...
            </motion.div>

            {/* Glowing Progress Bar */}
            <div style={{ width: '250px', height: '2px', backgroundColor: 'rgba(255,0,0,0.1)', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                style={{
                  height: '100%',
                  backgroundColor: 'rgb(255, 50, 50)',
                  boxShadow: '0 0 15px rgb(255, 50, 50)'
                }}
              />
            </div>
          </motion.div>

        ) : (

          /* =========================================
             THE MAIN PAGE (Fades in after loading)
             ========================================= */
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Sticky Navbar */}
            <div style={{backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 50}}>
              <Navigation />
            </div>
            
            {/* Cinematic Hero Section */}
            <motion.div 
              variants={heroContainer}
              initial="hidden"
              animate="show"
              style={{
                minHeight: '65vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'radial-gradient(circle at center, rgba(60,0,0,0.15) 0%, #050505 60%)',
                borderBottom: '1px solid rgba(255, 0, 0, 0.1)',
                padding: '20px',
                position: 'relative'
              }}
            >
              {/* Ambient Background Glow */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '50vw',
                height: '20vw',
                background: 'rgba(255, 0, 0, 0.05)',
                filter: 'blur(100px)',
                zIndex: 0,
                pointerEvents: 'none'
              }} />

              {/* Premium Gradient Title */}
              <motion.h1 
                variants={heroItem}
                style={{
                  fontFamily: "'Akira', sans-serif",
                  fontSize: 'clamp(3rem, 8vw, 8rem)',
                  margin: '0',
                  background: 'linear-gradient(180deg, #ff4d4d 0%, #b30000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0px 10px 30px rgba(255, 0, 0, 0.3)',
                  zIndex: 1,
                  lineHeight: '1'
                }}
              >
                TECHNOZARRE
              </motion.h1>

              {/* Hollow "Outline" Subtitle */}
              <motion.h2 
                variants={heroItem}
                style={{
                  fontFamily: "'Akira', sans-serif",
                  fontSize: 'clamp(2rem, 5vw, 5rem)',
                  margin: '-10px 0 40px 0',
                  color: 'transparent',
                  WebkitTextStroke: '2px rgba(255, 50, 50, 0.8)',
                  letterSpacing: '10px',
                  zIndex: 1
                }}
              >
                2026
              </motion.h2>

              {/* The Timer */}
              <motion.div variants={heroItem} style={{ zIndex: 1 }}>
                <Timer />
              </motion.div>

            </motion.div>

            {/* Rest of the Events Page */}
            <div className="technozarre-page" style={{background: '#050505', height: '100%', paddingTop: '40px'}}>
                
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} style={{color: 'white', fontSize: '45px', fontWeight: '700', textAlign: 'center', marginTop: '20px'}}>
                  <span className="technozarre-title" style={{ textShadow: '0 0 15px rgba(255, 0, 0, 0.6)' }}>WORKSHOPS</span>
                </motion.div>
                
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                  <Workshops />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} style={{color: 'white', fontSize: '45px', fontWeight: '700', textAlign: 'center', marginTop: '50px'}}>
                  <span className="technozarre-title" style={{ textShadow: '0 0 15px rgba(255, 0, 0, 0.6)' }}>EVENTS</span>
                </motion.div>
                
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                  <Events />
                </motion.div>

                <div style={{marginTop: '50px'}}>
                  <Footer />
                </div>
            </div>
          </motion.div>

        )}
      </AnimatePresence>
    </div>
  );
}

export default Technozarre;