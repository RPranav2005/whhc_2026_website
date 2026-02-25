import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import logo from '../../assets/technozarre.png'
import Button from 'react-bootstrap/Button';

const FlagShipEvent = () =>{
  return (
    <CardGroup>
      <Card style={{border: "none", backgroundColor: "transparent"}}>
        <Card.Img variant="top" src={logo} style={{marginTop: '-100px'}}/>
      </Card>
      <Card style={{border: "none", backgroundColor: "transparent"}}>
        <Card.Title style={{textAlign: 'left'}}>
          <text className='home-paragraphtext' style={{fontSize: '25px', fontWeight: '500'}}>OUR FLAGSHIP EVENT</text>
          <br />
          <text className="home-paragraphtext" style={{fontSize: '50px', color: 'white'}}>TECHNOZARRE</text>
        </Card.Title>
        <Card.Body>
          <Card.Text className="home-paragraphtext" style={{fontSize: '20px'}}>
            Our dynamic lineup of workshops and events ensures that everyone in our community is equipped with knowledge in a fun and
            approachable manner. Continue reading to learn more about our workshops, and the flagship event of our club, Technozarre.
            Technozarre is a national level technical symposium held in our campus. With an exciting roster of technical, non-technical
            and gaming events, there’s something for every student.
          </Card.Text>
          <div style={{textAlign: 'left'}}>
            <br/>
            <Button className='photogallery-button' style={{marginTop:'0px' , alignSelf: 'flex-start'}}>View Photo Gallery</Button>
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  )
}

export default FlagShipEvent;