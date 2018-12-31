import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from 'reactstrap';

class Business extends Component{
    constructor(props) {
        super(props);

    }


    render(){
        return (
            <div class="wrapper" style={style.wrapper}>
                <div className="main" style={style.main}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 id='pubNot'>Public Notice</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ul>
                                    <li><a href=''>CLICK HERE FOR THE ELIZABETH TAX SALE LIST</a></li>
                                    <li><a href=''>OPRA Request Form</a></li>
                                    <li><a href=''>GOV Pilot GIS Maps</a></li>
                                </ul>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                                <h2 id='RFQP'>RFQs / RFPs</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ul>
                                    <li><a href=''>RFQ Employee Assistance Program & Alcohol Education Program </a></li>
                                    <p>(ends at 4:00 p.m. on December 21, 2018)</p>
                                    <li><a href=''>RFQ Consultant for the Health & Safety Program </a></li>
                                    <p>(ends at 4:00 p.m. on December 21, 2018)</p>
                                </ul>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col style={{textAlign: 'center'}}>
                                <h2 id='WM'>Weights & Measures</h2>
                            </Col>
                        </Row>
                        </Container>
                            <div className='WeiMea' style={{textAlign: 'center'}}>
                                <p style={{marginBottom: '0'}}>City of Elizabeth</p>
                                <p style={{marginBottom: '0'}}>Office of Administration</p>
                                <p style={{marginBottom: '0'}}>Central License Bureau</p>
                                <p style={{marginBottom: '0'}}>Agency of Weights and Measures</p>
                                <p style={{marginBottom: '0'}}>Room 101</p>
                                <p style={{marginBottom: '0'}}>50 Winfield Scott Plaza</p>
                                <p>Elizabeth, NJ 07207</p>

                                <p style={{fontWeight: 'bold', marginBottom: '0'}}>Anthony P. Colletti</p>
                                <p style={{marginBottom: '0'}}>Superintendent Weights & Measures</p>
                                <p style={{marginBottom: '0'}}>Email: acolletti@elizabethnj.org</p>
                                <p>908-820-4180</p>

                                <p style={{fontWeight: 'bold', marginBottom: '0'}}>Lilian I. Caparruva</p>
                                <p style={{marginBottom: '0'}}>Assistant Superintendent of Weights & Measures</p>
                                <p style={{marginBottom: '0'}}>Email: lcaparruva@elizabethnj.org</p>
                                <p>908-820-4286</p>

                                <p style={{fontWeight: 'bold', marginBottom: '0'}}>Antoine S. Neal</p>
                                <p style={{marginBottom: '0'}}>Apprentice of Weights & Measures</p>
                                <p style={{marginBottom: '0'}}>Email: aneal@elizabethnj.org</p>
                                <p>908-820-4184</p>

                                <p style={{fontWeight: 'bold', marginBottom: '0'}}>Martin Ferreiro</p>
                                <p style={{marginBottom: '0'}}>Apprentice of Weights & Measures</p>
                                <p style={{marginBottom: '0'}}>Email: mferreiro@eliabethnj.org</p>
                                <p>908-820-4184</p>
                            </div>
                </div>
                <div className="sidebar" style={style.sidebar}>
                    <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white' }}><a href='#pubNot'>Public Notices</a></h6>
                    <hr/>
                    <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white' }}><a href='#RFQP'>PRFQs/RFPs</a></h6>
                    <hr/>
                    <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white' }}><a href='#WM'>Weights & Measures</a></h6>
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

export default Business;