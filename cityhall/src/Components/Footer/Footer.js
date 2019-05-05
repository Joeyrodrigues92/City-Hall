import React, { Component } from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';




class Footer extends Component{

    render(){
        return (
            <div className='footer-div'>
                <p className='copyright'>©2019 City Of Elizabeth | Temporary Website</p>
            </div>
        )
    }
};


export default Footer;