import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import f1 from '../../assets/team/HOD.png';
import f2 from '../../assets/team/JAYANTHI.jpg';
import f3 from '../../assets/team/PRABHA.png';

const Faculty = () =>{
    return(
        <CardGroup>
            <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
            <Card.Img className= "team-card" variant="top" src={f1} />
            <Card.Body>
            <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                <div className="team-members">
                    <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                        <text style={{color:'white',fontWeight:'1000'}}>Dr. P. Chitra</text>
                        <br></br>
                        <text style={{fontFamily:'monospace'}}>Head of Department</text>
                    </div>
                </div>
            </div>
            </Card.Body>
            </Card>

            <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
            <Card.Img className= "team-card" variant="top" src={f2}/>
            <Card.Body>
            <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                <div className="team-members">
                    <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                        <text style={{color:'white',fontWeight:'1000'}}>Dr. P. Jayanthi</text>
                        <br></br>
                        <text style={{fontFamily:'monospace'}}>Faculty Coordinator</text>
                    </div>
                </div>
            </div>
            </Card.Body>
            </Card>

            <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
            <Card.Img className= "team-card" variant="top" src={f3}/>
            <Card.Body>
            <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                <div className="team-members">
                    <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                        <text style={{color:'white',fontWeight:'1000'}}>Dr. B. Prabha</text>
                        <br></br>
                        <text style={{fontFamily:'monospace'}}>Faculty Coordinator</text>
                    </div>
                </div>
            </div>
            </Card.Body>
            </Card>

        </CardGroup>
    )
}

export default Faculty;