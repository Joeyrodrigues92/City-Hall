import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';




class Footer extends Component{

    render(){
        return (
            <div style={style.footer}>
                <div style={style.social}>
                    <SocialIcon url="https://www.youtube.com/user/CityofElizabeth" />
                    <SocialIcon url="https://www.instagram.com/cityofelizabeth/" />
                    <SocialIcon url="https://www.facebook.com/CityOfElizabethNJ/" />
                    <SocialIcon url="https://twitter.com/CityofElizabeth" />
                </div>
            </div>
        )
    }
};
const style={
    footer:{
        // position: '-webkit-sticky',
        // position: 'sticky',
        // bottom: '0',
        width: '100%',
        height: '80px',
        borderTop: '1px solid rgb(235,191,83)',
        background: 'rgb(72,140,126)'
    },
    social:{
        // border: '2px solid yellow',
        width: '225px',
        height: '100%',
        float: 'right',
        marginRight: '100px',
        paddingTop: '10px',
        display: 'flex',
        justifyContent: 'space-between'
    }
    
}

export default Footer;