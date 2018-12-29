import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import Departments from './Departments';
import Council from './Council';
import Vital from './Vital';

class CityHall extends Component{

    render(){
        return (
            <div>
         {/* <div class="wrapper" style={style.wrapper}> */}
        <Vital />
            {/* <div className="main" style={style.main}>
                <Container>
                    <Row>
                        <Col>
                            <h2>Council Members</h2>
                           <hr />
                        </Col>
                    </Row>
                        <div id='council'>
                        <Council />
                        </div>
                    <Row>
                        <Col>
                            <h2>Departments</h2>
                           <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col id='depart'>
                            <Departments />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="sidebar" style={style.sidebar}>
              
                    <Link to='#council'><h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white' }}>Council</h6></Link>
                    <Link to='#depart'><h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white' }}>Departments</h6></Link> */}
                    {/* renders vital stats compts */}
                    {/* <Link to={`${this.props.match.url}/VitalStats`}>Vital</Link> */}

                    {/* <a href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances' style={style.attractionsButton}><h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white' }}>Ordinaces</h6></a>

           
            </div>

            <Route path={`${this.props.match.path}/VitalStats`} component={Vital} /> */}
        </div>
        )
    }
};

const style = {
wrapper: {
        display: 'flex',
        backgroundColor: '#ccc',
        fontFamily: 'sans-serif',
        padding: '10px'
      },
      main: {
        width: '850px',
        height: '100%',
        border: '2px solid black',
        padding: '15px',
        backgroundColor: '#fff'
      },
      sidebar: {
        width: '200px',
        height: '25vh',
        position: '-webkit-sticky',
        position: 'sticky',
        top: '0',
        marginLeft: '20px',
        paddingLeft: '5px',
        paddingRight: '5px',
        paddingTop: '30px',
        border:'2px solid black',
        backgroundColor: 'white'
      }
}

export default CityHall;