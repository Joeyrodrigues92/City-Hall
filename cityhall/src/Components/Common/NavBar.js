import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';


class NavBar extends Component{

    render(){
        return(
            <div style={style.navBar}>
                <Link to='/'><Button style={style.navButton}>Home</Button></Link>
                <Button href='https://www.goelizabethnj.com/?fbclid=IwAR38ImGIljXYzen6cVpJdpfy0qEICyrWZzST65hg2JMkoZ0Sk-1wpkmjQn0
' style={style.attractionsButton}>Attractions</Button>
                <Link to='/Business'><Button style={style.navButton}>Business</Button></Link>
                <Link to='/City-Hall'><Button style={style.navButton}>City Hall</Button></Link>
                <Link to='/Community'><Button style={style.navButton}>Community</Button></Link>
                <Link to='/Service'><Button style={style.navButton}>Service</Button></Link>
            </div>
        )
    }
}

const style = {
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '90px',
        justifyContent: 'space-evenly',
        width: '700px',
        marginLeft: '350px'
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

