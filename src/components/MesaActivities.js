import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/mesa logo WHITE PNG.png'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Footer from './Footer';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import SlideShowGallery from './SlideShowGallery';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import NavBar from './Navbar';


export default class MesaActivities extends Component {
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
    return (
      <div>
        <NavBar />
        <SlideShowGallery />
        <Container>
          <h1 style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>Events & Industrial Visits</h1>
          <div style={{ margin: "30px 0px" }}>
            <Slider {...settings} variant="dark" className="d-flex align-items-center justify-content-center" >
              <div className="d-flex align-items-center justify-content-center" >
                <Card className="activity_card" style={{ backgroundColor: "rgb(57 62 70)" }}>
                  <Card.Img className="activity_image" variant="top" src="https://www.linkpicture.com/q/5_286.jpg" />
                  <Card.Body style={{ height: "200px" }} classNamed='flex align-items-center justify-content-center'>
                    <Card.Title style={{ fontSize: "18.5px" }}>SPICE</Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>
                      Student Project Innovation Competition & Exhibition competition was organized by the MESA
                      committee of the government college of engineering Nagpur on the
                      occasion of engineers day on 20th of September 2022.
                    </Card.Text>
                  </Card.Body>
                  <a href="https://drive.google.com/file/d/1Bv-AZU4b1IrgjKhLvkMafIxBB-7huKAV/view?usp=sharing" target={"_blank"}>
                    <Button style={{ textAlign: "center" }} variant="outline-light" size="m-lg">View Report
                    </Button></a>
                </Card>
              </div>
              {/* https://www.linkpicture.com/q/1_921.jpg */}
              <div className="d-flex align-items-center justify-content-center">
                <Card className="activity_card" style={{ backgroundColor: "rgb(57 62 70)" }}>
                  <Card.Img className="activity_image" variant="top" src="https://www.linkpicture.com/q/4_271.jpg" />
                  <Card.Body style={{ height: "200px" }}>
                    <Card.Title style={{ fontSize: "18px" }}>TECHNICAL QUIZ</Card.Title>
                    <Card.Text style={{ fontSize: "15px" }}>
                      Mesa committee of government college of
                      engineering Nagpur, organized an inter branch
                      technical quiz competition on an occasion of
                      engineers day.
                    </Card.Text>
                  </Card.Body>
                  <a href="https://drive.google.com/file/d/1CM67RjfsrK3VtyAFZ84gd8t5ooNwNATd/view?usp=sharing" target={"_blank"}>
                    <Button style={{ textAlign: "center" }} variant="outline-light" size="m-lg">View Report
                    </Button></a>
                </Card>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Card className="activity_card" style={{ backgroundColor: "rgb(57 62 70)" }}>
                  <Card.Img className="activity_image" variant="top" src="https://www.linkpicture.com/q/37_38.jpg" />
                  <Card.Body style={{ height: "200px" }}>
                    <Card.Title style={{ fontSize: "18px" }}>GOVERNMENT: ITI VISIT</Card.Title>
                    <Card.Text style={{ fontSize: "15px" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut illum eaque sequi placeat mollitia
                    </Card.Text>
                  </Card.Body>
                  <a href="https://drive.google.com/file/d/1LPY64ilWrxbO5HVSM-FADPLDEkuUwDlO/view?usp=sharing" target={"_blank"}>
                    <Button style={{ textAlign: "center" }} variant="outline-light" size="m-lg">View Report
                    </Button></a>
                </Card>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Card className="activity_card" style={{ backgroundColor: "rgb(57 62 70)" }}>
                  <Card.Img className="activity_image" variant="top" src="https://www.linkpicture.com/q/3rd-year-9_2.jpg" />
                  <Card.Body style={{ height: "200px" }}>
                    <Card.Title style={{ fontSize: "17px" }}>INDUSTRIAL VISIT - THERMAL POWER PLANT</Card.Title>
                    <Card.Text style={{ fontSize: "14px" }}>
                      The M.E.S.A committee of the Government College
                      of Engineering, Nagpur organized an industrial visit
                      of both 2nd year and 3rd year to the thermal power
                      plant situated at Koradi.
                    </Card.Text>
                  </Card.Body>
                  <a href="https://drive.google.com/file/d/1LPY64ilWrxbO5HVSM-FADPLDEkuUwDlO/view?usp=sharing" target={"_blank"}>
                    <Button style={{ textAlign: "center" }} variant="outline-light" size="m-lg">View Report
                    </Button></a>
                </Card>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Card className="activity_card" style={{ backgroundColor: "rgb(57 62 70)" }} >
                  <Card.Img className="activity_image" variant="top" src="https://www.linkpicture.com/q/robotics26.jpg" />
                  <Card.Body style={{ height: "200px" }}>
                    <Card.Title style={{ fontSize: "18px" }}>INDUTRIAL ROBOTICS & AUTOMATION</Card.Title>
                    <Card.Text style={{ fontSize: "15px" }}>
                      The Mechanical engineering student association, MESA organized a workshop
                      on Industrial Robotics and Automation and its Future opportunities.
                    </Card.Text>
                  </Card.Body>
                  <a href="https://drive.google.com/file/d/1DUrdOW0_k4P5ManE4llwR1r6JXpx0xnE/view?usp=sharing" target={"_blank"}>
                    <Button style={{ textAlign: "center" }} variant="outline-light" size="m-lg">View Report
                    </Button></a>
                </Card>
              </div>
              {/* <div className="d-flex align-items-center justify-content-center">
                <Card style={{ minHeight: "440px", width: '500px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                  <Card.Img variant="top" src='https://www.linkpicture.com/q/Mr.Aayush-Ulhas-Deshmukh_3.png' style={{ height: "300px", borderRadius: "20px 20px 0 0" }} />
                  <Card.Body style={{ height: "200px" }}>
                    <Card.Title style={{ fontSize: "18px" }}>Mr.Ayush Ulhas Deshmukh</Card.Title>
                    <Card.Text style={{ fontSize: "15px" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut illum eaque sequi placeat mollitia
                    </Card.Text>
                  </Card.Body>
                  <Link to="/gallery#Thermal-PowerPlant" >
                    <Button style={{ textAlign: "center" }} variant="outline-light" size="m-lg">View Report
                    </Button></Link>
                </Card>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Card style={{ minHeight: "440px", width: '500px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                  <Card.Img variant="top" src="https://www.linkpicture.com/q/3rd-year-9_2.jpg" style={{ height: "300px", borderRadius: "20px 20px 0 0" }} />
                  <Card.Body style={{ height: "200px" }}>
                    <Card.Title style={{ fontSize: "18px" }}>Mr.Ankit Jamaiwar</Card.Title>
                    <Card.Text style={{ fontSize: "15px" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut illum eaque sequi placeat mollitia
                    </Card.Text>
                  </Card.Body>
                  <Link to="/gallery#Thermal-PowerPlant">
                    <Button style={{ textAlign: "center" }} variant="outline-light" size="m-lg">View Report
                    </Button></Link>
                </Card>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Card style={{ minHeight: "440px", width: '500px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                  <Card.Img variant="top" src='https://www.linkpicture.com/q/Ms.Akshita-Sukesh-Baghel_3.png' style={{ height: "300px", borderRadius: "20px 20px 0 0" }} />
                  <Card.Body style={{ height: "200px" }}>
                    <Card.Title style={{ fontSize: "18px" }}>Ms Akshita Sukesh Baghel</Card.Title>
                    <Card.Text style={{ fontSize: "15px" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut illum eaque sequi placeat mollitia
                    </Card.Text>
                  </Card.Body>
                  <Link to="/gallery#Thermal-PowerPlant">
                    <Button style={{ textAlign: "center" }} variant="outline-light" size="m-lg">View Report
                    </Button></Link>
                </Card>
              </div> */}
            </Slider>
          </div>
          {/* <div className="form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfQzT4egtT6ZTpOK7yA08kXI11MyPBF1qctshrA0xoUWtJw4w/viewform?embedded=true" width="640" height="1725px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div> */}
        </Container>
        <Footer />
      </div>
    );
  }
}