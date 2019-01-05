import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';



class Council extends Component{

    render(){
        return (
            <div>
                    <Row>
                        <Col>
                        <h6 style={{fontWeight: 'bold', marginBottom: '0px'}}>Frank Cuesta</h6>
                        <p style={{fontSize: '13px', marginBottom: '0'}}>Councilman-At-Large</p>
                        <p style={{fontSize: '13px'}}>908.352.9889; elzorro@optonline.net</p>
                        </Col>
                        <Col>
                            <h6 style={{fontWeight: 'bold', marginBottom: '0px'}}>Patricia Perkins-Auguste</h6>
                            <p style={{fontSize: '13px', marginBottom: '0'}}>Councilwoman-At-Large</p>
                            <p style={{fontSize: '13px'}}>908.354.8892; ppauguste@yahoo.com</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6 style={{fontWeight: 'bold', marginBottom: '0px'}}>Manny Grova, Jr.</h6>
                            <p style={{fontSize: '13px', marginBottom: '0'}}>Council President</p>
                            <p style={{fontSize: '13px'}}>908.353.5599; mgrova@msgld.com</p>
                        </Col>
                        <Col style={{paddingRight:'0px'}}>
                            <h6 style={{fontWeight: 'bold', marginBottom: '0px'}}>Carlos Torres</h6>
                            <p style={{fontSize: '13px', marginBottom: '0'}}>1st Ward</p>
                            <p style={{fontSize: '13px'}}>908.370.5214; councilmantorres@gmail.com</p>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6 style={{fontWeight: 'bold', marginBottom: '0px'}}>Nelson Gonzalez</h6>
                            <p style={{fontSize: '13px', marginBottom: '0'}}>2nd Ward</p>
                            <p style={{fontSize: '13px'}}>908.353.5599; mgrova@msgld.com</p>
                        </Col>
                        <Col>
                            <h6 style={{fontWeight: 'bold', marginBottom: '0px'}}>Kevin Kiniery</h6>
                            <p style={{fontSize: '13px', marginBottom: '0'}}>3rd Ward</p>
                            <p style={{fontSize: '13px'}}>908.510.1195; kjkiniery@aol.com</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6 style={{fontWeight: 'bold', marginBottom: '0px'}}>Carlos Cedeño</h6>
                            <p style={{fontSize: '13px', marginBottom: '0'}}>4th Ward</p>
                            <p style={{fontSize: '13px'}}>908.353.1231; councilmancedeno@gmail.com</p>
                        </Col>
                        <Col style={{width: '100px'}}>
                            <h6 style={{fontWeight: 'bold', marginBottom: '0px'}}>William Gallman, Jr.</h6>
                            <p style={{fontSize: '13px', marginBottom: '0'}}>5th Ward</p>
                            <p style={{fontSize: '13px'}}>908.289.7552; cwgallman@yahoo.com</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6 style={{fontWeight: 'bold', marginBottom: '0px'}}>Frank O. Mazza</h6>
                            <p style={{fontSize: '13px', marginBottom: '0'}}>6th Ward</p>
                            <p style={{fontSize: '13px'}}>908.351.5775; francomazza2004@yahoo.com</p>
                        </Col>
                        {/* <Col>
                            <div style={{ padding: '1px'}}>
                                <h5 style={{color: 'red'}}>Council Meeting Dates</h5>
                                <p>No meetings scheduled.</p>
                                <hr/>
                            </div>
                        </Col> */}
                    </Row>
            </div>
        )
    }
};

export default Council;