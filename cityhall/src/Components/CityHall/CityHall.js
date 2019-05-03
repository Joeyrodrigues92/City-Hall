import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import Modal from 'react-modal';
import Departments from '../Departments';
import Council from '../Council';
import CModal from '../CModal';
import './CityHall.css';




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
         <div className="wrapper">
            <div className="main">
                <div className='container'>
                    <Row>
                        <Col style={{textAlign: 'center'}}>
                            <h1>City Hall</h1>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <h2 id='overview'>Overview</h2>
                            <p><span style={{marginLeft: '10px'}}>The</span> City government of Elizabeth, New Jersey is made up of a Mayor and a City Council. The City's Mayor J. Christian Bollwage, a lifelong resident of Elizabeth, is currently serving his sixth term as Mayor. 
                                The Elizabeth City Council is made up of nine members. Three Council members are elected at large and six members are elected from each of Elizabeth's six wards.</p> 
                            <p><span style={{marginLeft: '10px'}}>Council</span> Members-at-large are Frank Cuesta, Manny Grova, Jr., and Patricia Perkins-Auguste. Ward Council members: First Ward - Carlos Torres; Second Ward - Nelson Gonzalez; Third Ward - Kevin Kiniery; Fourth Ward - Carlos Cedeño; Fifth Ward - William Gallman, Jr. and Sixth Ward - Frank O. Mazza.</p>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <h2 id='mayor'>Our Mayor</h2>
                                <p>Now in his twenty-sixth year as Mayor of Elizabeth, a diverse city of nearly 125,000 and the fourth largest city in New Jersey, J. Christian Bollwage has created a more efficient city government while sparking $800 million in economic redevelopment. Mayor Bollwage, a native of the city, was elected to his first term in 1992, reelected in November 1996, 2000, 2004, 2008, 2012 and 2016.</p>
                                <p>Mayor Bollwage announced his vision of the future of Elizabeth, which included “Go-Green” initiatives, collegiate corridor concept, remodeling of Midtown train station, and expansion of economic development, recreation, housing and transportation. The Mayor also unveiled a foreclosure assistance program, a Healthy Elizabeth initiative and camera surveillance network.</p>
                                <p>The City's ongoing economic redevelopment plans have resulted in The Elizabeth Center at 13A, which is home to IKEA, the chain's most successful North American store, and the Toys R Us/Kids World Superstore. Across the street from this development is The Mills at Jersey Gardens Mall, located on Kapkowski Road. The megamall, which was known as Jersey Gardens Mall when it opened in October of 1999, was constructed on the site of a former municipal landfill and brought 5,000 new jobs and more than $6.5 million in new ratables to the city.</p> 
                                <p>The shopping center was renamed The Outlet Collection - Jersey Gardens and in 2013 embarked on an ambitious $30 million renovation. The transformation was spectacular and included an elegant new look, along with more amenities and leading retailers.</p>
                                <p>In 2015, The Outlet Collection - Jersey Gardens became a “Simon Mall” and is now known as The Mills at Jersey Gardens. Celebrating its sixteenth anniversary in 2015, the mall is once again reporting increases in sales and shoppers. The AMC movie theater, located next to the mall, has also reported record-breaking numbers in attendance and is the highest grossing in the region.</p>
                                <p>Known as New Jersey’s largest outlet mall, The Mills at Jersey Gardens Mall attracts more than 15 million visitors each year. It features signature brand stores such as Michael Kors, Coach, Century 21, Express and Andrew Marc. The Mayor's role in redeveloping this Brownfield site earned him the American Plan Association's Distinguished Leadership Award for Elected Officials.</p>
                                <p>The Mills at Jersey Gardens Mall project is just one example of the Mayor's ongoing efforts to redevelop Brownfields in the city. His efforts have resulted in Elizabeth being chosen for a Federal Brownfields Pilot Program and the hiring of a Brownfields project coordinator. Mayor Bollwage was appointed to co-chair the U.S. Conference of Mayors Brownfields Taskforce and has worked with other cities to encourage the development of these types of properties across the nation.</p>
                                <p>His Brownfield’s initiatives earned him the "Brownfield News Award for Excellence in Brownfields Redevelopment" from Brownfield Magazine. Mayor Bollwage was the first New Jersey recipient of the award, which recognized his leadership in initiating the redevelopment of Brownfield sites.</p>
                                <p>Currently, the Mayor is an adjunct professor in the Public Administration Department at Kean University in Union, New Jersey, where he teaches undergraduate courses in Public Administration. Also a graduate of Kean University, Mayor Bollwage holds a graduate degree with honors in Public Administration, has received the Distinguished Alumnus Award, and was later inducted into the Pi Alpha Alpha Honor Society.</p>
                                <p>Before becoming Mayor, Chris Bollwage was a Councilman for 10 years, serving as Council President in 1989. He was also a member of the Elizabeth Planning Board for four years.</p>
                                <p>Prior to holding elected office, the Mayor served as a sales, marketing and public relations representative for A&J Trading Corporation of Linden and Traffic Coordinator for Kerr Steamship Incorporated, New York City.</p>
                                <p style={{marginBottom: '0px'}}>Mayor Bollwage and his wife, Nancy, have a daughter, Jacqueline.</p>
                         </Col>
                    </Row>
                    <hr/>
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
                </div>
            </div>
                <div className='sidebar'>
                    <h6 className='headerSix' style={{fontWeight: 'bold', backgroundColor:'white'}}><a style={{color: 'black'}} href='#overview'>Overview</a></h6>
                        <hr/>
                    <h6 className='headerSix'><a style={{color: 'black'}} href='#mayor'>Our Mayor</a></h6>
                        <hr/>
                    <h6 className='headerSix'><a style={{color: 'black'}} href='#council'>Council</a></h6>
                        <hr/>
                    <h6 className='headerSix'><a style={{color: 'black'}} href='#depart'>Departments</a></h6>
                    {/* renders vital stats compts */}
                        <hr/>
                    <Link to={`${this.props.match.url}/VitalStats`}>
                        <h6 style={{fontWeight: 'bold', color: 'black'}}>
                            Vital Statistics
                        </h6>
                    </Link>
                        <hr />
                    <Link to={`${this.props.match.url}/Engineering`}>
                        <h6 style={{fontWeight: 'bold', color: 'black'}}>
                            Engineering
                        </h6>
                    </Link>
                        <hr />
                    <a href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances'>
                        <h6 style={{fontWeight: 'bold', color: 'black'}}>
                            Ordinances
                        </h6>
                    </a>
                        <hr/>
                </div> 
        </div>
        )
    }
};

export default CityHall;