import { Card } from "react-bootstrap";
import { CardGroup} from "react-bootstrap";
import one from '../../assets/technozarre2024/1.JPG';
import two from '../../assets/technozarre2024/2.jpeg';
import three from '../../assets/technozarre2024/3.jpeg';
import four from '../../assets/technozarre2024/4.jpeg';
import five from '../../assets/technozarre2024/5.jpeg';


const Technozarre2k24 = () =>{
  
  return (
    <div >
      <div>
        <CardGroup>
          <Card style={{border: 'none', backgroundColor: 'transparent', marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={one} style={{}} className="photogallery-card"/>
          </Card>
          <Card style={{border: 'none', backgroundColor: 'transparent',marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={four} style={{}} className="photogallery-card"/>
          </Card>
          <Card style={{border: 'none', backgroundColor: 'transparent',marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={three} style={{}} className="photogallery-card"/>
          </Card>
        </CardGroup>
      </div>

      <div style={{paddingTop: '10px'}}>
        <CardGroup>
          <Card  style={{border: 'none', backgroundColor: 'transparent', marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={two} className="photogallery-card" />
          </Card>
          <Card style={{border: 'none', backgroundColor: 'transparent',marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={five} className="photogallery-card" />
          </Card>
        </CardGroup>
      </div>
      <div style={{ justifyContent: 'center', marginTop: '30px'}}>
        <div className="home-aboutustext">
          <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '2%', paddingBottom: '2%'}}>
            <p className="home-paragraphtext">
            Technozarre'24, the 7th edition of our prestigious National Level Technical symposium, was an exhilarating journey into the
             realms of technology and innovation! Hosted by the White Hat Hackers Club (WHHC) of DCSE, SRMIST Vadapalani campus, the event
            on March 15th, 2024, was a testament to our commitment to shaping the future.
            </p>
            <p className="home-paragraphtext">
            With the theme "Escape to the Future", Technozarre'24 offered a diverse array of activities, including workshops, webinars, technical challenges, and gaming competitions. Our esteemed guests, Tmt.
            Ayman Jamal, IPS, Deputy Commissioner of Police, Avadi, and Mr. Sowrirajan Saranathan, Director,
            Comodo Group, graced the inaugural ceremony with their insights and wisdom.
            Tmt. Ayman Jamal emphasized the ethical dimensions of privacy, while Mr. Sowrirajan Saranathan shed light on the critical role of cybersecurity in today's digital landscape. Their speeches ignited discussions and paved the way for fruitful collaborations between SRM IST-Vadapalani and COMODO Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
    

  )

}
export default Technozarre2k24;