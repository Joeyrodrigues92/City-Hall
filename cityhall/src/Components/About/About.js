import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import GarbageBro from '../../PDF/GarbageBro.pdf';
import CarouselC from '../CarouselC';
import './About.css'

const tourBadge = require('../../Images/tour.jpg')


class About extends Component{ 
    render(){
        return (
            <div className='cont'>
                <Container>
                    <Row className='main-wrapper'>
                            <CarouselC/>
                            <Col  className='contact'>
                                <div>
                                    <h2>Contact</h2>
                                    <p id='contact-title'>City Hall</p> 
                                    <p style={{marginBottom: '0px'}}>50 Winfield Scott Plaza</p> 
                                    <p style={{marginBottom: '0px'}}>Elizabeth, NJ 07201</p>
                                    <p style={{marginBottom: '0px'}}><span style={{fontWeight: 'bold'}}>Main Telephone:</span> 908-820-4000</p>
                                    <p><span style={{fontWeight: 'bold'}}>Email:</span> webmaster@elizabethnj.org</p>

                                    <p style={{marginBottom: '0px', fontWeight: 'bold'}}>Elizabeth Police Dept.</p>
                                    <p style={{marginBottom: '0px'}}>One Police Plaza Elizabeth, NJ 07201</p>
                                    <p>(908) 558-2111</p>
                                    
                                    <p style={{marginBottom: '0px', fontWeight: 'bold'}}>Elizabeth Fire Dept.</p>
                                    <p style={{marginBottom: '0px'}}>411 Irvington Ave.</p>
                                    <p style={{marginBottom: '0px'}}>Elizabeth, NJ 07201</p>
                                    <p>(908) 820-2800</p>
                                </div>
                            </Col>
                            <Col  className='quick-links'>
                                {/* Quick Links */}
                                    <h2>Quick Links</h2>
                                    <a style={{fontSize: '25px', marginBottom: '5px'}} href='https://www.goelizabethnj.com/?fbclid=IwAR38ImGIljXYzen6cVpJdpfy0qEICyrWZzST65hg2JMkoZ0Sk-1wpkmjQn0'>Go Elizabeth</a>
                                    <a style={{fontSize: '25px', marginBottom: '5px'}} href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances'>Code Of Ordinances</a>
                                    <a style={{fontSize: '25px', marginBottom: '5px'}} href={GarbageBro}>2019 Garbage and Recycling Brochure</a>
                                    <a style={{fontSize: '25px', marginBottom: '5px'}} href='https://www.facebook.com/pg/CityOfElizabethNJ/events/?ref=page_internal'>Event Calendar</a>                
                                    <Link style={{fontSize: '25px'}} to='/City-Hall/VitalStats'>Vital Statistics</Link>
                                    <div className='socialDiv'>
                                        <SocialIcon url="https://www.youtube.com/user/CityofElizabeth" />
                                        <SocialIcon url="https://www.instagram.com/cityofelizabeth/" />
                                        <SocialIcon url="https://www.facebook.com/CityOfElizabethNJ/" />
                                        <SocialIcon url="https://twitter.com/CityofElizabeth" />
                                    </div>
                            </Col>
                    </Row>
                    <Row className='main-second'>
                        <Col>
                            <h2 style={{textAlign: 'center'}}>It's that time of the year again for the <span style={{color: 'green'}}>16th Annual Tour de Elizabeth</span></h2>
                            <h5 style={{textAlign: 'center'}}><a href=' http://groundworkelizabeth.org/wp-content/uploads/2019/03/2019Reg-TourdeELIZ-form-1.pdf'>Click Here To Fill An Application</a></h5>
                            <h5 style={{textAlign: 'center'}}><a href='https://tourdeeliz16.brownpapertickets.com/'>Click Here To Purchase Ticket Online</a></h5>
                        </Col>
                        <Col id='logo'>    
                            <img src={tourBadge} id='tour'/>
                        </Col>
                    </Row>
                    </Container>
            </div>

        )
    }
};

export default About;