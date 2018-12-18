import React, { Component } from 'react';
import './Header.css';



class Header extends Component{
    render(){
        return (
            <div className='header-container'>
                <div className='header-text'>
                    <div id='font-top'>The City Of</div>
                    <div id='city-name'>Elizabeth</div>
                    <div id='found'>Founded 1664</div>
                </div>
                <div className='seal-cont'>
                    <img id='seal' src={ require('../Images/COES.jpg') } />
                </div>
            </div>
        )
    }
};
const style = {
    headerCont:{
        borderWidth: 5,
        border: 'solid',
        width: '100%',
        height: 150
    }
}
export default Header;

