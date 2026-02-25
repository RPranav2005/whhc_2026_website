import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import cine_connect_bg from "../../assets/technozarre2k25/events/cine_connect_bg.png"
import ipl_bg from "../../assets/technozarre2k25/events/ipl_bg.png"
import whisper_bg from "../../assets/technozarre2k25/events/whisper_bg.png"
import pickleball_bg from "../../assets/technozarre2k25/events/pickleball_bg.png"
import picture_bg from "../../assets/technozarre2k25/events/picture_bg.png"
import treasure_bg from "../../assets/technozarre2k25/events/treasure_bg.png"
import scribble_bg from "../../assets/technozarre2k25/events/scribble_bg.png"
import ipl from "../../assets/technozarre2k25/events/ipl.png"
import whisper from "../../assets/technozarre2k25/events/whisper.png"
import pickleball from "../../assets/technozarre2k25/events/pickleball.png"
import picture from "../../assets/technozarre2k25/events/picture.png"
import treasure from "../../assets/technozarre2k25/events/treasure.png"
import scribble from "../../assets/technozarre2k25/events/scribble.png"
import cine_connect from "../../assets/technozarre2k25/events/cine_connect.png"

import { Button } from "react-bootstrap";

import EventCard from "./EventCard";

// Later, you can import your real images here!
// import scifi from "../../assets/technozarre2k26/scifi.png";

const NontechEvents = () => {
  
  // THE MASTER CONFIGURATION LIST
  // Right now, we just drop in 6 "Coming Soon" placeholders.
  const eventsList = [
    { id: 1, isComingSoon: true },
    { id: 2, isComingSoon: true },
    { id: 3, isComingSoon: true },
    { id: 4, isComingSoon: true },
    { id: 5, isComingSoon: true },
    { id: 6, isComingSoon: true },
    { id: 7, isComingSoon: true },

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
        <span className="technozarre-subtitle" style={{color: 'rgb(255, 50, 50)'}}>NON TECHNICAL EVENTS</span>
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

export default NontechEvents;