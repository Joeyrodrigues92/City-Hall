import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import Departments from './Departments';
import Council from './Council';

import CModal from './CModal';
import Modal from 'react-modal';



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
                            <p>Now in his twenty-fifth year as Mayor of Elizabeth, a diverse city of more than 125,000 and the fourth largest city in New Jersey, J. Christian Bollwage has created a more efficient city government while sparking $800 million in economic redevelopment which will see the city into the 21st century.</p>
                            <p>Mayor Bollwage, a native of the city, was elected to his first term in 1992, reelected in November 1996, 2000, 2004, 2008, 2012 and 2016.</p>
                            <p>This year, Mayor Bollwage announced his vision of the future of Elizabeth, which included “Go-Green” initiatives, collegiate corridor concept, remodeling of Midtown train station, and expansion of economic development, recreation, housing and transportation. The Mayor also unveiled a foreclosure assistance program, a Healthy Elizabeth initiative, and new camera surveillance network.</p>
                            <p>In past years Mayor Bollwage declared the “Year of the Senior.”  Advancements for Elizabeth’s senior citizens that year included the creation of 119 new units of affordable senior citizen housing throughout the City.  Other services such as the “Elizabeth Fix-it” program through which eligible seniors can receive free minor repair work on their homes are geared towards assisting the City’s senior citizens and proved to be a success.  Mayor Bollwage continues to honor the senior citizens of Elizabeth during the new millennium as he offers assistance through his Office on Aging for various senior programs and concessions and announced plans to build two new senior centers.</p>
                            <p>Other past initiatives include, “New Hope for Our Children” which included the creation of an Office on Youth, a Youth Advisory Board and after-school and summer LEAP and SOAR programs.  His focus on children also resulted in the opening of a new branch of the Elizabeth Public Library and a new children's library located in the Main Branch and the implementation of Project Love, an award-winning curfew program, which combines enforcement with counseling.  The Mayor continues to offer our children safe and fun recreational alternatives with the creation of new parks, and additional soccer fields, football fields and basketball courts throughout areas of Elizabeth where they are most needed.
