import React, { Component } from 'react';




class Footer extends Component{
    constructor(props) {
        super(props);
    }


    render(){
        return (
            <div style={style.footer}>
            <div className='seal-cont'>
                    <img id='seal' src={require('../Images/COES.jpg')} alt='seal' />
                </div>
            </div>
        )
    }
};
const style={
    footer:{
        position: '-webkit-sticky',
        position: 'sticky',
        bottom: '0',
        width: '100%',
        height: '80px',
        borderTop: '2px solid black',
        background: 'rgb(84,139,190)'
    },
    sealCont:{
        width: '300px',
        height: '200px',
        float: 'right',
        overflow: 'hidden',
    },
    seal:{
        /* max-width: 100%; */
        height: 'auto',
        opacity: '0.1'
    }
    
}

export default Footer;