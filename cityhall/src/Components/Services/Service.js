import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import GarbageBro from '../../PDF/GarbageBro.pdf';
import ZoneMap from '../../PDF/zone.pdf';
import MunID from '../../PDF/MunicipalID.pdf'
import IosImg from '../../Images/appstore.png';
import DroidImg from '../../Images/google.png';
import ElizReports from '../../Images/ElizReports.png';
import GovPilot from '../../Images/govp.png';
import RecycleCo from '../../Images/rcycleco.png';
import RecycleLo from '../../Images/recycle.jpg';
import ZoneIcon from '../../Images/zonemap.png';

import './Service.css';

class Service extends Component{

    render(){
        return (
            <div id="wrapper">
                <div className="main">
                    <Container className='container'>
                        <Row>
                            <Col style={{textAlign: 'center'}}>
                                <h1>Services</h1>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <h2 id='app'>Applications</h2>
                            <br/>
                        </Row>
                        <Row>
                            <Col>                                    <h5><a href='https://main.govpilot.com/web/public/4b6784e4-0bc.html?id=0&uid=7414&pu=1&ust=NJ&ts=Thu%20Jun%2007%202018%2016:33:16%20GMT-0400%20(Eastern%20Daylight%20Time)'><img alt='IosImage' style={{marginRight:'5px'}} src={GovPilot}/>Dog License Application</a></h5>
                                <br/>
                                <h5><a href='https://main.govpilot.com/web/?id=157&ust=NJ' target='_blank'><img alt='Gov Pilot' style={{marginRight:'5px'}} src={GovPilot}/>GOV Pilot GIS Maps</a></h5>
                                <br/>
                                <h5><a href={GarbageBro}><img alt='RcycleLo' style={{marginRight:'5px'}} src={RecycleLo}/>2019 Garbage and Recycling Brochure</a></h5>                            
                                <br/>
                                <a href={ZoneMap}><h5 style={{marginTop: '10px'}}><img alt='Zone Icon' style={{marginRight:'5px'}} src={ZoneIcon}/>Elizabeth Zoning Map</h5></a>
                           </Col>
                            <Col>
                                <h5><a href='https://main.govpilot.com/web/public/e54331af-4bf.html?id=0&uid=7414&pu=1&ust=NJ&ts=Wed%20May%2023%202018%2009:06:43%20GMT-0400%20(Eastern%20Daylight%20Time)'><img alt='Elizabeth Reports' style={{marginRight:'5px'}} src={ElizReports}></img>Report a Concern</a></h5>
                                <br/>
                                <h5><a href='https://solutions.recyclecoach.com/'><img alt='Recycle Coach' style={{marginRight:'5px'}} src={RecycleCo}/>Recycle Coach</a></h5>
                                <p> Recycle Coach is available to download from the Google Play Store and Apple App Store</p>
                                <a href='https://itunes.apple.com/us/app/recycle-coach/id1071714967?mt=8'><img alt='IosImage' src={IosImg}/></a>
                                <a href='https://play.google.com/store/apps/details?id=mobi.recyclecoach.worldster.pack&hl=en_CA'><img alt='AndroidImage' src={DroidImg}/></a>                            
                            </Col>
                        </Row>
                    
                        <hr />
                        <Row>
                            <Col style={{ textAlign: 'center'}}>
                                <h2 id='emip'>Elizabeth Municipal ID Program</h2>
                                <p>On November 9, 2016, the Elizabeth City Council passed a city ordinance implementing the City of Elizabeth Municipal Identification Card
                                    Program (EMID).  As the fourth largest municipality in New Jersey, this initiative supports our growing, diverse population. 
                                </p>
                                <p>For our residents, the EMID program provides increased access to civic and economic services.  The Identification Card can be obtained at the Elizabeth Public Library Main Branch, which is located at 11 Broad Street within the City of Elizabeth.  It is available to all residents of Elizabeth, including but not limited to: immigrants, the homeless as well as the formerly incarcerated and others who may have difficulty in obtaining government-issued identification.</p>
                                <p>The EMID serves as an official form of photo identification and therefore will be recognized at any public institution within the City of Elizabeth including, but not limited to: schools, the police department and municipal court.  The EMID Program is proud to partner with many local businesses, banks and the Elizabeth Public Library.  In addition, the EMID can be used as a library card.  </p>
                                <h6>TO VIEW THE BROCHURE IN ENGLISH, <a href={MunID} target='_blank'>CLICK HERE.</a></h6>

                                <br/>
                                <p style={{fontWeight: 'bold', marginBottom: '0px'}}><u>EMID and Elizabeth Public Library Program Scheduling Appointments</u></p>
                                <p>For more information, please email: emid@elizabethnj.org or call 908-820-4298</p>
                                <p style={{fontWeight: 'bold', marginBottom: '0px'}}><u>EMID ID and Library Card Application Processing</u></p>
                                <p>11 South Broad Street, Second Floor, Elizabeth, New Jersey 07202</p>
                                <h6>TO VIEW OR DOWNLOAD THE APPLICATION, <a href=''>CLICK HERE.</a></h6>
                                <h6>TO VIEW OR DOWNLOAD THE APPLICATION IN SPANISH, <a href=''>CLICK HERE.</a></h6>
                                <br/>
                                <p style={{fontWeight: 'bold'}}>Hours Of Operation:</p>
                                <p>Monday through Thursday</p>
                                <p>2:00 p.m. to 7:00 p.m.</p>
                                <p>Saturdays </p>
                                <p>10:00 a.m. to 3:00 p.m.</p>
                                <p style={{fontWeight: 'bold'}}>(Hours of operation may be affected by inclement weather or other unplanned circumstances)</p>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col style={{ textAlign: 'center'}}>
                                <h2 id='aging'>Office on Aging</h2>
                                <p>The Office on Aging sponsors a number of programs, activities, and services that provide assistance to senior citizens and disabled residents of Elizabeth. In order to process applications correctly, it is highly advisable to contact the office regarding the eligibility guidelines and the necessary documents required. Please note that income guidelines and documents are subject to change. The Office on Aging is located at City Hall on the ground floor (Room G-8) at 50 Winfield Scott Plaza. Inquiries concerning services may be made by calling (908) 820-4045 or 820-4044.</p>
                                <p style={{marginBottom: '0px', fontWeight: 'bold'}}>Alonzo Jones</p>
                                <p style={{marginBottom: '0px', fontWeight: 'bold'}}>Phone: (908) 820-4044</p>
                                <p style={{fontWeight: 'bold'}}>Email: Ajones@elizabethnj.org</p>
                                <p>Senior Citizen Centers offer a weekly nutritional program, daily activities, and monthly planned trips, please call the centers for further details:</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                O'Donnell Dempsey 622 Salem Avenue Elizabeth, NJ 07208 (908) 354-7431
                            </Col>
                            <Col>
                                Stephen Sampson 800 Anna Street Elizabeth, NJ 07201 (908) 820-4707  
                            </Col>
                            <Col> 
                                Liberty Square Senior Center 240 Elizabeth Avenue Elizabeth, NJ 07206 (908) 820-4700 
                            </Col>
                            <Col>
                                Peterstown Community Center* 418 Palmer Street Elizabeth, NJ 07202 (908) 820-4288 <br/> <span style={{fontWeight: 'bold'}}>In accordance with the City of Elizabeth Recreation Department</span>
                            </Col>
                            <Col>
                            <span style={{fontWeight: 'bold'}}>MAIN OFFICE</span> Elizabeth City Hall Room G8 50 Winfield Scott Plaza Elizabeth, NJ 07201 (908) 820-4045
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col style={{ textAlign: 'center'}}>
                                <h2 id='youth'>Youth Services </h2>
                                <h5>The Mission of the Office of Youth Services (O.Y.S.)</h5>
                                <p>The Office of Youth Services promotes youth development, improve the conditions for children, and identify resources within the community. The O.Y.S. also encourages support strategies to allow children/youth to recognize their highest potential, promote continuous collaboration with community groups and agencies. The Office of Youth assist in establishing and expanding programs and services for the youth and encourage them to be contributing members within their communities. The Office of Youth Services serves as a central point of information in Elizabeth for youth- related issues.</p>
                                <p>The success of these programs has been measured in the achievement of academic excellence, increased volunteerism, participation in community-oriented events, choosing of healthy and positive alternatives, and an overall improved quality of life.</p>
                                <p>The Office of Youth Services operates youth-oriented programs, which include, but are not limited to S.O.A.R., Safe Haven, and the Building Future Leaders Program. These initiatives are unique and innovative because they address quality of life issues impacting the youth of the City of Elizabeth holistically. The programs assist younger children within the city through mentoring and project interaction with members of the community. These youth-oriented programs focus upon honing skills, wellness and healthy living, as well as positive alternatives to achieving success. These valuable services include the coordination of daily activities and the implementation of forums that address youth development, health, violence prevention, problem solving, self-esteem building, substance abuse, sexually transmitted diseases, adolescent/teenage pregnancy prevention and after-school activities.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{marginBottom: '0px', fontWeight: 'bold'}}>Donald M. Johnson, Supervisor</p>
                                <p style={{marginBottom: '0px', fontWeight: 'bold'}}>Phone: (908) 820-4032</p>
                                <p style={{fontWeight: 'bold'}}>Email: djohnson@elizabethnj.org</p>
                            </Col>
                        </Row>
                    </Container>
                </div>            
            <div className="sidebar">
                <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white', marginBottom:'0px'}}><a style={{color: 'black'}} href='#app'>Applications</a></h6>
                <hr/>
                <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white', marginBottom:'0px' }}><a style={{color: 'black'}}  href='#garbage'>Garbage & Recycling Brochure</a></h6>
                <hr/>
                <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white', marginBottom:'0px' }}><a style={{color: 'black'}}  href='#emip'>Elizabeth Municipal ID Program</a></h6>
                <hr />
                <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white', marginBottom:'0px' }}><a style={{color: 'black'}}  href='#aging'>Office on Aging</a></h6>
                <hr/>
                <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white', marginBottom:'0px' }}><a style={{color: 'black'}}  href='#youth'>Office of Youth</a></h6>
                <hr/>
            </div>
        </div>
        )
    }
};

export default Service;