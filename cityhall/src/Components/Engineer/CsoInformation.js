import React, {Component} from 'react';
import One from '../../PDF/enginer/City of Elizabeth Supplemental CSO Team Meeting No. 1 Presentation 6-09-2017.pdf';
import Two from '../../PDF/enginer/City of Elizabeth Supplemental CSO Team Meeting No. 2 Presentation 10-11-2017.pdf';
import Three from '../../PDF/enginer/City of Elizabeth Supplemental CSO Team Meeting No. 3 Presentation 1-29-2018.pdf'
import Four from '../../PDF/enginer/City of Elizabeth Supplemental CSO Team Meeting No. 4 Presentation 6-05-2018.pdf'
import Five from '../../PDF/enginer/City of Elizabeth Supplemental CSO Team Meeting No. 5 Presentation 10-26-2018.pdf'
import Six from '../../PDF/enginer/City of Elizabeth Supplemental CSO Team Meeting No. 6 Presentation 1-30-2019.pdf'
import CSOFlyer from '../../PDF/enginer/ElizabethCSOFlyer.pdf';
import SysMap from '../../PDF/enginer/OverallSystemMap (6.21.16).pdf';
import Seven from '../../PDF/enginer/CSO- Meeting-No.-7.pdf';



class CsoInformation extends Component{

    render(){

        return (
            <div style={{textAlign:'center'}}>
                <h3>CSO Information</h3>
                <p><a href={One} target='_blank'>-No. 1 Presentation 06-09-2017</a></p>
                <p><a href={Two} target='_blank'>- No. 2 Presentation 10-11-2017</a></p>
                <p><a href={Three} target='_blank'>- No. 3 Presentation 01-29-2018</a></p>
                <p><a href={Four} target='_blank'>- No. 4 Presentation 06-05-2018</a></p>
                <p><a href={Five} target='_blank'>- No. 5 Presentation 10-26-2018</a></p>
                <p><a href={Six} target='_blank'>- No. 6 Presentation 1-30-2019</a></p>
                <p><a href={Seven} target='_blank'>- No. 7 Presentation 4-11-2019</a></p>
                <p><a href={SysMap} target='_blank'>- Overall System Map (6.21.16)</a></p>
                <p><a href={CSOFlyer} target='_blank'>- Elizabeth CSO Flyer</a></p>
                <p><a href='https://njcso.hdrgateway.com/'>- CSO Notification System</a></p>
            </div>
        )
    }
};

export default CsoInformation;