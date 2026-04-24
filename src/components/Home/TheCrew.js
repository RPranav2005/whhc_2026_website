import React from 'react';

// Faculty Coordinators
import jayanthi from '../../assets/team/Jayanthi.png';
import jayalakshmi from '../../assets/team/Jayalakshmi.png';

// Senior BOD
import dev from '../../assets/team/Dev.png';
import shreeja from '../../assets/team/Shreeja.png';
import prathik from '../../assets/team/Prathik.png';
import azhaar from '../../assets/team/Azhaar.png';
import adithi from '../../assets/team/Adithi.png';
import aayush from '../../assets/team/Aayush.png';
import charan from '../../assets/team/Charan.png';
import nancy from '../../assets/team/Nancy.png';
import nayel from '../../assets/team/Nayel.png';

// Junior BOD
import harshith from '../../assets/team/Harshith.png';
import joshika from '../../assets/team/Joshika.png';
import arjun from '../../assets/team/Arjun.png';
import anirudh from '../../assets/team/Anirudh.png';
import srinidhi from '../../assets/team/Srindhi.png';
import siddiqArya from '../../assets/team/Siddiq Arya.png';
import pranav from '../../assets/team/Pranav.png';

const SectionHeading = ({ title }) => (
  <h2 style={{
    fontFamily: "'Hunters', sans-serif",
    color: 'white',
    fontSize: 'clamp(1.5rem, 4vw, 36px)',
    textTransform: 'uppercase',
    letterSpacing: '4px',
    textShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
    marginBottom: '40px',
    marginTop: '60px',
    textAlign: 'center',
  }}>
    {title}
  </h2>
);

const CardGrid = ({ photos, columns = 3 }) => {
  const cardWidth = '350px';
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '120px',
      maxWidth: columns === 2 ? '900px' : '1400px',
      margin: '0 auto',
    }}>
      {photos.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`member-${i}`}
          style={{ width: cardWidth, height: 'auto', display: 'block' }}
        />
      ))}
    </div>
  );
};

const TheCrew = () => (
  <div id="crew" style={{ padding: '60px 40px 80px', backgroundColor: 'transparent' }}>

    <h1 style={{
      fontFamily: "'Hunters', sans-serif",
      color: 'white',
      fontSize: 'clamp(2rem, 5vw, 50px)',
      textShadow: '0 0 20px rgba(255,0,0,0.5)',
      marginBottom: '20px',
      letterSpacing: '4px',
      textAlign: 'center',
    }}>
      WHHC <span style={{ color: '#cc0000' }}>THE CREW</span>
    </h1>

    <div style={{
      width: '200px',
      height: '2px',
      background: 'linear-gradient(90deg, transparent, rgba(255,50,50,0.8), transparent)',
      margin: '0 auto 10px',
    }} />

    <SectionHeading title="Faculty Coordinators" />
    <CardGrid photos={[jayanthi, jayalakshmi]} columns={2} />

    <SectionHeading title="Senior Board of Directors" />
    <CardGrid photos={[dev, shreeja, prathik, azhaar, adithi, aayush, charan, nancy, nayel]} />

    <SectionHeading title="Junior Board of Directors" />
    <CardGrid photos={[harshith, joshika, arjun, anirudh, srinidhi, siddiqArya, pranav]} />

  </div>
);

export default TheCrew;
