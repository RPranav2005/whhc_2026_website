import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "react-bootstrap";
// These pull your existing placeholder images for the pure "Coming Soon" cards
import comingsoon from "../../assets/technozarre2k25/events/comingsoon.png";
import staytuned from "../../assets/technozarre2k25/events/staytuned.png";

const EventCard = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // 1. THE "COMING SOON" STATE (For placeholder cards at the end of the grid)
  if (event.isComingSoon) {
    return (
      <div className="flip-card" style={{ height: '400px' }}> 
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
          <div 
            className="flip-card" 
            onClick={() => setIsFlipped(!isFlipped)} 
            style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', cursor: 'pointer', borderRadius: '15px', height: '400px'}} 
          />
          <div 
            className="flip-card" 
            onClick={() => setIsFlipped(!isFlipped)} 
            style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', cursor: 'pointer', borderRadius: '15px', height: '400px'}} 
          />
        </ReactCardFlip>
      </div>
    );
  }

  // 2. THE "REAL EVENT" STATE (Shows sleek text if poster is missing)
  return (
    <div className="flip-card" style={{ height: '400px' }}> 
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
        
        {/* FRONT OF REAL CARD */}
        <div 
          className="flip-card" 
          onClick={() => setIsFlipped(!isFlipped)} 
          style={{
            // 🛑 FIX: Uses the poster if it exists, otherwise uses a black background
            backgroundImage: event.frontBg ? `url(${event.frontBg})` : 'none', 
            backgroundColor: event.frontBg ? 'transparent' : '#0a0a0a',
            border: event.frontBg ? 'none' : '1px solid rgba(255, 0, 0, 0.4)',
            boxShadow: event.frontBg ? 'none' : '0px 0px 15px rgba(255, 0, 0, 0.1)',
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            cursor: 'pointer', 
            borderRadius: '15px', 
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            textAlign: 'center'
          }} 
        >
          {/* 🛑 FIX: If there is no poster image, generate the title text on the front! */}
          {!event.frontBg && (
            <>
              <h3 style={{ color: 'red', fontWeight: 'bold', fontSize: '1.8rem', textTransform: 'uppercase', margin: 0 }}>
                {event.title}
              </h3>
              <p style={{ color: '#555', marginTop: '15px', fontSize: '0.9rem', fontStyle: 'italic', margin: 0 }}>
                Click to view details & register
              </p>
            </>
          )}
        </div>
        
        {/* BACK OF REAL CARD */}
        <div 
          className="flip-card" 
          onClick={() => setIsFlipped(!isFlipped)} 
          style={{
            backgroundImage: event.backBg ? `url(${event.backBg})` : 'none', 
            backgroundColor: event.backBg ? 'transparent' : '#0a0a0a', 
            border: event.backBg ? 'none' : '1px solid rgba(255,0,0,0.3)',
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', borderRadius: '15px', height: '400px', padding: '15px'
          }}
        >
          <div style={{textAlign: 'center'}}>
            <h4 className="technozarre-back-header" style={{color: 'red', marginTop:'10px', fontWeight: 'bold'}}>{event.title}</h4>
          </div>
          
          <div className="technozarre-back" style={{fontSize: '14px', flex: 1, color: '#cccccc', overflowY:'auto', marginTop: '15px'}}>
            {event.date && <p style={{color:'white', margin: '5px 0'}}>📅 <strong>Date:</strong> {event.date}</p>}
            {event.time && <p style={{color:'white', margin: '5px 0'}}>🕒 <strong>Time:</strong> {event.time}</p>}
            {event.venue && <p style={{color:'white', margin: '5px 0'}}>🏢 <strong>Venue:</strong> {event.venue}</p>}
            <hr style={{ borderColor: '#333', margin: '10px 0' }}/>
            {event.description && event.description.map((desc, index) => (
               <p key={index} style={{color:'#aaaaaa', marginBottom: '8px'}}>{desc}</p>
            ))}
          </div>
          
          <div className='register-button' style={{marginTop: 'auto', textAlign: 'center', padding:'10px 0'}}>
            <Button 
              className="register-button" 
              style={{width: '80%', textAlign: 'center', backgroundColor:'black', borderColor: event.themeColor || 'red', fontWeight:'600', color: 'white'}} 
              onClick={(e) => {
                e.stopPropagation(); 
                window.open(event.registerLink, '_blank');
              }}
            >
              Register
            </Button>
          </div>

        </div>
      </ReactCardFlip>
    </div>
  );
};

export default EventCard;