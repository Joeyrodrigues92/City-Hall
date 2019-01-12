import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './NavBar.css';


// gallman concil President
// grova council at large
//look at site...

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
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle>
                            Menu
                        </DropdownToggle>
                        <DropdownMenu>
                            <Link to='/'><Button  id='button' >Home</Button></Link>
                            <Link to='/Business'><Button id='button' >Business</Button></Link>
                            <Link to='/City-Hall'><Button id='button' >City Hall</Button></Link>
                            <Link to='/Service'><Button id='button' >Services</Button></Link>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>

                <div className='NavBar'>
                    <Link to='/'><Button  id='button' >Home</Button></Link>
                    <Link to='/Business'><Button id='button' >Business</Button></Link>
                    <Link to='/City-Hall'><Button id='button' >City Hall</Button></Link>
                    <Link to='/Service'><Button id='button' >Services</Button></Link>
                </div>
            </div>
        )
    }
}

export default NavBar ;

