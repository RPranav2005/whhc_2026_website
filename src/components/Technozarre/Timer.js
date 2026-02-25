// src/components/Technozarre/Timer.js
import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const Timer = () => {
  // Update this to your exact 2026 date
  const technozarre = "March 5, 2026 10:00:00"; 
  const targetDate = new Date(technozarre).getTime();

  return (
    <div className="timer-container">
      <FlipClockCountdown 
        to={targetDate} 
        className="flip-clock" 
        labels={['Days', 'Hours', 'Minutes', 'Seconds']} 
        labelStyle={{ fontSize: '1.5vw', color: '#333' }}
        
        digitBlockStyle={{
          backgroundColor: 'linear-gradient(90deg, rgb(180, 0, 0), rgb(40, 0, 0))', /* Red to Dark Red */
          color: 'white',
          borderRadius: '10px',
          width: '80px',
          height: '100px',
          marginTop: '10px',
          margin: '5px',
          fontSize: '4rem',
          fontWeight: '900',
          boxShadow: '4px 8px 10px rgba(255, 0, 0, 0.4)', /* Red shadow */
        }}
        dividerStyle={{ color: 'rgb(43, 35, 54)', fontSize: '1.2rem' }}
        duration={0.85}
      />
    </div>
  );
};

export default Timer;