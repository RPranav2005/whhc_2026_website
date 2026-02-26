

import EventCard from "./EventCard";
import tz_game_1 from "../../assets/technozarre2k26/tz_game_1.png";
import tz_game_2 from "../../assets/technozarre2k26/tz_game_2.png";
import tz_game_3 from "../../assets/technozarre2k26/tz_game_3.png";
// Later, you can import your real images here!
// import scifi from "../../assets/technozarre2k26/scifi.png";

const GamingEvents = () => {
  
  // THE MASTER CONFIGURATION LIST
  // Right now, we just drop in 6 "Coming Soon" placeholders.
  const eventsList = [

    {
    id: 1,
    isComingSoon: false,
    title: "BGMI",
    date: "6/3/2026",
    time: "TBA",
    venue: "BW206",
    category: "Gaming",
    description: [
      "BGMI is a fast-paced battle royale game where players compete to be the last one standing. The game features multiple maps, weapons, and strategies to master.",

      "Coordinators:",
      "Parth 9213387681",
      "Syed Shehroz 7010971593",
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSe1x8oM4Pv-T-jty0BsFYUEHBfpDShQdStpXzUMvyZcFnCuMQ/viewform?usp=header",
    themeColor: "red",
    frontBg: tz_game_1,
    backBg: null
  },
    {
    id: 2,
    isComingSoon: false,
    title: "Valorant",
    date: "6/3/2026",
    time: "TBA",
    venue: "BW202",
    category: "Gaming",
    description: [
      "VALORANT is a tactical shooting game tournament where teams compete in intense matches.",
      "Coordinators:",
      "Princeton Vishal J	9444408022",
      "Vivin K S	9345298959",
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScOPqKCv_zCCL28yPzXOABn_7L1JM6NtkCfvahek00KR-3AjA/viewform?usp=header",
    themeColor: "red",
    frontBg: tz_game_3,
    backBg: null
  },
  {
    id: 3,
    isComingSoon: false,
    title: "FIFA",
    date: "6/3/2026",
    time: "TBA",
    venue: "BW204",
    category: "Gaming",
    description: [
      "FIFA is a virtual football tournament where players compete against each other in digital matches.",
      "Coordinators:",
      "Vinay Krishnan 	9119484680",
      "Atharva Dubey	8178719615",
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScL9WnLyZE5xt5_opVC6eZN55ejLfalKCEQvM2RaxydRBiSOw/viewform?usp=header",
    themeColor: "red",
    frontBg: tz_game_2,
    backBg: null
  },

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
        <span className="technozarre-subtitle" style={{color: 'rgb(255, 50, 50)'}}>GAMING EVENTS</span>
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

export default GamingEvents;