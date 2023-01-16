import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './CardMessage.css'
import ListGroup from 'react-bootstrap/ListGroup';
import React from "react";


function CardMessage() {

    return (


        <CardGroup >

            <Card className='card d-flex align-self-center  ' style={{ borderRadius: "20px", backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>

                <Card.Img className="bd-placeholder-img   w-50 h-100 " variant="top" src="https://i.postimg.cc/L6WVZvQB/hod-jpg-png.webp" style={{ borderRadius: "32px", border: '1.3mm ridge #eeeeee', marginTop: "20px" }} />
                <Card.Body>
                    <Card.Title><h3>HOD's message</h3></Card.Title>
                    <Card.Text style={{ textAlign: "none" }}>
                        To be the center of excellence in the field of Mechanical Engineering education and research. We ensure to provide quality and valuable education to students in the field by providing state-of-art facilities for research and consultancy and to Pursue higher education and contribute in research & development with their full of energetic moves towards Core.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush" style={{ width: "100%", borderRadius: "0px 0 32px 32px", fontWeight: "600" }}>
                    <ListGroup.Item>Email: hod.mech@gcoen.ac.in</ListGroup.Item>
                    <ListGroup.Item>Contact: +918237021103</ListGroup.Item>
                </ListGroup>
            </Card>

            <Card className='card d-flex align-self-center ' style={{ borderRadius: "20px", backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                <Card.Img className="bd-placeholder-img   w-50 h-100 " variant="top" src="https://i.postimg.cc/L65TXGD8/monika-ma-am-png.webp" style={{ borderRadius: "32px", border: '1.3mm ridge #eeeeee', marginTop: "20px" }} />
                <Card.Body>
                    <Card.Title><h4>Coordinator's message</h4></Card.Title>
                    <Card.Text style={{ textAlign: "none" }}>
                        It was truly said that ‘’Education is a shared commitment between dedicated professors, motivated students and enthusiastic parents with high expectations’’. We strive to allow every student to encourage themselves and find their path to success through a carefully planned curriculum. Each student has his unique quality and we provide a mentor for every student.{' '}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush" style={{ width: "100%", borderRadius: "0px 0 32px 32px", fontWeight: "600" }}>
                    <ListGroup.Item>Email: mssatpute@gcoen.ac.in</ListGroup.Item>
                    <ListGroup.Item>Contact: +918007607864</ListGroup.Item>

                </ListGroup>

            </Card>


            <Card className='card d-flex align-self-center ' style={{ borderRadius: "20px", backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                <Card.Img className="bd-placeholder-img  w-50 h-100 " variant="top" src="https://i.postimg.cc/MTrnr3Q9/president.webp" style={{ borderRadius: "32px", border: '1.3mm ridge #eeeeee', marginTop: "20px" }} />
                <Card.Body>
                    <Card.Title><h3>President's message</h3></Card.Title>
                    <Card.Text style={{ textAlign: "none" }}>

                        Being the president of mesa i aim towards providing healthy environment in our department among all four year student  and also to provide technical knowledge that i have gained by exposing myself to various domains. We as mesa have actively proved to be the best branch in previous years and i wish to continue
                        The legacy.{' '}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush" style={{ width: "100%", borderRadius: "0px 0 32px 32px", fontWeight: "600" }}>
                    <ListGroup.Item > Email: ashutosh13052001@gmail.com</ListGroup.Item>
                    <ListGroup.Item>Contact: +918669071583</ListGroup.Item>

                </ListGroup>
            </Card>
        </CardGroup >
    );
}

export default CardMessage;