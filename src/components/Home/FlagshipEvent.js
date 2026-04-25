import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import technozarreLogo from '../../assets/tzzz2.png';
import hhLogo from '../../assets/hh.png';

/**
 * FlagShipEvent Component
 * Redesigned for 2026 to show 3 flagship events in a horizontal grid.
 * Technozarre and Hack Horizons use image logos, Cicada uses Akira font.
 */
const FlagShipEvent = () => {
  const navigate = useNavigate();
  const events = [
    {
      id: 2,
      name: "HACK HORIZONS",
      logo: hhLogo,
      type: "image",
      path: "/photogallery"
    },
    {
      id: 1,
      name: "TECHNOZARRE",
      logo: technozarreLogo,
      type: "image",
      path: "/technozarre"
    },
    {
      id: 3,
      name: "CICADA",
      type: "text",
      path: "/photogallery"
    }
  ];

  return (
    <div style={{ width: '100%', padding: '40px 0' }}>
      {/* Title Section */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{
          color: 'white',
          fontSize: 'clamp(2rem, 5vw, 45px)',
          fontWeight: '800',
          margin: 0,
          textTransform: 'uppercase',
          letterSpacing: '3px',
          fontFamily: "'Poppins', sans-serif"
        }}>
          OUR FLAGSHIP <span style={{
            background: 'linear-gradient(to right, #ffffff, #ff3232, #ff3232)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(255, 50, 50, 0.4)'
          }}>EVENTS</span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px', 
        flexWrap: 'wrap',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              y: -10,
              boxShadow: '0 15px 40px rgba(255, 50, 50, 0.25)',
              borderColor: 'rgba(255, 50, 50, 0.5)'
            }}
            onClick={() => {
              navigate(event.path);
              window.scrollTo(0, 0);
            }}
            style={{
              width: 'clamp(280px, 30%, 400px)',
              flex: '1 1 300px',
              maxWidth: '380px',
              height: '260px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Ambient Background Glow */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '150%',
              height: '150%',
              background: 'radial-gradient(circle, rgba(255, 50, 50, 0.05) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            {event.type === "image" ? (
              <img 
                src={event.logo} 
                alt={event.name} 
                style={{ 
                  maxWidth: '95%', 
                  maxHeight: '92%', 
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.6))'
                }} 
              />
            ) : (
              <h3 style={{
                fontFamily: "'Hunters', sans-serif",
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                color: '#ff3232',
                margin: 0,
                textAlign: 'center',
                letterSpacing: '5px',
                textShadow: '0 0 20px rgba(255, 50, 50, 0.4)'
              }}>
                {event.name}
              </h3>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FlagShipEvent;