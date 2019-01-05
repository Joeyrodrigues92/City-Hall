import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import Carousel from 'react-image-carousel';
import GarbageBro from '../PDF/GarbageBro.pdf';

const img1 = require('../Images/Carosel/1.jpg')
const img3 = require('../Images/Carosel/3.jpg')
const img4 = require('../Images/Carosel/4.jpg')
const img5 = require('../Images/Carosel/5.jpg')
const img6 = require('../Images/Carosel/6.jpg')
const img7 = require('../Images/Carosel/7.jpg')

let images = [
    img1,
    img3,
    img4,
    img5,
    img6,
    img7
];

class About extends Component{

 

    render(){
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div style={{  display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <Carousel 
                                    images={images} 
                                    thumb={true}
                                    loop={true}
                                    autoplay={3000}
                                />
                                <div style={{width: '300px', height:'400px', position: 'absolute',top:'50px', left: '180px', opacity: '0.7',backgroundColor: 'white', textAlign:'center' }}>
                                    <h2>Helpful Links</h2>
                                </div>
                                <div style={{ display: 'flex', flexDirection:'column', width: '300px', height:'400px', position: 'absolute',top:'50px', right: '180px', opacity: '0.7',backgroundColor: 'white', textAlign:'center'}}>
                                    <h2>Quick Links</h2>
                                    <a style={{fontSize: '25px'}} href='https://www.goelizabethnj.com/?fbclid=IwAR38ImGIljXYzen6cVpJdpfy0qEICyrWZzST65hg2JMkoZ0Sk-1wpkmjQn0'>Go Elizabeth</a>
                                    <a style={{fontSize: '25px'}} href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances'>Code Of Ordinances</a>
                                    <a style={{fontSize: '25px'}} href={GarbageBro}>2019 Garbage and Recycling Brochure</a>
                                    <a style={{fontSize: '25px'}} href='https://www.facebook.com/pg/CityOfElizabethNJ/events/?ref=page_internal'>Event Calendar</a>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
};

export default About;