import React, { Component } from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import "./PauseOnHover.css";
import president from "../images/ashutosh bhaiya.png"
import Aayush_Deshmukh from "../images/Mr.Aayush Ulhas Deshmukh.png";
import Akshita_Baghel from "../images/Ms. Akshita Baghel.png";
import Dikshant_Nandanwar from "../images/Mr. Dikshant Nandanwar.png";
import Atharva_Pande from "../images/Mr.Atharva Pande.png";

export default class PauseOnHover extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        // button: 'black', }


        return (
            <div className="m-5" >
                <Slider {...settings} variant="dark" className="d-flex align-items-center justify-content-center" >
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ width: '500px' }}>
                            <Card.Img variant="top" src={Aayush_Deshmukh} style={{ height: "300px" }} />
                            <Card.Body>
                                <Card.Title>Mr.Aayush Deshmukh</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ width: '500px' }}>
                            <Card.Img variant="top" src={Atharva_Pande} style={{ height: "300px" }} />
                            <Card.Body>
                                <Card.Title>Mr.Atharva Pande</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ width: '500px' }}>
                            <Card.Img variant="top" src={Akshita_Baghel} style={{ height: "300px" }} />
                            <Card.Body>
                                <Card.Title>Ms. Akshita Baghel</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ width: '500px' }}>
                            <Card.Img variant="top" src={Dikshant_Nandanwar} style={{ height: "300px" }} />
                            <Card.Body>
                                <Card.Title><p style={{ fontSize: "16px", fontWeight: "600" }}>Mr. Dikshant Nandanwar</p></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ width: '500px' }}>
                            <Card.Img variant="top" src={president} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ width: '500px' }}>
                            <Card.Img variant="top" src={president} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ width: '500px' }}>
                            <Card.Img variant="top" src={president} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ width: '500px' }}>
                            <Card.Img variant="top" src={president} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ width: '500px' }}>
                            <Card.Img variant="top" src={president} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Slider>
            </div>
        );
    }
}

