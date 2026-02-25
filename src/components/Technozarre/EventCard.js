import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "react-bootstrap";
// These pull your existing placeholder images
import comingsoon from "../../assets/technozarre2k25/events/comingsoon.png";
import staytuned from "../../assets/technozarre2k25/events/staytuned.png";

const EventCard = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // 1. THE "COMING SOON" STATE
  if (event.isComingSoon) {
    return (
      <div className="flip-card">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
          {/* Front of Coming Soon Card */}
          <div 
            className="flip-card" 
            onClick={() => setIsFlipped(!isFlipped)} 
            style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', cursor: 'pointer', borderRadius: '15px'}} 
          />
          {/* Back of Coming Soon Card */}
          <div 
            className="flip-card" 
            onClick={() => setIsFlipped(!isFlipped)} 
            style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', cursor: 'pointer', borderRadius: '15px'}} 
          />
        </ReactCardFlip>
      </div>
    );
  }

  // 2. THE "REAL EVENT" STATE (For when you add 2026 events later)
  return (
    <div className="flip-card">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
        
        {/* FRONT OF REAL CARD */}
        <div 
          className="flip-card" 
          onClick={() => setIsFlipped(!isFlipped)} 
          style={{backgroundImage: `url(${event.frontBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', cursor: 'pointer', borderRadius: '15px'}} 
        />
        
        {/* BACK OF REAL CARD */}
        <div 
          className="flip-card" 
          onClick={() => setIsFlipped(!isFlipped)} 
          style={{backgroundImage: `url(${event.backBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', borderRadius: '15px'}}
        >
          <div style={{textAlign: 'center'}}>
            <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px'}}>{event.title}</p>
          </div>
          
          <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white', overflowY:'auto'}}>
            {event.date && <p style={{color:'white'}}>📅 Date: {event.date}</p>}
            {event.time && <p style={{color:'white'}}>🕒 Time: {event.time}</p>}
            {event.venue && <p style={{color:'white'}}>🏢 Venue: {event.venue}</p>}
            <br/>
            {event.description && event.description.map((desc, index) => (
               <p key={index} style={{color:'white'}}>{desc}</p>
            ))}
          </div>
          
          <div className='register-button' style={{marginTop: 'auto', textAlign: 'center', padding:'10px 0'}}>
            <Button 
              className="register-button" 
              style={{width: '200px', textAlign: 'center', backgroundColor:'black', borderColor: event.themeColor || 'red', fontWeight:'600'}} 
              onClick={(e) => {
                e.stopPropagation(); // Stops the card from flipping when they click register
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