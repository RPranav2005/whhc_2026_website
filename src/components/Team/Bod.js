import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import b1 from '../../assets/team/sundari avanthikaa.jpg';
import b2 from '../../assets/team/Anirudh.jpeg';
import b3 from '../../assets/team/Pranav.jpeg';
import b4 from '../../assets/team/abishek.jpeg';
import b5 from '../../assets/team/Janagar.jpg';
import b6 from '../../assets/team/Kalaiselvan.jpg';
import b7 from '../../assets/team/Preetha_.jpg';
import b8 from '../../assets/team/Mohammed Azhaar .jpg';
import b9 from '../../assets/team/Shreeja Katama.jpg';
import b10 from '../../assets/team/Nayel Ahmed.jpeg';
import b11 from '../../assets/team/Nancy Christina KV.jpeg';
import b12 from '../../assets/team/Dev Shah.jpg';
import b13 from '../../assets/team/Prathik S.JPG';

const Bod = () =>{
    return(
        <div>
        <div>
            <CardGroup>
                <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
                <Card.Img className= "team-card" variant="top" src={b1} />
                <Card.Body>
                <CardGroup>
                <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.instagram.com/avisrini_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                    <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.linkedin.com/in/avanthikaa-srini/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                </CardGroup>
                <br></br>
                <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                    <div className="team-members">
                        <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                            <text style={{color:'white',fontWeight:'1000'}}>Sundari Avanthikaa</text>
                            <br></br>
                            <text style={{fontFamily:'monospace'}}>President</text>
                        </div>
                    </div>
                </div>
                </Card.Body>
                </Card>

                <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
                <Card.Img className= "team-card" variant="top" src={b2}/>
                <Card.Body>
                <CardGroup>
                <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.instagram.com/ani_basic_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                    <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.linkedin.com/in/anirudhakadark/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                </CardGroup>
                <br></br>
                <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                    <div className="team-members">
                        <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                            <text style={{color:'white',fontWeight:'1000'}}>Anirudh Sowrirajan</text>
                            <br></br>
                            <text style={{fontFamily:'monospace'}}>Vice President</text>
                        </div>
                    </div>
                </div>
                </Card.Body>
                </Card>

                <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
                <Card.Img className= "team-card" variant="top" src={b3}/>
                <Card.Body>
                <CardGroup>
                <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.instagram.com/_pranavsrini_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                    <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.linkedin.com/in/pranav-srinivasan-47a15827a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                </CardGroup>
                <br></br>
                <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                    <div className="team-members">
                        <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                            <text style={{color:'white',fontWeight:'1000'}}>Pranav Srinivasan</text>
                            <br></br>
                            <text style={{fontFamily:'monospace'}}>Secretary & Treasurer</text>
                        </div>
                    </div>
                </div>
                </Card.Body>
                </Card>

            </CardGroup>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <CardGroup>
            <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
            <Card.Img className= "team-card" variant="top" src={b4} />
            <Card.Body>
            <CardGroup>
                <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.instagram.com/abishek_senthil_kumar/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                    <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.linkedin.com/in/abisheksenthilkumar/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                </CardGroup>
                <br></br>
            <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                <div className="team-members">
                    <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                        <text style={{color:'white',fontWeight:'1000'}}>Abhishek Senthil Kumar</text>
                        <br></br>
                        <text style={{fontFamily:'monospace'}}>Head of Design</text>
                    </div>
                </div>
            </div>
            </Card.Body>
            </Card>

            <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
            <Card.Img className= "team-card" variant="top" src={b5}/>
            <Card.Body>
            <CardGroup>
                <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.instagram.com/janagarjoe_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                    <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.linkedin.com/company/white-hat-hackers-club/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                </CardGroup>
                <br></br>
            <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                <div className="team-members">
                    <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                        <text style={{color:'white',fontWeight:'1000'}}>Janagar K M</text>
                        <br></br>
                        <text style={{fontFamily:'monospace'}}>Head of Resource Management</text>
                    </div>
                </div>
            </div>
            </Card.Body>
            </Card>

            <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
            <Card.Img className= "team-card" variant="top" src={b6}/>
            <Card.Body>
            <CardGroup>
                <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.instagram.com/kalaiselvan_007/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                    <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.linkedin.com/company/white-hat-hackers-club/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                </CardGroup>
                <br></br>
            <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                <div className="team-members">
                    <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                        <text style={{color:'white',fontWeight:'1000'}}>Kalaiselvan</text>
                        <br></br>
                        <text style={{fontFamily:'monospace'}}>Head of Working Committee</text>
                    </div>
                </div>
            </div>
            </Card.Body>
            </Card>

        </CardGroup>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <CardGroup>
            <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>

            </Card>
            <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
            <Card.Img className= "team-card" variant="top" src={b7} />
            <Card.Body>
            <CardGroup>
                <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.instagram.com/preethavaradarajan/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                    <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.linkedin.com/in/preetha-varadarajan-a60786262/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                </CardGroup>
                <br></br>
            <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                <div className="team-members">
                    <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                        <text style={{color:'white',fontWeight:'1000'}}>Preetha V</text>
                        <br></br>
                        <text style={{fontFamily:'monospace'}}>Head of Outreach</text>
                    </div>
                </div>
            </div>
            </Card.Body>
            </Card>
            <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>

            </Card>
        </CardGroup>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <CardGroup>
                <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
                <Card.Img className= "team-card" variant="top" src={b8} />
                <Card.Body>
                <CardGroup>
                <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.instagram.com/azhaar1188/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                    <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.linkedin.com/company/white-hat-hackers-club/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                </CardGroup>
                <br></br>
                <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                    <div className="team-members">
                        <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                            <text style={{color:'white',fontWeight:'1000'}}>Mohammed Azhaar</text>
                            <br></br>
                            <text style={{fontFamily:'monospace'}}>Joint Treasurer</text>
                        </div>
                    </div>
                </div>
                </Card.Body>
                </Card>

                <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
                <Card.Img className= "team-card" variant="top" src={b9}/>
                <Card.Body>
                <CardGroup>
                <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.instagram.com/shreeja_katama/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                    <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.linkedin.com/in/shreeja-katama-89b186283/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                </CardGroup>
                <br></br>
                <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                    <div className="team-members">
                        <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                            <text style={{color:'white',fontWeight:'1000'}}>Shreeja Katama</text>
                            <br></br>
                            <text style={{fontFamily:'monospace'}}>Joint Technical Head</text>
                        </div>
                    </div>
                </div>
                </Card.Body>
                </Card>
                <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
                <Card.Img className= "team-card" variant="top" src={b11} />
                <Card.Body>
                <CardGroup>
                <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.instagram.com/nancyy_1355/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                    <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.linkedin.com/company/white-hat-hackers-club/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                </CardGroup>
                <br></br>
                <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                    <div className="team-members">
                        <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                            <text style={{color:'white',fontWeight:'1000'}}>Nancy Christina</text>
                            <br></br>
                            <text style={{fontFamily:'monospace'}}>Joint Head of Design</text>
                        </div>
                    </div>
                </div>
                </Card.Body>
                </Card>

            </CardGroup>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <CardGroup>

                <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
                <Card.Img className= "team-card" variant="top" src={b10}/>
                <Card.Body>
                <CardGroup>
                <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.instagram.com/nayel888/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                    <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.linkedin.com/in/nayel-ahmed-587783261/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                </CardGroup>
                <br></br>
                <div style={{ textAlign: 'center', marginLeft: '3%', marginRight: '3%'}}>
                    <div className="team-members">
                        <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                            <text style={{color:'white',fontWeight:'1000'}}>Nayel Ahmed</text>
                            <br></br>
                            <text style={{fontFamily:'monospace'}}>Joint Head of Operations & Logistics</text>
                        </div>
                    </div>
                </div>
                </Card.Body>
                </Card>

                <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
                <Card.Img className= "team-card" variant="top" src={b12}/>
                <Card.Body>
                <CardGroup>
                <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.instagram.com/dev__shah_19/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                    <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.linkedin.com/in/dev-shah-661a7a340/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                </CardGroup>
                <br></br>
                <div style={{ textAlign: 'center', marginLeft: '0%', marginRight: '0%'}}>
                    <div className="team-members">
                        <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                            <text style={{color:'white',fontWeight:'1000'}}>Dev Shah</text>
                            <br></br>
                            <text style={{fontFamily:'monospace'}}>Joint Head of Working Committee</text>
                        </div>
                    </div>
                </div>
                </Card.Body>
                </Card>
                
                <Card style={{border: "none",backgroundColor:"transparent", marginLeft:'25px', marginRight:'25px'}}>
                <Card.Img className= "team-card" variant="top" src={b13}/>
                <Card.Body>
                <CardGroup>
                <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.instagram.com/prathik_.07/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                    <Card style={{ backgroundColor:"transparent" }} onMouseOver={(e) => e.target.style.color = 'purple'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <a href="https://www.linkedin.com/in/prathik-jain-3b8901292/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: 'white', fontSize: '45px' }} />
                    </a>
                    </Card>
                </CardGroup>
                <br></br>
                <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                    <div className="team-members">
                        <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '5%', paddingBottom: '5%'}}>
                            <text style={{color:'white',fontWeight:'1000'}}>Prathik S</text>
                            <br></br>
                            <text style={{fontFamily:'monospace'}}>Joint Head of Outreach</text>
                        </div>
                    </div>
                </div>
                </Card.Body>
                </Card>

            </CardGroup>
        </div>
        </div>
    )
}

export default Bod;