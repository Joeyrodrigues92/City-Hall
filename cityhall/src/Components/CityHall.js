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
         <div class="wrapper" style={style.wrapper}>
            <div className="main" style={style.main}>
                <Container>
                    <Row>
                        <Col>
                            <h1>City Hall</h1>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col style={{textAlign: 'center', marginBottom: '20px'}}>
                            <h2>Council Members</h2>
                        </Col>
                    </Row>
                        <div id='council'>
                        <Council />
                        </div>
                    <Row>
                        <Col>
                            <h2 id='depart'>Departments</h2>
                           <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Departments />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="sidebar" style={style.sidebar}>
              
                    <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white' }}><a href='#council'>Council</a></h6>
                    <hr/>
                    <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white' }}><a href='#depart'>Departments</a></h6>
                    {/* renders vital stats compts */}
                    <hr/>
                    <Link to={`${this.props.match.url}/VitalStats`}><h6 style={{fontWeight: 'bold'}}>Vital Statistics</h6></Link>
                    <hr />
                    <a href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances' style={style.attractionsButton}><h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white' }}>Ordinaces</h6></a>
                    <hr/>
           
            </div>
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
        width: '950px',
        height: '100%',
        border: '2px solid black',
        padding: '15px',
        backgroundColor: '#fff'
      },
      sidebar: {
        width: '200px',
        height: '100%',
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