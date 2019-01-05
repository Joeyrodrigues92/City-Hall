import React, { Component } from 'react';
import { Button} from 'reactstrap';

class CModal extends Component{

      render(){
          return(
            <div style={style.modal}>
              <Button style={style.button} id='close' onClick={this.props.click}>X</Button>
              <h2 style={style.header}>Council Meeting Dates</h2>
              <h4>No Dates Scheduled</h4>
            </div>
          )
      }

}

const style = {
  modal:{
    border: '2px solid black',
    width: '504px',
    height: '400px',
    marginTop: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    textAlign: 'center'
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