import React, { Component } from 'react';
import { Button } from 'reactstrap';


class NavButton extends Component{
    constructor(props) {
        super(props);
       
    }


    render(){


    
        return (
            <div>
                <Button color="primary">primary</Button>

            </div>
        )
    }
};

const style ={
    button:{
        backgroundColor: 'white',
        color: 'black',
        height: '90px', 
        margin: '5px',  
        boxShadow: 
        '2px 2px 0 0 black',
        opacity: 0.8,
        width: '105px'

    }
}
export default NavButton;