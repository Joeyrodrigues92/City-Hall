import React, { Component } from 'react';
import { Button} from 'reactstrap';
import MeetingOne from '../Images/meetingsOne.png';
import MeetingTwo from '../Images/meetingsTwo.png';

// /Users/user/Desktop/Lit/cityhall/cityhall/src/Images/meetings.png
// cityhall/src/Images/meetings.png
class CModal extends Component{

      render(){
          return(
            <div style={style.modal}>
              <Button style={style.button} id='close' onClick={this.props.click}>X</Button>
              <h2 style={style.header}>Council Meeting Dates</h2>
              <img src={MeetingOne}/>
              <img src={MeetingTwo}/>
            </div>
          )
      }

}

const style = {
  modal:{
    flex: '1',
    border: '2px solid black',
    width: '90%',
    height: '600px',
    marginTop: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    textAlign: 'center',
    overflow: 'scroll'
  },
  header: {
    color: 'red'
  },
  button:{
    float: 'right',
    backgroundColor: 'white',
    padding: '0',
    marginRight: '5px',
    marginTop: '5px',
    color: 'black'
  }
}

export default CModal;