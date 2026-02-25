import {Card, CardGroup} from 'react-bootstrap';
import one from '../../assets/gitstarted2024/1.jpeg';
import two from '../../assets/gitstarted2024/2.jpeg';
import three from '../../assets/gitstarted2024/3.jpeg';
import seven from '../../assets/gitstarted2024/4.jpeg';
import five from '../../assets/gitstarted2024/5.jpeg';
import six from '../../assets/gitstarted2024/6.jpeg';


const Gitstarted = () => {

  return (
    <div>
      <div>
        <CardGroup>
          <Card style={{border: 'none', backgroundColor: 'transparent', marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={one} style={{}} className="photogallery-card"/>
          </Card>
          <Card style={{border: 'none', backgroundColor: 'transparent',marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={two} style={{}} className="photogallery-card"/>
          </Card>
          <Card style={{border: 'none', backgroundColor: 'transparent',marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={seven} style={{}} className="photogallery-card"/>
          </Card>
        </CardGroup>
      </div>
      <div style={{paddingTop: '10px'}}>
        <CardGroup>
          <Card style={{border: 'none', backgroundColor: 'transparent', marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={three} style={{}} className="photogallery-card"/>
          </Card>
          <Card style={{border: 'none', backgroundColor: 'transparent',marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={five} style={{}} className="photogallery-card"/>
          </Card>
          <Card style={{border: 'none', backgroundColor: 'transparent',marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={six} style={{}} className="photogallery-card"/>
          </Card>
        </CardGroup>
      </div>
      <div style={{ justifyContent: 'center', marginTop: '30px'}}>
        <div className="home-aboutustext">
          <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '2%', paddingBottom: '2%'}}>
            <p className="home-paragraphtext">
            The White Hat Hackers Club, Department of Computer Science and Engineering (Emerging Technologies), SRMIST, 
            Vadapalani, hosted the workshop "GitStarted: Your Path to Open Source Mastery" on 19/9/24. The event offered hands-on 
            sessions to enhance participants' skills in using GitHub and contributing to open-source projects. The first session covered 
            the basics of open-source collaboration, source control, and Git commands, while the second session provided practical GitHub 
            training, including repository management and GitHub integration with Visual Studio Code. The speakers, Mr. Charan B, a 3rd-year
             student, and Ms. Nethra Hari, a 2nd-year student, shared their expertise on contributing to successful open-source projects
              and leveraging opportunities like Google Summer of Code and Hacktoberfest, emphasizing GitHub's role in academic projects 
              and internships.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Gitstarted;