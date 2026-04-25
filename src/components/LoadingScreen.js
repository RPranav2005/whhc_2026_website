import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';
import logo from '../assets/whhcc.png';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="loading-logo-container">
        <motion.div
          className="loading-glow"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={logo}
          alt="WHHC Logo"
          className="loading-logo"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            filter: "blur(0px)",
            transition: { 
              duration: 1.5, 
              ease: "easeOut",
              delay: 0.2
            } 
          }}
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            bottom: '-20px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #ff0000, transparent)',
            boxShadow: '0 0 10px #ff0000',
          }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
