
import { Card } from "react-bootstrap";
import {CardGroup} from "react-bootstrap";


const WhatWeDoCard = () => {
  return (
    <CardGroup>
      <Card style={{border: "none", backgroundColor: "transparent"}}>
        <Card.Title className="whatwedotitle">100+</Card.Title>
        <Card.Text className="whatwedotext">Events Conducted</Card.Text>
      </Card>
      <Card style={{border: "none", backgroundColor: "transparent"}}>
        <Card.Title className="whatwedotitle">100+</Card.Title>
        <Card.Text className="whatwedotext">Club Members</Card.Text>
      </Card>
      <Card style={{border: "none", backgroundColor: "transparent"}}>
        <Card.Title className="whatwedotitle">5</Card.Title>
        <Card.Text className="whatwedotext">Campus Ambassadors</Card.Text>
      </Card>
      <Card style={{border: "none", backgroundColor: "transparent"}}>
        <Card.Title className="whatwedotitle">3</Card.Title>
        <Card.Text className="whatwedotext">Meetups</Card.Text>
      </Card>
    </CardGroup>
  )
}

export default WhatWeDoCard;