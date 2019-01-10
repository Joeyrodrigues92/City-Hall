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

// const style = {
//     navBar: {
//         display: 'flex',
//         flexDirection: 'row',
//         width: '500px',
//         position: 'absolute',
//         top: '15px',
//         right: '0px'
//     },
//     navButton:{
//         backgroundColor: 'white',
//         color: 'black',
//         height: '60px',
//         width: '105px',
//         boxShadow: '2px 2px 0 0 black',
//         opacity: 0.8,
//         marginLeft: '15px'
//     },
    // attractionsButton:{
    //     backgroundColor: 'white',
    //     color: 'black',
    //     height: '60px',
    //     width: '105px',
    //     boxShadow: '2px 2px 0 0 black',
    //     opacity: 0.8,
    //     paddingTop: '18px'
    // }
//}
export default NavBar ;

