import React, { Component } from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';




class Footer extends Component{

    render(){
        return (
            <div className='footer-div'>
                <div className='social-div'>
                    <SocialIcon url="https://www.youtube.com/user/CityofElizabeth" />
                    <SocialIcon url="https://www.instagram.com/cityofelizabeth/" />
                    <SocialIcon url="https://www.facebook.com/CityOfElizabethNJ/" />
                    <SocialIcon url="https://twitter.com/CityofElizabeth" />
                </div>
                <div className='copyright'>
                    <p>©2019 City Of Elizabeth | Temporary Website</p>
                </div>
            </div>
        )
    }
};


export default Footer;