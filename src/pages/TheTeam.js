import React from "react";
import Navigation from '../components/Navigation';
import Team1 from "../components/Team/Team1";
import Faculty from "../components/Team/Faculty";
import Bod from "../components/Team/Bod";
import Footer from "../components/Home/Footer";

const TheTeam = () => {

  return (
    <div className="team-background">
      <div style={{ textAlign: 'center', marginLeft:'5%', marginRight: '10%'}}>
        <Navigation />
        <Team1 />
      </div>
      <br>
      </br>
      <br>
      </br>
      <div style={{textAlign:'center'}}> 
      <text className="team-paragraphtext" style = {{fontSize:'40px', fontWeight:'1000',fontStyle:'normal'}}>OUR PILLARS OF SUPPORT</text>
      </div>
      <br>
      </br>
      <div style={{ textAlign: 'center', marginLeft:'10%', marginRight: '10%'}}>
        <Faculty />
      </div>
      <div>
          <br />
          <br />
          <hr
            style={{
            borderTop: '1px solid lightgrey',
            width: '10%', 
            margin: '0 auto',
            }}
            />
        </div>
      <br>
      </br>

      <div style={{textAlign:'center'}}> 
      <text className="team-paragraphtext" style = {{fontSize:'40px', fontWeight:'1000',fontStyle:'normal'}}>WHHC BOD 2024-2025</text>
      </div>
      <br>
      </br>
      <div style={{ textAlign: 'center', marginLeft:'10%', marginRight: '10%'}}>
        <Bod />
      </div>
      <br></br>
      <div>
        <Footer />
      </div>
    </div>
  )

}

export default TheTeam;