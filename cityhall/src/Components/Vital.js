import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import VRAppEng from '../PDF/AppVitalEng.pdf';
import VRAppS from '../PDF/AppVitalS.pdf';
import GenRecE from '../PDF/GenealogicalRecE.pdf';
import GenRecS from '../PDF/GenealogicalRecS.pdf';
import MLAE from '../PDF/MLAE.docx';
import MLAS from '../PDF/MLAS.docx';

class Vital extends Component {

  render() {

    return (
        <div class="wrapper" style={style.wrapper}>
         <div className="main" style={style.main}>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{marginTop: '15px'}}>Vital Statistics</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            City of Elizabeth 
                            Office of Vital Statistics
                            City Hall - 50 Winfield Scott Plaza
                            Room G12 Elizabeth, NJ  07201 -
                            908-820-4082
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 id='infoApp'>Information and Applications:</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        How to Obtain Copies of Vital Records
                        <ul>
                            <li>
                                <a href={VRAppEng} target='_blank'>Application for Vital Records (English)</a>
                            </li>
                            <li>
                                <a href={VRAppS} target='_blank'>Application for Vital Records (Spanish)</a>
                            </li>
                        </ul>
                        Marriage License Information
                        <ul>
                            <li>
                                <a href={MLAE}>Marriage License Application (English)</a>
                            </li>
                            <li>
                                <a href={MLAS}>Marriage License Application (Spanish)</a>
                            </li>
                        </ul>
                        How to Request Copies of Genealogical Records
                        <br/>
                        <p style={{marginBottom: '0px', fontWeight: 'bold'}}>(Beginning May 1848 except May 1870 – Dec 1872 and May 1878 – Dec 1881)</p> 
                        <ul>
                            <li>
                                <a href={GenRecE} target='_blank'>Application for Genealogical Records (English)</a>
                            </li>
                            <li>
                                <a href={GenRecS} target='_blank'>Application for Genealogical Records (Spanish)</a>
                            </li>
                        </ul>
                    </Col>                 
                    <Col>
                        <h5 style={{marginBottom: '0px', color: 'red'}}>Helpful Links and Resources:</h5>
                        <ul>
                            <li><p><a href='https://www.state.nj.us/health/vital/order-vital/online-requests/'>Online Requests via the Office of Vital Statistics & Registry in Trenton, NJ</a></p></li>
                            
                            
                            <li><p style={{marginBottom: '0px'}}><a href='https://www.state.nj.us/health/vital/'>Office of Vital Statistics & Registry Trenton, NJ</a></p></li>
                            <p style={{fontWeight: 'bold'}}>(Maintains all New Jersey Vital Records from 100 years ago to the present)</p>
                    
                            <li><p><a href='https://www.state.nj.us/health/vital/order-vital/no-record-of-marriage/'>No Record of Marriage Statement</a></p></li>
                        
                            <li><p style={{marginBottom: '0px'}}><a href='https://nj.gov/state/archives/cathealth.html'>State Archives Online Genealogical Search Requests</a></p></li>
                            <p  style={{fontWeight: 'bold'}}>(Birth, Marriage, Death Records from May 1848 up to 100 years ago)</p>
                           
                            <li><p><a href='https://www.state.nj.us/health/vital/order-vital/local-vital-records/index.shtml'>Other Local Registrar Offices in New Jersey (Listed by County)</a></p></li>
                        
                        </ul>
                    </Col> 
                </Row>
                <hr />
                <Row>
                    <Col>
                        <h2 id='nongene'>Instructions for obtaining Certified Copies of Non-Genealogical Records</h2>               
                    </Col>
                </Row>
                <Row style={{marginTop: '25px'}}>
                    <Col>
                        <h5 style={{fontWeight: 'bold'}}>Birth, Death, Marriage, Civil Union and Domestic Partnership</h5>
                        <p style={{fontWeight: 'bold'}}>Non-Genealogical Records (current events) are:</p>
                        <ul>
                            <li>Births occurring within the last 80 years</li>
                            <li>Marriages occurring within the last 50 years</li>  
                            <li>Deaths occurring within the last 40 years</li>  
                            <li>All domestic partnerships and civil unions.</li>      
                        </ul>             
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <p style={{fontWeight: 'bold'}}>For all orders, the following <u>must</u> be sent with your application:</p>
                        <ul>
                            <li>All required copies of ID for proof of identity</li>
                            <li>The correct fees</li>  
                            <li>Deaths occurring within the last 40 years</li>  
                            <li>Copies of documents proving your relationship to the person named on the record <span style={{fontWeight: 'bold'}}>if obtaining a Certified Copy</span></li>      
                        </ul>
                        <p>*(See bottom of page for information to obtain a Certification or Genealogical Records)</p>             
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <h5 style={{fontWeight: 'bold'}}>Your application will be returned if you do not send in all required documentation.</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ol>
                            <li>Identify the non-genealogical record</li>
                            <li>Provide Acceptable Identification</li>
                            <li>Payment of Fees</li>
                            <li>Proof of Relationship</li>
                            <li>Submitting your completed application and supporting documents</li>
                        </ol>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5 style={{marginBottom: '30px', fontWeight: 'bold'}}>How to prove relationship for non-genealogical records:</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 style={{fontWeight: 'bold'}}>Step 1: Identify the non-genealogical record</h6>
                        <p>You must be able to fully identify the record by providing all of the information listed below on the application form. Your request cannot be accepted unless you provide the information below.</p>
                        <ul>
                            <li>Full name on the record</li>
                            <li>City where the event occurred</li>
                            <li>Exact date of the event (month, day and year)</li>
                            <li>Mother’s maiden name</li>
                            <li>Father’s name (if recorded on the record)</li>
                            <li>For Marriage, Civil Union or Domestic Partnership - Instead of parents’ names, you must provide the name of the spouse/partner.</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 style={{fontWeight: 'bold'}}>Step 2:  Provide Acceptable Identification</h6>
                        <p>You must provide acceptable ID in order to get a copy of any vital record. Copies of vital records must be mailed to the address listed on your identification. </p>
                        <p>The following are acceptable forms of ID:</p>
                        <ul>
                            <li>A current, valid photo driver's license or photo non-driver's license with current address </li>
                            <p style={{fontWeight:'bold'}}>OR</p>
                            <li>A current, valid driver’s license without photo and one alternate form of ID with current address </li>
                            <p style={{fontWeight:'bold'}}>OR</p>
                            <li>Two alternate forms of ID, one of which must have current address.</li>
                        </ul>
                        <p>Alternate forms of ID are:</p>
                        <ul>
                        	<li>Vehicle registration</li>
                            <li>Vehicle insurance card</li>
                            <li>Voter registration</li>
                            <li>US/Foreign Passport</li>
                            <li>Immigrant Visa</li>
                            <li>Permanent Resident Card (Green card)</li>
                            <li>Federal/State ID</li>
                            <li>County ID</li>
                            <li>School ID</li>
                            <li>Bank Statement (within previous 90 days)</li>
                            <li>Utility bill(within the previous 90 days)</li>
                            <li>Tax Return or W-2 for current/previous tax year</li>  
                        </ul>
                        <p>People who are homeless can have a social worker or the coordinator of the homeless shelter where they are temporarily residing submit a request on behalf of the homeless person. The request must be on their agency letterhead and provide the identifying information on the homeless person's vital record. The request must be accompanied by proof of employment by the agency and valid identification. The resulting copy of the vital record will be mailed to the agency.</p>
                        <br />
                        <p>People who are incarcerated can provide legal imprisonment, conviction papers or release documents that include the name, social security number and all possible aliases used in the past or identification from a prison/probation official.</p>
                        <p style={{fontWeight:'bold'}}>Please do not send in original ID documents. Only copies are required.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 style={{fontWeight: 'bold'}}>Step 3: Payment of Fees</h6>
                        <p>The Office of Vital Statistics charges:</p>
                        <ul>
                        	<li>$15 for EACH Certified Copy (Birth, Marriage, Death, Civil Union, Domestic Partnership)</li>
		                    <li>Applications mailed in may be paid by check or money order made payable to: City of Elizabeth</li>
		                    <li>We cannot accept credit card payment by mail</li>
		                    <li><u>Please do not send cash through the mail.</u></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 style={{fontWeight: 'bold'}}>Step 4: Proof of Relationship</h6>  
                        <p style={{fontWeight: 'bold', color: 'red'}}>ONLY required if ordering a certified copy of a vital record.</p>
                        <p style={{fontWeight: 'bold'}}>To get a <u>certified copy</u> of a person’s vital record, you must provide proof of your relationship to the person listed on the record <u>and</u> the proof must establish you are one of the following:</p>          
                        <ul>
                        	<li>The subject of the record</li>
		                    <li>The subject’s parent, legal guardian or legal representative</li>
		                    <li>The subject’s spouse/civil union partner; child, grandchild or sibling, if of legal age</li>
		                    <li>A state or federal agency for official purposes</li>
		                    <li>Pursuant to court order</li>
                        </ul>
                        <div style={{border: '2px solid gray'}}>
                            <p>See the <span style={{fontWeight: 'bold'}}>How to Prove Relationship </span>tips at the bottom of this page for information on how to prove your relationship. This is a key requirement to getting a certified copy of a vital record.
                            <br />
                            <span style={{fontWeight: 'bold'}}>Failure to provide proof of relationship is the number one reason certified copy applications must be rejected.</span></p>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                    <Col>
                        <h6 style={{fontWeight: 'bold'}}> Step 5: Submitting your completed application and supporting documents</h6>
                        <p>Regardless of the where you place your order you will have to send with your application:</p>
                        <ul>
                        	<li>All required copies of ID establishing your identity</li>
                            <li>The correct fee, and</li>
                            <li>Copies of documents proving your relationship to the person named on the record, if you are ordering a certified copy</li>
                        </ul>
                        <p>Your application will be returned if you do not send in all required information. Submit your request and supporting documentation via one of the following order methods:</p>
                        <div style={{border:'2px solid black', height: '250px'}}>
                            <div style={{borderLeft:'2px solid black', height: '248px', width: '50%', float: 'right', paddingLeft: '20px'}}>
                                    <p style={{fontWeight:'bold'}}>Non-Genealogical Orders only</p>
                                    <p>Processed through Elizabeth Office of Vital Statistics.</p>
                                    <p>50 Winfield Scott Plaza Room G12 Elizabeth, NJ 07201</p>
                                    <p>Monday – Friday   8am – 4:30pm</p>
                                    <p>Processing time is approximately 15 minutes.</p>
                                    <p>Payment accepted: cash or money order</p>
                            </div>
                            <div style={{height: '250px',width: '50%', textAlign: 'center', padding: '100px'}}>
                                <p>Same-day Walk-in Service</p>
                            </div>
                        </div>
                        <div style={{border:'2px solid black', height: '200px', marginTop: '5px'}}>
                            <div style={{borderLeft:'2px solid black', height: '198px', width: '50%', float: 'right', paddingLeft: '20px'}}>
                                    <p style={{fontWeight:'bold'}}>Mail Orders only</p>
                                    <p>Processed through Elizabeth Office of Vital Statistics</p>
                                    <p>50 Winfield Scott Plaza Room G12 Elizabeth, NJ 07201</p>
                                    <p>Mail requests are typically processed within 1 - 2 weeks.</p>
                                    <p>Payment accepted: check or money order</p>
                            </div>
                            <div style={{height: '250px',width: '50%', textAlign: 'center', padding: '100px'}}>
                                <p>Regular Requests</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <h6 style={{fontWeight: 'bold'}}>How to prove relationship for non-genealogical records</h6>
                        <p>If you are requesting a <span style={{fontWeight: 'bold'}}>certification</span> (an informational copy of a vital record not valid for legal purposes), you <span style={{fontWeight: 'bold'}}>do not</span> need to provide proof of relationship. (See bottom of page for information)</p>
                        <p>If you are looking for a <span style={{fontWeight: 'bold'}}>certified copy of</span></p>
                        <ul>
                            <li>
                                <span style={{fontWeight: 'bold'}}>your own</span> birth certificate and you have assumed your spouse’s/civil union partner’s surname 
                                you must provide a copy of the certified copy of your marriage/civil union certificate to link the name on your current ID to the name on your birth certificate.
                            </li>
                            <li><span style={{fontWeight: 'bold'}}>your child’s</span> birth certificate you don’t need any additional documents.</li>
                            <li><span style={{fontWeight: 'bold'}}>your spouse’s/civil union partner’s</span> birth certificate you must provide a copy of your marriage/civil union certificate.</li>
                            <li><span style={{fontWeight: 'bold'}}>your parent’s or sibling’s</span> vital record you must provide a copy of your birth certificate.</li>
                            <p>if you have assumed your spouse's/civil union partner's last name you must also provide a copy of your marriage/civil union certificate to link the name on your current ID to the name on your birth certificate.</p>
                            <li><span style={{fontWeight: 'bold'}}>your grandparent’s</span> vital record you must establish that you are the person’s grandchild by providing proof that links the name on your ID to the name of the grandparent. </li>
                            <p style={{marginTop:'10px'}}>For example, if you changed your last name after marriage/civil union and want a grandparent’s vital record, you must:</p>
                                    <ul>
                                    	<li>Provide your marriage/civil union certificate to show your name at birth,</li>
		                                <li>provide your birth certificate to identify your parent, and</li>
		                                <li>provide the parent’s birth certificate to identify the grandparent.</li>
                                    </ul>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                    <p id='genealogical'>If you<span style={{fontWeight: 'bold'}}> are not</span> a person qualified to get a <span style={{sontWeight:'bold'}}>certified copy</span> of a record</p>
                    <ul>
                        <li>but <span style={{sontWeight:'bold'}}>you are helping</span> a person receive a certified copy of a vital record they are eligible to receive </li>
                    </ul>
                    <p>You must show your valid ID and a notarized, written release authorizing you to get the record on that person’s behalf OR, you can supply a written release from the person you are helping along with a copy of that person’s valid photo ID.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>If you are an <span style={{fontWeight: 'bold'}}>attorney</span></p>
                        <ul>
                        	<li>who is executor of an estate you must supply proof of appointment as the executor.</li>
		                    <li>who is the legal representative of the executor of an estate: you must supply proof of legal retainer by the executor and proof of the appointment of the individual as the executor.</li>
		                    <li>who is the legal representative of an individual that is eligible to receive a certified copy of a vital record: 
                                must supply proof of legal retainer by the eligible individual and their proof of relationship.</li>
		                    <li>who needs a certified copy of a vital record and you are not the legal representative of an eligible person:
                                you must obtain a court order directing the State Registrar to issue a certified copy of the record. A subpoena is not sufficient to issue a copy of a vital record.</li>
                        </ul>

                    </Col>
                </Row>
            </Container>
            </div>
            <div className="sidebar" style={style.sidebar}>
                    <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white', marginBottom:'0px' }}><a style={{color: 'black'}} href='#infoApp'>Information & Applications</a></h6>
                    <hr/>
                    <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white' }}><a style={{color: 'black'}} href='#nongene'>Non-Genealogical Records</a></h6>
                    <hr/>
                    <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white' }}><a style={{color: 'black'}} href='#genealogical'>Genealogical Records</a></h6>
                </div>
        </div>
    );
  }
}
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
        // border: '2px solid black',
        padding: '15px',
        backgroundColor: '#fff'
      },
      sidebar: {
        width: '200px',
        height: '100%',
        position: '-webkit-sticky',
        // position: 'sticky',
        top: '0',
        marginLeft: '20px',
        paddingLeft: '5px',
        paddingRight: '5px',
        paddingTop: '30px',
        border:'2px solid black',
        backgroundColor: 'white'
      }
}

export default Vital;