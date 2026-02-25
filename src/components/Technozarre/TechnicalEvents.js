import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import comingsoon from "../../assets/technozarre2k25/events/comingsoon.png"
import etreasure_bg from "../../assets/technozarre2k25/events/etreasure_bg.jpg"
import scifi_bg from "../../assets/technozarre2k25/events/scifi_bg.png"
import python_bg from "../../assets/technozarre2k25/events/python_bg.png"
import sqlize_bg from "../../assets/technozarre2k25/events/sqlize_bg.png"
import lucky_bg from "../../assets/technozarre2k25/events/lucky_bg.png"
import zero_bg from "../../assets/technozarre2k25/events/zero_bg.png"
import code_bg from "../../assets/technozarre2k25/events/code_bg.png"
import etreasure from "../../assets/technozarre2k25/events/etreasure.png"
import scifi from "../../assets/technozarre2k25/events/scifi.png"
import python from "../../assets/technozarre2k25/events/python.png"
import sqlize from "../../assets/technozarre2k25/events/sqlize.png"
import lucky from "../../assets/technozarre2k25/events/lucky.png"
import zero from "../../assets/technozarre2k25/events/zero.png"
import code from "../../assets/technozarre2k25/events/code.png"
import bidtocode from "../../assets/technozarre2k25/events/bidtocode.jpeg"
import sih_bg from "../../assets/technozarre2k25/workshops/sih_bg.png"

import { Button } from "react-bootstrap";
import React from "react";
import EventCard from "./EventCard";

// Later, you can import your real images here!
// import scifi from "../../assets/technozarre2k26/scifi.png";

const TechnicalEvents = () => {
  
  // THE MASTER CONFIGURATION LIST
  // Right now, we just drop in 6 "Coming Soon" placeholders.
  const eventsList = [
    { id: 1, isComingSoon: true },
    { id: 2, isComingSoon: true },
    { id: 3, isComingSoon: true },
    { id: 4, isComingSoon: true },
    { id: 5, isComingSoon: true },
    { id: 6, isComingSoon: true },

    /* HOW TO ADD A REAL EVENT LATER:
      Just change `isComingSoon: false` and fill in the blanks!

      { 
        id: 7, 
        isComingSoon: false, 
        title: "Sci-Fi Debate",
        frontBg: scifi,           // The imported front image
        backBg: scifi_bg,         // The imported back image
        themeColor: "#dde67b",    // Controls the glowing button border!
        description: [
          "🚀🗣️ Ready to journey into the future? Join us for the SCI-FI DEBATE! 🛸✨",
          "Bring your best arguments, futuristic flair, and a dash of imagination!"
        ],
        registerLink: "https://forms.gle/..."
      }
    */
  ];

  return (
    <div>
      <div style={{color: 'white', fontSize:'45px', fontWeight:'700', textAlign:'center'}}>
        <span className="technozarre-subtitle" style={{color: 'rgb(255, 50, 50)'}}>TECHNICAL EVENTS</span>
      </div>

      <div className="flip-card-wrapper" >
        {/* This magic loop dynamically generates all your cards! */}
        {eventsList.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalEvents;