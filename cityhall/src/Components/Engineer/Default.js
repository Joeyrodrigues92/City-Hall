import React, {Component} from 'react';
import One from '../../PDF/enginer/01 Hazard Mitigation Plan without Appendices.pdf';
import Two from '../../PDF/enginer/02 Hazard Mitigation Plan Appendix A, B, C.pdf';
import Three from '../../PDF/enginer/03 Hazard Mitigation Plan Appendix D, E, F, G.pdf';
import Four from '../../PDF/enginer/04 Hazard Mitigation Plan Appendix H.pdf';
import Five from '../../PDF/enginer/05 Hazard Mitigation Plan Appendix H Maps-compressed.pdf';
import Public from '../../PDF/enginer/Public Posting South Street Flood Control NJWB Financing.pdf';



class Default extends Component{

    render(){

        return (
            <div style={{textAlign:'center'}}>
                <p><a href={Public} target='_blank'>-South Street Flood Control Project State Financing Notice</a></p>
                <p><a href={One} target='_blank'>-Hazard Mitigation Plan without Appendices</a></p>
                <p><a href={Two} target='_blank'>-Hazard Mitigation Plan Appendix A, B, C</a></p>
                <p><a href={Three} target='_blank'>-Hazard Mitigation Plan Appendix D, E, F, G</a></p>
                <p><a href={Four} target='_blank'>-Hazard Mitigation Plan Appendix H</a></p>
                <p><a href={Five} target='_blank'>-Hazard Mitigation Plan Appendix H Maps</a></p>   
            </div>
        )
    }
};

export default Default;