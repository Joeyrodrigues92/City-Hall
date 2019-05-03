import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Default from './Default';
import Stormwater from './Stormwater';
import CsoInformation from './CsoInformation';
import './style.css';


class Engineer extends Component{
    constructor (props) {
        super(props)
        this.state = { 
            showComponent: ''
        };
    }

    // componentWillMount=()=>{
    //     this.setState({showComponent: 'engineer'})
    // }

    changeState=(str)=>{
        console.log('function', str)
       this.setState({showComponent: str})
    }

    
    
    render(){
    let comp = <Default/>;
    switch ( this.state.showComponent) {
        case 'stormwater':
           comp = <Stormwater/>;
          break;
        case 'cso information':
           comp = <CsoInformation/>;
          break;
        default:
          comp = <Default/>;
    }

        return (
            <div className="wrapper">
                <div className="main">
                    <Container>
                        <Row>
                            <Col style={{textAlign: 'center'}}>
                                <h1>Engineering</h1> 
                            </Col>
                        </Row>
                        <hr/>
                            <div>
                                {comp}
                            </div> 
                    </Container>

                </div>
                <div className="sidebar">
                    <h6 className="headerSix" >
                        <a style={{color: 'black'}} href='#pubNot' onClick={()=>this.changeState('engineer')}>Engineering</a>
                    </h6>
                        <hr/>
                    <h6 className="headerSix">
                        <a style={{color: 'black'}} href='#RFQP' onClick={()=>this.changeState('stormwater')}>Stormwater</a>
                    </h6>
                        <hr/>
                    <h6 className="headerSix">
                        <a style={{color: 'black'}} href='#WM' onClick={()=>this.changeState('cso information')}>CSO Information</a>
                    </h6>
                        <hr/>
                </div>
            </div>
        )
    }
};




export default Engineer;