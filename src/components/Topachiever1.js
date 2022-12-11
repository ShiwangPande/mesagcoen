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
import "./Topachiever1.css";

export default class PauseOnHover extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            // style: { marginLeft: "60px" },
            slidesToScroll: 3,
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

            <Slider {...settings} variant="dark" className="d-flex align-items-center justify-content-center" >
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>

                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' />
                        <h1 className='title'>HOD's message</h1>
                        <p className='description'> Dear Students,

                            Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
                <main className="mx-2" >
                    <div className='CardDesign' style={{ height: "100px", position: "relative", right: "60px" }}>
                        <div className='info' >
                            <h1 className='title'>HOD's message</h1>
                            <p className='description'> Dear Students,

                                Welcome to Government College of Engineering, Nagpur. Over the last two decades, GCOEN has made its mark in the field of education and is among the top ranked institutes of the country. GCOEN has evolved with a lot of courage and great commitment with a purpose to nurture education and research.{' '}</p>

                        </div>
                    </div>
                </main>
            </Slider>

        )
    }
}

