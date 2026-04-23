import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import logo from '../../assets/team-overall.jpg';

const Team1 = () =>{
    return(
        <CardGroup>
            <Card style={{border:"none", backgroundColor: "transparent"}}>
                <Card.Title style={{textAlign:'left',marginTop: '10%',marginLeft:'10px'}}>
                    <text className="team-paragraphtext" style = {{fontSize:'50px', fontWeight:'1000',fontStyle:'normal', fontFamily: "'Hunters', sans-serif"}}>MEET OUR TEAM</text>
                </Card.Title>
                <Card.Body>
                    <Card.Text className="team-paragraphtext" style = {{fontSize:'20px'}}>
                    <p >
                        <text style={{color: 'rgb(255, 50, 50)'}}>White Hat Hackers Club</text> is a student-driven technical organization headquartered at  
                        <text style={{color: 'rgb(255, 50, 50)'}}> SRMIST, Vadapalani Campus</text>. The club’s primary objective is to inspire students to delve into the realm of 
                        <text style={{color: 'rgb(255, 50, 50)'}}> cybersecurity and ethical hacking</text>, equipping them with the essential skills for success in this field. We
                        welcome students from diverse backgrounds and skill levels, ranging from beginners to advanced, to refine
                        their abilities. Our main goal is to establish a space where like-minded individuals can initiate discussions
                        about ethical hacking and cybersecurity, leveraging their knowledge to drive meaningful progress. 
                    </p>
                    <p>
                        The strength of the WHHC team lies in the passion and expertise of each member, coming together to form a united force 
                        that drives innovation and excellence in ethical hacking.
                    </p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{border: "none", backgroundColor: "transparent"}}>
                <Card.Img variant="top" src={logo} style={{marginTop: '10%', marginLeft:'10%'}}/>
            </Card>
        </CardGroup>
    )
}

export default Team1;