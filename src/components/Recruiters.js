import React from 'react'
import Recruiters_bg from "../images/recurite-bg.jpg"
import logo1 from '../logos/Infosys_logo_PNG2.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Recruiters() {
    return (
        <div >
            <img className='Recruiters_bg' src={Recruiters_bg} alt="" />
            <Container>
                <Row>
                    <Col>
                        <img className='logo1' src={logo1} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Recruiters