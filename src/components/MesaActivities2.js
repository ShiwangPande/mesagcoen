import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import SlideShowGallery from './SlideShowGallery';
import Slider from "react-slick";
import NavBar from './Navbar';
import Scrollbar2 from "./Scrollbar2";

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
          <Scrollbar2 />

        </Container>
        <Footer />
      </div>
    );
  }
}