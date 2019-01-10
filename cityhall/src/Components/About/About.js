import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'reactstrap';
import Carousel from 'react-image-carousel';
import GarbageBro from '../../PDF/GarbageBro.pdf';
import { SocialIcon } from 'react-social-icons';
import CarouselC from '../CarouselC';
import './About.css'


const img1 = require('../../Images/Carosel/1.jpg')
const img3 = require('../../Images/Carosel/3.jpg')
const img4 = require('../../Images/Carosel/4.jpg')
const img5 = require('../../Images/Carosel/5.jpg')
const img6 = require('../../Images/Carosel/6.jpg')
const img7 = require('../../Images/Carosel/7.jpg')

let images = [
    img1,
    img3,
    img4,
    img5,
    img6,
    img7,
];

class About extends Component{
    render(){
        return (
            <div className='cont'>
                <Container>
                    <Row className='main-wrapper'>
                            <CarouselC/>
                            <Col  className='contact'>
                                {/* Contact */}
                                    <h2>Contact</h2>
                                    <p id='contact-title'>City Hall</p> 
                                    <p style={{marginBottom: '0px'}}>50 Winfield Scott Plaza</p> 
                                    <p style={{marginBottom: '0px'}}>Elizabeth, NJ 07201</p>
                                    <p style={{marginBottom: '0px'}}><span style={{fontWeight: 'bold'}}>Main Telephone:</span> 908-820-4000</p>
                                    <p><span style={{fontWeight: 'bold'}}>Email:</span> webmaster@elizabethnj.org</p>

                                    <p style={{marginBottom: '0px', fontWeight: 'bold'}}>Elizabeth Police Dept.</p>
                                    <p style={{marginBottom: '0px'}}>One Police Plaza Elizabeth, NJ 07201</p>
                                    <p>(908) 558-2000</p>
                                    
                                    <p style={{marginBottom: '0px', fontWeight: 'bold'}}>Elizabeth Fire Dept.</p>
                                    <p style={{marginBottom: '0px'}}>411 Irvingtong Ave.</p>
                                    <p style={{marginBottom: '0px'}}>Elizabeth, NJ 07201</p>
                                    <p>(908) 820-2800</p>
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
                            {/* </div> */}
                    </Row>
                </Container>
            </div>

        )
    }
};

export default About;