The Mayor has also made a commitment in the area of public safety. His police initiatives included the installation of the state-of-the-art Elizabeth Police Information and Communication System. Adding more than 30 surveillance cameras throughout the City and implementing the E.P.I.C. system which improves police response time and gives responding officers more information at the scene.  In 1999, the Mayor coupled the highly successful EPIC with the revolutionary Vehicle Tracking System, which further enhanced response time by placing a microchip in each car to give dispatchers a fairly exact location of all city police vehicles.  As we enter the second decade of the 21st century, Mayor Bollwage provides Elizabeth with the most technologically advanced police force in the state of New Jersey.</p>
                            <p>Mayor Bollwage has also instituted walking patrols in all of the City's business districts, which has assisted in the renaissance of these areas. He initiated and doubled the SAFENET patrol, which is designed to deal with quality of life complaints such as loitering and neighborhood disputes.  The Mayor has also put plain-clothes officers in city schools, and dedicated teams of officers to patrol the senior citizen complexes and federal housing projects.  In 2004 police presence was increased, street violence was aggressively combated and at-risk-neighborhoods were targeted.</p>
                            <p>In addition, through his work with the U.S. Conference of Mayors, the Mayor recently brought home state grant money that will be combined with Elizabeth Urban Enterprise Zone revenues to make safety improvements to 50 City intersections.  Also part of his “Walk Smart, Drive Smart Elizabeth” campaign is a public safety education program aimed at seniors and children.  Mayor Bollwage received high praise for this program from Col.Peter O’Hagan, director of the NJ State Office of Highway Safety, during a pedestrian-safety workshop at the annual League of Municipalities convention.</p>
                            <p>The City's ongoing economic redevelopment plans have already brought The Elizabeth Center at 13A, which is home to IKEA, the chain's most successful North American store, and the Toys R Us/Kids World Superstore.  Across the street from this development is the Jersey Gardens Mall, located on Kapkowski Road. The megamall, which opened in October of 1999, was constructed on the site of a former municipal landfill and brought 5,000 new jobs and more than $6.5 million in new ratables to the city.  This year Jersey Gardens Mall is celebrating its fifteenth anniversary and once again it is reporting increases in sales and shoppers. The 21-screen AMC movie theater also reported record-breaking numbers in attendance and is the highest grossing in the region. Country Inns and Suites was the latest hotel to join Marriott Courtyard, Residence Inn, and an Extended Stay America, which were completed in 2002.  Currently, the Renaissance Hotel located near the airport is undergoing a renovation to better serve its guest. Together creating nearly 800 rooms, they have fostered job creation and provided opportunities for success.  Second only to Atlantic City in the number of rooms —Elizabeth has become a destination. IHop International House of Pancake opened its doors across the street from Jersey Gardens and joins Ruby Tuesday as an additional destination to dine. The Mayor's role in redeveloping this brownfield site earned him the American Plan Association's Distinguished Leadership Award for Elected Officials.</p>
                            <p>The Jersey Gardens Mall project is just one example of the Mayor's ongoing efforts to redevelop brownfields in the city. His efforts have resulted in Elizabeth being chosen for a Federal Brownfields Pilot Program and the hiring of a brownfields project coordinator. Mayor Bollwage was appointed to co-chair the U.S. Conference of Mayors Brownfields Taskforce and has worked with other cities to encourage the development of these types of properties across the nation.  His Brownfield’s initiatives earned him the "Brownfield News Award for Excellence in Brownfields Redevelopment" from Brownfield Magazine. Mayor Bollwage was the first New Jersey recipient of the award, which recognized his leadership in initiating the redevelopment of brownfield sites.</p>
                            <p>All of these economic developments are encompassed by Elizabeth's Urban Enterprise Zone. Under Mayor Bollwage’s administration, Elizabeth’s UEZ was named number one in the nation.  It has generated $30 billion in new investments, and has created more than 5,000 new jobs, helping residents stay employed.</p>
                            <p> The UEZ program is an important economic tool to Elizabeth and the 37 other UEZ municipalities throughout New Jersey. Spurred by this success, Mayor Bollwage created the UEZ Mayors Commission in May of 1998.  As Chairman of this pro-active Commission, the Mayor brings the UEZ Mayors and administrators from around the state together as a unified voice to Trenton regarding zone issues.</p>
                            <p>The Mayor's hard work in lobbying Washington D.C. legislators has also paid off as the City received a $29 million Hope VI grant from the U.S. Department of Housing and Urban Development.  The HOPE VI grant is being used to revitalize the Elizabethport neighborhood by removing housing projects, erecting new townhouses in their place, and empowering the residents of public housing through job training and counseling that promotes self-sufficiency and economic independence.  This year one of the final phases of the Hope VI development was completed and over a hundred residents have moved in to their new homes.</p>
                            <p>Mayor Bollwage has been active in the United States Conference of Mayors and currently serves on its National Advisory Committee. He has previously served on the Legislative Committee and currently serves as co-chairman of the Brownfields Task Force and chairman of the Highway Safety Subcommittee where he was a leader on the debate to renew ISTEA (Intermodal Surface Transportation Efficiency Act). Mayor Bollwage was appointed to serve as President on the Executive Board of the New Jersey State League of Municipalities and as Chair of the United States Conference of Mayors’ Criminal and Social Justice Committee.  He also served on the Video Lottery Study Commission.</p>
                            <p>As an advocate for cities, the Mayor has also led the fight to lower garbage disposal fees in New Jersey, resulting in more than $2 million in tax savings to the residents of Elizabeth.</p>
                            <p>In other areas, Mayor Bollwage has worked to open up City government to the residents, holding open office hours and seeking input from residents in planning for the city's future. He created the Info-line, which gives residents one phone number to call to get answers for their questions and to offer suggestions. Created a bi-lingual award winning website and incorporates social media to keep residents better informed.</p>
                            <p>Currently, the Mayor is an Adjunct Professor in the Public Administration Department at Kean University in Union, New Jersey, where he teaches undergraduate courses in Public Administration. Also a graduate of Kean University Mayor Bollwage holds a graduate degree with honors in Public Administration, has received the Distinguished Alumnus Award, was later inducted into the Pi Alpha Alpha Honor Society and received an Honorary Doctorate of Laws in 2002.</p>
                            <p>Before becoming Mayor, Chris Bollwage was a Councilman for 10 years, serving as Council President in 1989. He was also a member of the Elizabeth Planning Board for four years.</p>
                            <p>Prior to holding elected office, the Mayor served as sales, marketing and public relations representative for A&J Trading Corporation of Linden and Traffic Coordinator for Kerr Steamship Incorporated, New York City.</p>
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
                </Container>
            </div>
                <div style={style.sidebar}>
                <h6 style={{fontWeight: 'bold', backgroundColor:'white'}}><a style={{color: 'black'}} href='#overview'>Overview</a></h6>
                    <hr/>
                    <h6 style={{fontWeight: 'bold', backgroundColor:'white'}}><a style={{color: 'black'}} href='#mayor'>Our Mayor</a></h6>
                    <hr/>
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
}

export default CityHall;