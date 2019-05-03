import React, {Component} from 'react';
import MSWMP from '../../PDF/enginer/Elizabeth MSWMP 2018 Update_V2.pdf';
import SPPP from '../../PDF/enginer/Elizabeth SPPP 2018 Update_V2-compressed.pdf';
import Sixty from '../../PDF/enginer/MunicipalStormwaterManagementAmendmentOrdinance3860.pdf'
import FourtyFour from '../../PDF/enginer/Municipal Stormwater Management Ordinance 3844.pdf'
class Stormwater extends Component{

    render(){

        return (
            <div style={{textAlign: 'center'}}>
                <h3>Stormwater</h3>
                <p>
                    The stormwater runoff is the largest source of water pollution impacting our creeks and rivers. Rainwater that flows down storm drains carries with it anything that is dropped, dumped, blown, or swept into the street. Items such as grass, leaves, oil, fertilizers, pet droppings, and all types of trash and litter will eventually be washed down a storm drain and into one of the creeks and rivers. The City has adopted several ordinances intended to stop pollutants from going down the drain in the first place.
                </p>
                <p>    
                    The links to those ordinances are provided below.
                </p>
                <p><a href={MSWMP} target='_blank'>- Elizabeth - Municipal Stormwater Management Plan</a></p>
                <p><a href={SPPP} target='_blank'>- Elizabeth - Stormwater Pollution Prevention Plan</a></p>
                <p>- Municipal Stormwater Control <a href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances?nodeId=TIT13PUSE_CH13.24STMA'>Ordinance</a></p>
                <p>- Pet Waste <a href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances?nodeId=TIT13PUSE_CH13.20STRE_13.20.040REDIPESOWA'>Ordinance</a></p>
                <p>- Wildlife Feeding <a href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances?nodeId=TIT13PUSE_CH13.20STRE_13.20.020PRCO'>Ordinance</a></p>
                <p>- Litter Control <a href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances?nodeId=TIT8HESA_CH8.32LICO'>Ordinance</a></p>
                <p>- Improper Disposal of Waste <a href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances?nodeId=TIT13PUSE_CH13.20STRE_13.20.020PRCO'>Ordinance</a></p>
                <p>- Yard Waste Collection and Disposal <a href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances?nodeId=TIT13PUSE_CH13.20STRE_13.20.020PRCO'>Ordinance</a></p>
                <p>- Private Storm Drain Retrofitting <a href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances?nodeId=TIT17LADECO_CH17.44FLDAPR_17.44.060PRSTDRINRE'>Ordinance</a></p>
                <p>- Illicit Connections <a href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances?nodeId=TIT13PUSE_CH13.20STRE_13.20.020PRCO'>Ordinance</a></p>
                <p>- Refuse Container/ Dumpster <a href='https://library.municode.com/nj/elizabeth/codes/code_of_ordinances?nodeId=TIT8HESA_CH8.16DECODUROFSHCO_8.16.060COBECOALTILEDIPR'>Ordinance</a></p>
                <p>- Ordinance <a href={Sixty} target='_blank'>3860</a></p>
                <p>- Ordinance <a href={FourtyFour} target='_blank'>3844</a></p>
                <p style={{marginBottom:'0px'}}>Related Links</p>
                <a href='https://njstormwater.org/'>Stormwater in New Jersey</a>
                    <br/>
                <a href='https://www.cleanwaternj.org/'>Clean Water NJ</a>
            </div>
        )
    }
};

export default Stormwater;