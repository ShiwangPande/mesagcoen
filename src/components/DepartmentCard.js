import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import trophy from "../images/mechAchievement.jpeg";
import snehal from "../images/achievement3.png"
import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';

function DepartmentCard() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>

            <CardGroup className='mb-5' style={{ margin: "auto", width: "100%", height: "100%", padding: "20px" }}>
                <Card >
                    <Card.Img variant="top" src={trophy} />
                    <Card.Body >
                        <Card.Title className='fw-bolder'>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" src={snehal} />
                    <Card.Body >
                        <Card.Title className='fw-bolder'>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img variant="top" src={trophy} />
                    <Card.Body >
                        <Card.Title className='fw-bolder'>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>

    );
}

export default DepartmentCard;