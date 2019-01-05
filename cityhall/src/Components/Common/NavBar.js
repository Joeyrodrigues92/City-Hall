import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';


// gallman concil President
// grova council at large
//look at site...

class NavBar extends Component{

    render(){
        return(
            <div style={style.navBar}>
                <Link to='/'><Button style={style.navButton}>Home</Button></Link>
                {/* <Button href='https://www.goelizabethnj.com/?fbclid=IwAR38ImGIljXYzen6cVpJdpfy0qEICyrWZzST65hg2JMkoZ0Sk-1wpkmjQn0
'               style={style.attractionsButton}>Attractions</Button> */}
                <Link to='/Business'><Button style={style.navButton}>Business</Button></Link>
                <Link to='/City-Hall'><Button style={style.navButton}>City Hall</Button></Link>
                <Link to='/Community'><Button style={style.navButton}>Community</Button></Link>
                <Link to='/Service'><Button style={style.navButton}>Services</Button></Link>
            </div>
        )
    }
}

const style = {
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '700px',
        position: 'absolute',
        top: '15px',
        right: 0
    },
    navButton:{
        backgroundColor: 'white',
        color: 'black',
        height: '60px',
        width: '105px',
        boxShadow: '2px 2px 0 0 black',
        opacity: 0.8,
    },
    attractionsButton:{
        backgroundColor: 'white',
        color: 'black',
        height: '60px',
        width: '105px',
        boxShadow: '2px 2px 0 0 black',
        opacity: 0.8,
        paddingTop: '18px'
    }

}
export default NavBar ;

