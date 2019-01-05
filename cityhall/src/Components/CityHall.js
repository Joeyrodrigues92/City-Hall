import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import Departments from './Departments';
import Council from './Council';

import CModal from './CModal';
import Modal from 'react-modal';



//<link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">



class CityHall extends Component{
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

      openModal() {
        this.setState({modalIsOpen: true});
      }
    
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }
    
    render(){
        return (
         <div class="wrapper" style={style.wrapper}>
            <div className="main" style={style.main}>
                <Container>
                    <Row>
                        <Col style={{textAlign: 'center'}}>
                            <h1>City Hall</h1>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col style={{marginBottom: '20px'}}>
                            <h2>Council Members</h2>
                            <button onClick={this.openModal}>Council Meeting Dates</button>
                            <Modal
                                className='Cmodal'
                                isOpen={this.state.modalIsOpen}
                                onRequestClose={this.closeModal}
                                contentLabel="Council Meetings Date"
                            >
                                <CModal click={this.closeModal}/>
                            </Modal>
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
                <div style={style.sidebar}>
              
                    <h6 style={{fontWeight: 'bold', backgroundColor:'white'}}><a style={{color: 'black'}} href='#council'>Council</a></h6>
                    <hr/>
                    <h6 style={{fontWeight: 'bold', backgroundColor:'white', color: 'black' }}><a style={{color: 'black'}} href='#depart'>Departments</a></h6>
                    {/* renders vital stats compts */}
                    <hr/>
                    <Link to={`${this.props.match.url}/VitalStats`}><h6 style={{fontWeight: 'bold', color: 'black'}}>Vital Statistics</h6></Link>
                    <hr />
                    <Link to={`${this.props.match.url}/Engineering`}><h6 style={{fontWeight: 'bold', color: 'black'}}>Engineering</h6></Link>
                    <hr />
                    <a href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances' style={style.attractionsButton}><h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white', color: 'black' }}>Ordinaces</h6></a>
                    <hr/>
                </div> 
        </div>
        )
    }
};

const style = {
    wrapper: {
        display: 'flex',
        backgroundColor: 'white',
        fontFamily: 'sans-serif',
        padding: '10px'
      },
      main: {
        width: '950px',
        height: '100%',
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
      },
        // content: {
        //   top: '50%',
        //   left: '50%',
        //   right: 'auto',
        //   bottom: 'auto',
        //   marginRight: '-50%',
        //   transform: 'translate(-50%, -50%)'
        // }
}

export default CityHall;