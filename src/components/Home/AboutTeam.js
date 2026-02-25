import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import teambg from '../../assets/cicada2024/1.jpeg';

const AboutTeam = () => {
  return (
    <CardGroup>
      {/* Card for Team Information */}
      <Card style={{ border: "none", backgroundColor: "transparent" }}>
        <Card.Body>
          <div style={{ textAlign: 'center' }}>
            <Card.Title style={{ fontSize: '60px', fontWeight: '700' }}>
              <span style={{ color: 'red' }}>Meet</span> <br />
              <span>our team</span>
            </Card.Title>
            <br />
            <br />
            <br />
            <Card.Text className="home-paragraphtext" style={{fontSize: '23px', textAlign: 'center'}}>
              WHHC is dedicated to growing its community of enthusiastic student developers with a focus on cybersecurity and ethical hacking. 
              We strive to keep our members updated on the latest and advanced technologies, through our interactive workshops and informative publications. 
              Our students gain exceptional insights through seminars featuring industry professionals. These events are made possible through the collaboration of various domains,
              including Technical, Operations, Content, PR, and Design. Their collaboration, dedication, and invaluable inputs result in flawlessly executed events.
            </Card.Text>
            <a href="/team">
              <Button
                className="home-button"
                style={{
                  padding: '10px 20px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  backgroundColor: 'red',
                  fontFamily: 'Helvetica',
                  letterSpacing: '1.5px',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '20px',
                  borderRadius: '20px',
                }}
              >
                Members
              </Button>
            </a>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ border: "none", backgroundColor: "transparent" }}>
        <Card.Img variant="top" src={teambg} style={{ borderRadius: '15px', objectFit: 'cover' }} />
      </Card>
    </CardGroup>
  );
};

export default AboutTeam;