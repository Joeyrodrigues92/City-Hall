import React, { Component } from 'react';
import './Header.css';
import NavBar from '../Common/NavBar';


class Header extends Component{

    render(){
        return (
            <div className='header-container'>
               
                <div className='nav-bar-cont'>
                   <NavBar/>
                </div>

                <div className='textSeal'>
                    <div className='header-text'>
                        <div id='font-top'>The City Of</div>
                        <div id='city-name'>Elizabeth</div>
                        <div id='found'>Founded 1664</div>
                    </div>
                    <div className='sealCont'>
                        <img id='seal' src={require('../../Images/COES.jpg')} alt='seal' />
                    </div>

                </div> 
            </div>
        )
    }
};

export default Header;

