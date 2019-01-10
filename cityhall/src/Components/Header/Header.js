import React, { Component } from 'react';
import './Header.css';
import NavBar from '../Common/NavBar';


class Header extends Component{

    render(){
        return (
            <div className='header-container'>
               <div className='header-text'>
                    <div id='font-top'>The City Of</div>
                    <div id='city-name'>Elizabeth</div>
                    {/* <div id='found'>New Jersey</div> */}
                    <div id='found'>Founded 1664</div>
                </div> 
                <div className='seal-cont'>
                    <img id='seal' src={require('../../Images/COES.jpg')} alt='seal' />
                </div>
                <div className='nav-bar-cont'>
                   <NavBar/>
                </div>
            </div>
        )
    }
};

export default Header;

