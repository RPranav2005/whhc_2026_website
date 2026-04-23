import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timer from "../components/Technozarre/Timer";
// import Workshops from "../components/Technozarre/Workshops"; // 🛑 Hiding the import for now to prevent warnings
import Navigation from "../components/Navigation";
import Events from "../components/Technozarre/Events";
import Footer from "../components/Home/Footer";
import technozarreLogo from "../assets/tzzz2.png";

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
            
            {/* Image Hero Section */}
            <motion.div 
              variants={heroContainer}
              initial="hidden"
              animate="show"
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#050505',
                paddingTop: '0px',
                paddingBottom: '0px',
                overflowX: 'hidden' 
              }}
            >
              
              {/* 1. Technozarre Logo */}
              <motion.img 
                variants={heroItem}
                src={technozarreLogo}
                alt="Technozarre Logo"
                style={{
                  width: '95%',
                  maxWidth: '1200px',
                  maxHeight: '65vh',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 20px rgba(255, 50, 50, 0.4))',
                  marginTop: '0px',
                  marginBottom: '-150px',
                  position: 'relative',
                  zIndex: '1'
                }}
              />

              {/* 3. The Timer (Wrapped in our nuke class) */}
              <motion.div 
                variants={heroItem} 
                className="mobile-timer-nuke"
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              >
                <Timer />
              </motion.div>

            </motion.div>

            {/* Rest of the Events Page */}
            <div className="technozarre-page" style={{background: 'transparent', height: '100%', paddingTop: '0px', position: 'relative', zIndex: '2'}}>
                
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} style={{color: 'white', fontSize: '45px', fontWeight: '700', textAlign: 'center', marginTop: '0px'}}>
                  <span className="technozarre-title" style={{ textShadow: '0 0 15px rgba(255, 0, 0, 0.6)' }}>EVENTS</span>
                </motion.div>
                
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                  <Events />
                </motion.div>

                <div style={{marginTop: '20px'}}>
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