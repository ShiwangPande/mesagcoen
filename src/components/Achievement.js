import React, { Component } from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Sahil_Kothekar from "../images/Mr.Sahil Jivan Kothekar.png";
import Devashish_Sontakke from "../images/Mr.Devashish Sontakke.png";
// atharav mhaske
import Swanand_Jugade from "../images/Mr. Swanand Jugade.png";
import Best_department_award from "../images/Best department award.png";
import Ayush_Deshmukh from "../images/Ayush Deshmukh .png";
import Dhiraj_Nichant from "../images/Dhiraj Nichant .png";
import MRAnkit_Jamaiwar from "../images/MRAnkit_Jamaiwar.png";
// import Aayush_Deshmukh from "../images/Mr.Aayush Ulhas Deshmukh.png";
// import Akshita_Baghel from "../images/Ms. Akshita Baghel.png";
// import Dikshant_Nandanwar from "../images/Mr. Dikshant Nandanwar.png";
// import Atharva_Pande from "../images/Mr.Atharva Pande.png";

import "./PauseOnHover.css";
// import president from "../images/ashutosh.jpg";

export default class Achievement extends Component {
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
            <div style={{ margin: "30px 0px" }}>
                <Slider {...settings} variant="dark" className="d-flex align-items-center justify-content-center" >
                    <div className="d-flex align-items-center justify-content-center" >
                        <Card style={{ minHeight: "440px", width: '500px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                            <Card.Img variant="top" src='https://www.linkpicture.com/q/Mr.Sahil-Jivan-Kothekar_3.png' style={{ height: "300px", borderRadius: "20px 20px 0 0" }} />
                            <Card.Body style={{ height: "210px" }}>
                                <Card.Title style={{ fontSize: "18px" }}>Mr.Sahil Jivan Kothekar</Card.Title>
                                <Card.Text style={{ fontSize: "15px" }}>
                                    Mr.Sahil jivan kothekar got 9.47 cgpa
                                    He was 2nd merit in year 2019-2022 from university in Mechanical branch also recieved Mr.Nilesh Mahakalkar prize of RTMNU
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ minHeight: "440px", width: '500px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                            <Card.Img variant="top" src="https://www.linkpicture.com/q/Mr.Devashish-Sontakke_3.png" style={{ height: "300px", borderRadius: "20px 20px 0 0" }} />
                            <Card.Body style={{ height: "210px" }}>
                                <Card.Title style={{ fontSize: "18px" }}>Mr.Devashish Sontakke</Card.Title>
                                <Card.Text style={{ fontSize: "15px" }}>
                                    Mr.Devashish Sonatake has done Engineering Analysis and Design from Indian Institute of Technology,Delhi
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ minHeight: "440px", width: '500px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                            <Card.Img variant="top" src='https://www.linkpicture.com/q/Mr.Swanand-Jugade_3.png' style={{ height: "300px", borderRadius: "20px 20px 0 0" }} />
                            <Card.Body style={{ height: "210px" }}>
                                <Card.Title style={{ fontSize: "18px" }}>Mr.Swanand Jugade</Card.Title>
                                <Card.Text style={{ fontSize: "15px" }}>
                                    Mr.Swanand Jugade  has done Aerospace Engineering from College of Engineering and Applied Sciences, University of Cincinnati,Ohio ,US
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ minHeight: "440px", width: '500px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                            <Card.Img variant="top" src={Best_department_award} style={{ height: "300px", borderRadius: "20px 20px 0 0" }} />
                            <Card.Body style={{ height: "210px" }}>
                                <Card.Title style={{ fontSize: "18px" }}>Best Department Award</Card.Title>
                                <Card.Text style={{ fontSize: "15px" }}>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ minHeight: "440px", width: '500px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                            <Card.Img variant="top" src={Dhiraj_Nichant} style={{ height: "300px", borderRadius: "20px 20px 0 0" }} />
                            <Card.Body style={{ height: "210px" }}>
                                <Card.Title style={{ fontSize: "18px" }}>Mr.Dhiraj Nichant</Card.Title>
                                <Card.Text style={{ fontSize: "15px" }}>
                                    Mr.Dhiraj Nichant a final year student recieved Best Outgoing Student (Sports) Award in year 2019-2020.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ minHeight: "440px", width: '500px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                            <Card.Img variant="top" src='https://www.linkpicture.com/q/Mr.Aayush-Ulhas-Deshmukh_3.png' style={{ height: "300px", borderRadius: "20px 20px 0 0" }} />
                            <Card.Body style={{ height: "210px" }}>
                                <Card.Title style={{ fontSize: "18px" }}>Mr.Ayush Ulhas Deshmukh</Card.Title>
                                <Card.Text style={{ fontSize: "15px" }}>
                                    Mr.Ayush Ulhas Deshmukh has done  master of engineering (M.Eng) in Automotive Engineering from University of Michigan
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ minHeight: "440px", width: '500px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                            <Card.Img variant="top" src={MRAnkit_Jamaiwar} style={{ height: "300px", borderRadius: "20px 20px 0 0" }} />
                            <Card.Body style={{ height: "210px" }}>
                                <Card.Title style={{ fontSize: "18px" }}>Mr.Ankit Jamaiwar</Card.Title>
                                <Card.Text style={{ fontSize: "15px" }}>
                                    Mr.Ankit Jamaiwar a third year student participated in Static Aeromodelling Competition and won Bronze medal
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Card style={{ minHeight: "440px", width: '500px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                            <Card.Img variant="top" src='https://www.linkpicture.com/q/Ms.Akshita-Sukesh-Baghel_3.png' style={{ height: "300px", borderRadius: "20px 20px 0 0" }} />
                            <Card.Body style={{ height: "210px" }}>
                                <Card.Title style={{ fontSize: "18px" }}>Ms Akshita Sukesh Baghel</Card.Title>
                                <Card.Text style={{ fontSize: "15px" }}>
                                    Ms Akshita Sukesh Baghel has done MSE in Automotive system engineering / mechanical engineering from University of Michigan
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Slider>
            </div>



        );
    }
}

