

import EventCard from "./EventCard";
import tz_ntech_1 from "../../assets/technozarre2k26/tz_ntech_1.png";
import tz_ntech_2 from "../../assets/technozarre2k26/tz_ntech_2.png";
import tz_ntech_3 from "../../assets/technozarre2k26/tz_ntech_3.png";
import tz_ntech_4 from "../../assets/technozarre2k26/tz_ntech_4.png";
import tz_ntech_5 from "../../assets/technozarre2k26/tz_ntech_5.png";
// Later, you can import your real images here!
// import scifi from "../../assets/technozarre2k26/scifi.png";

const NontechEvents = () => {
  
  // THE MASTER CONFIGURATION LIST
  // Right now, we just drop in 6 "Coming Soon" placeholders.
  const eventsList = [
    {
    id: 1,
    isComingSoon: false,
    title: "Shipwreck",
    date: "5/3/2026",
    time: "TBA",
    venue: "BW204",
    category: "Non-Technical",
    description: [
      "Shipwreck is an interesting role-play event where participants imagine they are stuck in a survival situation. Each person is given a character and must explain why they deserve to survive.",
      "Coordinators:",
      "Tharunyaa	9176901886",
      "Priyadarshana Barou	8822483020",
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSe_TfmfEFnJk879HVx-HKZJa-V-Xqc5ZtirE7YLgovAsIVaBg/viewform?usp=header",
    themeColor: "red",
    frontBg: tz_ntech_1,
    backBg: null
  },
  {
    id: 2,
    isComingSoon: false,
    title: "IPL Auction",
    date: "6/3/2026",
    time: "TBA",
    venue: "BW207",
    category: "Non-Technical",
    description: [
      "IPL Auction is a fun strategy based event inspired by the Indian Premier League auction. Participants act as team owners and use a fixed budget to bid for players and build their own team.",
      "Coordinators",
      "Deepak 	9952593845",
      "Tritiksha	9361278600",
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSc2E65Ikn4H0YMRZEsGRWNSr8JIdnTjiUxUPooKh02ckrCchw/viewform?usp=header",
    themeColor: "red",
    frontBg: tz_ntech_2,
    backBg: null
  },
  {
    id: 3,
    isComingSoon: false,
    title: "Scribble",
    date: "6/3/2026",
    time: "TBA",
    venue: "CDC Lab",
    category: "Non-Technical",
    description: [
      "Scribble is a fun and fast drawing game where participants draw a given word or phrase, and others have to guess what it is. You will have limited time, so you need to think quickly and draw smartly!",
      "Coordinators",
      "Nimisha 9176333896",
      "Keerthana 9940992048",
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdnDbfIFYav52cp3s867vyRAiRKfaQyYyuWGUD2HNRHSDW70g/viewform?usp=header",
    themeColor: "red",
    frontBg: tz_ntech_3,
    backBg: null
  },
  {
    id: 4,
    isComingSoon: false,
    title: "Whisper Challenge",
    date: "6/3/2026",
    time: "TBA",
    venue: "TBA",
    category: "Non-Technical",
    description: [
      "Whisper Challenge is a fun and entertaining game based on communication. One participant will wear noise cancelling headphones while another teammate says a word or phrase. The person wearing the headphones must guess the phrase by reading their teammate’s lips.rivia Time is a fun quiz competition where participants answer questions from different topics like technology, general knowledge, pop culture, and current affairs.",
      "Coordinators",
      "Siddhi Chordia 9940656737",
      "Sharada Shyam Sundar 7305972279",
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfi66RsgguBCNKDDoPVn2vYG-SC2lDI4CN_Awql88ixhtMOSg/viewform?usp=header",
    themeColor: "red",
    frontBg: tz_ntech_4,
    backBg: null
  },
  {
    id: 5,
    isComingSoon: false,
    title: "Trivia Trek",
    date: "6/3/2026",
    time: "TBA",
    venue: "TBA",
    category: "Non-Technical",
    description: [
      "Trivia Time is a fun quiz competition where participants answer questions from different topics like technology, general knowledge, pop culture, and current affairs.",
      "Coordinators",
      "P Durga Aditya 9441257646",
      "Syed Shehroz 7010971593",
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfOZJRwo1-yt1k5fsz0e4N3rsAKR6qihSx1LSq1PYpiy3H8-w/viewform?usp=header",
    themeColor: "red",
    frontBg: tz_ntech_5,
    backBg: null
  }

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