import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Budget17 from '../../PDF/2017 Municipal Budget SFY-Adopted.pdf';
import Budget18 from '../../PDF/2018 Municipal Budget SFY-Adopted.pdf';
import Budget19 from '../../PDF/budget.pdf';
import BudgetIntro19 from '../../PDF/2019 SFY Municipal Budget-Introduced.pdf';
import FinState17 from '../../PDF/Annual Financial Statement 2017.pdf';
import FinState18 from '../../PDF/Annual Financial Statement 2018.pdf'
import Audit17 from '../../PDF/Audit 2017 SFY_City of Elizabeth.pdf';
import Audit18 from '../../PDF/Audit 2018 SFY_City of Elizabeth.pdf';
import TaxSale from '../../PDF/Tax-Sale18.pdf';
import OPRA from '../../PDF/OPRA.pdf';
import RFQApp from '../../PDF/finance/2020SFY_RFQ_ APPRAISER.pdf';
import RFQAud from '../../PDF/finance/2020SFY_RFQ_ AUDITING SERICES.pdf';
import BondCoun from '../../PDF/finance/2020SFY_RFQ_ BOND COUNSEL.pdf';
import FinAdv from '../../PDF/finance/2020SFY_RFQ_ FINANCIAL ADVISOR.pdf';
import TaxCoun from '../../PDF/finance/2020SFY_RFQ_ PROPERTY TAX COUNSEL.pdf';
import PNAppServ from '../../PDF/finance/2020SFY_RFQ_PUBLIC NOTICE_APPRAISAL SERVICES.pdf';
import PNAusServ from '../../PDF/finance/2020SFY_RFQ_PUBLIC NOTICE_AUDITING SERVICES.pdf';
import PNBondCoun from '../../PDF/finance/2020SFY_RFQ_PUBLIC NOTICE_BOND COUNSEL SERVICES.pdf';
import PNFinAdv from '../../PDF/finance/2020SFY_RFQ_PUBLIC NOTICE_FINANCIAL ADVISORY SERVICES.pdf';
import PNTaxCouSer from '../../PDF/finance/2020SFY_RFQ_PUBLIC NOTICE_PROPERTY TAX COUNSEL SERVICES.pdf';
import PublicNotImg from './../../Images/PN.jpg';
import ActionPlan from '../../PDF/Action Plan Draft.docx';
import KapkowskiProp from '../../PDF/ProposalKapkowski.pdf';
import './Busniess.css';

class Business extends Component{
    constructor(props) {
        super(props);

    }


    render(){
        return (
            <div className="wrapper">
                <div className="main">
                    <Container className='container'>
                        <Row>
                            <Col style={{textAlign: 'center'}}>
                                <h1>Business</h1>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                                <h2 id='pubNot'>Public Notice</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ul>
                                    <li><a href={ActionPlan} target='_blank'>Action Plan</a></li>
                                    <hr/>
                                    <li><a href={Budget17} target='_blank'>State Fiscal Year Budget(2017)</a></li>
                                    <li><a href={Budget18} target='_blank'>State Fiscal Year Budget(2018)</a></li>
                                    <li><a href={Budget19} target='_blank'>State Fiscal Year Budget(2019)</a></li>
                                    <li><a href={BudgetIntro19} target='_blank'>Introduced State Fiscal Year Budget(2019)</a></li>
                                    <hr/>
                                    <li><a href={FinState17} target='_blank'>Annual Financial Statement(2017)</a></li>
                                    <li><a href={FinState18} target='_blank'>Annual Financial Statement(2018)</a></li>
                                    <hr/>
                                    <li><a href={Audit17} target='_blank'>Financial Statement, Auditor's Report(2017)</a></li>
                                    <li><a href={Audit18} target='_blank'>Financial Statement, Auditor's Report(2018)</a></li>
                                    <hr/>
                                    <li><a href={TaxSale} target='_blank'>Elizabeth Tax Sale List (2018)</a></li>
                                    <li><a href={OPRA}>OPRA Request Form</a></li>
                                    {/* <li><a href='https://main.govpilot.com/web/?id=157&ust=NJ' target='_blank'>GOV Pilot GIS Maps</a></li> */}
                                </ul>
                            </Col>
                            <Col>
                                <img  style={{height:'200px', width: '200px'}} src={PublicNotImg}/>
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
                                    <li><a href={RFQApp} target='_blank'>Request for Qualifications Appraisal Services</a></li>
                                    <li><a href={RFQAud} target='_blank'>Request for Qualifications Auditing Services</a></li>
                                    <li><a href={BondCoun} target='_blank'>Request for Qualifications Bond Counsel Services</a></li>
                                    <li><a href={FinAdv} target='_blank'>Request for Qualifications Financial Advisory Services</a></li>
                                    <li><a href={TaxCoun} target='_blank'>Request for Qualifications Property Tax Counsel Services</a></li>
                                    <li><a href={KapkowskiProp} target='_blank'>Request for Technical Proposals: Kapkowski Road Corridor Project Local  Concept Development Study</a></li>
                                    <hr/>
                                    <li><a href={PNAppServ} target='_blank'>Public Notice Request For Qualifications Appraisal Services </a></li>
                                    <li><a href={PNAusServ} target='_blank'>Public Notice Request For Qualifications Auditing Services</a></li>
                                    <li><a href={PNBondCoun} target='_blank'>Public Notice Request For Qualifications Bond Counsel</a></li>
                                    <li><a href={PNFinAdv} target='_blank'>Publice Notice Request For Qualifications Financial Advisory Services</a></li>
                                    <li><a href={PNTaxCouSer} target='_blank'>Public Notice Request For Qualifications Property Tax Counsel Services</a></li>
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
                <div className="sidebar">
                    <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white' }}><a style={{color: 'black'}} href='#pubNot'>Public Notices</a></h6>
                    <hr/>
                    <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white' }}><a style={{color: 'black'}} href='#RFQP'>RFQs/RFPs</a></h6>
                    <hr/>
                    <h6 style={{borderColor: '#ccc', fontWeight: 'bold', backgroundColor:'white' }}><a style={{color: 'black'}} href='#WM'>Weights & Measures</a></h6>
                    <hr/>
                </div>
          </div>
        )
    }
};



export default Business;