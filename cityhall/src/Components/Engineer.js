import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

class Engineer extends Component{
    
    render(){
        return (
            <div>
                <Container>
                    <Row>
                        <Col style={{textAlign: 'center'}}>
                            <h1>Engineering</h1> 
                       </Col>
                    </Row>
                    <hr/>
                </Container>
                
            </div>
        )
    }
};
export default Engineer;