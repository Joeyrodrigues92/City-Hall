import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const img1 = require('../Images/Carosel/1.jpg')
const img3 = require('../Images/Carosel/3.jpg')
const img4 = require('../Images/Carosel/4.jpg')
const img5 = require('../Images/Carosel/5.jpg')
const img6 = require('../Images/Carosel/6.jpg')
const img7 = require('../Images/Carosel/7.jpg')
const img8 = require('../Images/Carosel/8.jpg')
const img9 = require('../Images/Carosel/9.jpg')
const img11 = require('../Images/Carosel/11.jpg')


class CarouselC extends Component {
    render() {
        return (
            <Carousel 
            autoPlay={true}
            swipeable={false}
            interval={10000}
            stopOnHover={false}
            showThumbs={false}
            showStatus={false}
            dynamicHeight={756}
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
                <div>
                    <img src={img8} />
                </div>
                <div>
                    <img src={img9} />
                </div>
                <div>
                    <img src={img11} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselC;