import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import './NavBar.css';
import NavStack from '../../Images/triplestack.png';


class NavBar extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    render(){
        return(
            <div>
                <div className='dropDown'>
                    <ButtonDropdown  direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle style={{width: '60px',color: 'rgb(169,64,41)', backgroundColor: 'white'}}>
                            <img id='navStack' src={NavStack} style={{height:'30px', width: '30px'}}></img>
                        </DropdownToggle>
                        <DropdownMenu style={{float:'left'}}>
                            <Link to='/'><Button  id='button' >Home</Button></Link>
                            <Link to='/Business'><Button id='button' >Business</Button></Link>
                            <Link to='/City-Hall'><Button id='button' >City Hall</Button></Link>
                            <Link to='/Service'><Button id='button' >Services</Button></Link>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>

                <div className='NavBar'>
                    <Link to='/'><Button  id='hvr-grow' >Home</Button></Link>
                    <Link to='/Business'><Button id='hvr-grow' >Business</Button></Link>
                    <Link to='/City-Hall'><Button id='hvr-grow' >City Hall</Button></Link>
                    <Link to='/Service'><Button id='hvr-grow' >Services</Button></Link>
                </div>
            </div>
        )
    }
}

export default NavBar ;

