import React, { Component } from 'react';
import { Button } from 'reactstrap';


class NavButton extends Component{
    constructor(props) {
        super(props);
       
    }


    render(){


    
        return (
            <div>
                <a style={style.button}>primary</a>

            </div>
        )
    }
};

const style ={
    button:{
        backgroundColor: rgb(66,140,127),
        color: 'blue',
        height: '90px', 
        margin: '5px',  
        boxShadow: 
        '100px 2px 0 0 black',
        opacity: 0.8,
        width: '105px'

    }
}
export default NavButton;