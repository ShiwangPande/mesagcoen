import React, { Component } from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import "./PauseOnHover.css";
import Sahil_Kothekar from "../images/Mr.Sahil Jivan Kothekar.png";
import Devashish_Sontakke from "../images/Mr.Devashish Sontakke.png";
// atharav mhaske
import Swanand_Jugade from "../images/Mr. Swanand Jugade.png";
import Best_department_award from "../images/Best department award.png";
import Ayush_Deshmukh from "../images/Ayush Deshmukh .png";
import Dhiraj_Nichant from "../images/Dhiraj Nichant .png";
import MRAnkit_Jamaiwar from "../images/MRAnkit_Jamaiwar.png";
import "./Achievement1.css";


export default class PauseOnHover extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            style: { width: "100%", gap: "10rem" },
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 2,
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

            <Slider {...settings} variant="dark" className="d-flex align-items-center justify-content-center  mb-5" >
                <main >
                    <div className='CardDesign7' style={{
                        height: "100px"
                    }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign1' style={{
                        height: "100px"
                    }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>

                <main className="mx-2" >
                    <div className='CardDesign2' style={{
                        height: "100px"
                    }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>
                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign3' style={{
                        height: "100px"
                    }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign4' style={{
                        height: "100px"
                    }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign5' style={{
                        height: "100px"
                    }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign6' style={{
                        height: "100px"
                    }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
            </Slider >

        )
    }
}

