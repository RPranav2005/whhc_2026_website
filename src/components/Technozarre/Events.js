import TechnicalEvents from "./TechnicalEvents";
import NontechEvents from "./NontechEvents";
import GamingEvents from "./GamingEvents";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Events = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to target section if state.targetSection exists
    if (location.state?.targetSection) {
      const target = document.getElementById(location.state.targetSection);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
      <div>
        <section id='technical' style={{ marginBottom: '100px' }}>
          <TechnicalEvents />
        </section>
        <section id='nontech' style={{ marginBottom: '100px' }}>
          <NontechEvents />
        </section>
        <section id='gaming' style={{ marginBottom: '100px' }}>
          <GamingEvents />
        </section>
      </div>
  )
}

export default Events;