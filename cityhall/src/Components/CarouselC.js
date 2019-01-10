import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const img1 = require('../Images/Carosel/1.jpg')
const img3 = require('../Images/Carosel/3.jpg')
const img4 = require('../Images/Carosel/4.jpg')
const img5 = require('../Images/Carosel/5.jpg')
const img6 = require('../Images/Carosel/6.jpg')
const img7 = require('../Images/Carosel/7.jpg')


class CarouselC extends Component {
    render() {
        return (
            <Carousel 
            autoPlay={true}
            swipeable={false}
            interval={3000}
            stopOnHover={false}
            showThumbs={false}
            >
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                <div>
                    <img src={img6} />
                </div>
                <div>
                    <img src={img7} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselC;