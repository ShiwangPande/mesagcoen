import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from 'react-bootstrap/Card';
// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Scrollbar() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                centeredSlides={true}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}

                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                        <Card.Img variant="top" src='https://i.postimg.cc/yYDmBc6J/Mr-Sahil-Jivan-Kothekar-3-png.webp' style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                        <Card.Body style={{ height: "210px" }}>
                            <Card.Title style={{ fontSize: "18px" }}>Mr.Sahil Jivan Kothekar</Card.Title>
                            <Card.Text style={{ fontSize: "15px" }}>
                                Mr.Sahil jivan kothekar got 9.47 cgpa
                                He was 2nd merit in year 2019-2022 from university in Mechanical branch also recieved Mr.Nilesh Mahakalkar prize of RTMNU
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                        <Card.Img variant="top" src="https://i.postimg.cc/vBG7dKDM/Mr-Devashish-Sontakke-3-png.webp" style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                        <Card.Body style={{ height: "210px" }}>
                            <Card.Title style={{ fontSize: "18px" }}>Mr.Devashish Sontakke</Card.Title>
                            <Card.Text style={{ fontSize: "15px" }}>
                                Mr.Devashish Sonatake has done Engineering Analysis and Design from Indian Institute of Technology,Delhi
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                        <Card.Img variant="top" src='https://i.postimg.cc/63HZx5DL/Mr-Swanand-Jugade-3-png.webp' style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                        <Card.Body style={{ height: "210px" }}>
                            <Card.Title style={{ fontSize: "18px" }}>Mr.Swanand Jugade</Card.Title>
                            <Card.Text style={{ fontSize: "15px" }}>
                                Mr.Swanand Jugade  has done Aerospace Engineering from College of Engineering and Applied Sciences, University of Cincinnati,Ohio ,US
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                        <Card.Img variant="top" src="https://i.postimg.cc/2SB7dvPp/Dhiraj-Nichant-png.webp" style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                        <Card.Body style={{ height: "210px" }}>
                            <Card.Title style={{ fontSize: "18px" }}>Mr.Dhiraj Nichant</Card.Title>
                            <Card.Text style={{ fontSize: "15px" }}>
                                Mr.Dhiraj Nichant a final year student recieved Best Outgoing Student (Sports) Award in year 2019-2020.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide><Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                    <Card.Img variant="top" src='https://i.postimg.cc/s2YPqzjw/Mr-Aayush-Ulhas-Deshmukh-3-png.webp' style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                    <Card.Body style={{ height: "210px" }}>
                        <Card.Title style={{ fontSize: "18px" }}>Mr.Ayush Ulhas Deshmukh</Card.Title>
                        <Card.Text style={{ fontSize: "15px" }}>
                            Mr.Ayush Ulhas Deshmukh has done  master of engineering (M.Eng) in Automotive Engineering from University of Michigan
                        </Card.Text>
                    </Card.Body>
                </Card></SwiperSlide>
                <SwiperSlide><Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                    <Card.Img variant="top" src="https://i.postimg.cc/ZnCdbzmk/MRAnkit-Jamaiwar-png.webp" style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                    <Card.Body style={{ height: "210px" }}>
                        <Card.Title style={{ fontSize: "18px" }}>Mr.Ankit Jamaiwar</Card.Title>
                        <Card.Text style={{ fontSize: "15px" }}>
                            Mr.Ankit Jamaiwar a third year student participated in Static Aeromodelling Competition and won Bronze medal
                        </Card.Text>
                    </Card.Body>
                </Card></SwiperSlide>
                <SwiperSlide><Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                    <Card.Img variant="top" src='https://i.postimg.cc/Zn2y0sYW/Ms-Akshita-Sukesh-Baghel-3-png.webp' style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                    <Card.Body style={{ height: "210px" }}>
                        <Card.Title style={{ fontSize: "18px" }}>Ms Akshita Sukesh Baghel</Card.Title>
                        <Card.Text style={{ fontSize: "15px" }}>
                            Ms Akshita Sukesh Baghel has done MSE in Automotive system engineering / mechanical engineering from University of Michigan
                        </Card.Text>
                    </Card.Body>
                </Card></SwiperSlide>
                <SwiperSlide><Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                    <Card.Img variant="top" src='https://i.postimg.cc/K8XM2WsV/snheal-jpg.webp' style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                    <Card.Body style={{ height: "210px" }}>
                        <Card.Title style={{ fontSize: "18px" }}>Ms Snheal joshi</Card.Title>
                        <Card.Text style={{ fontSize: "15px" }}>
                            Ms Snehal Sunil Joshi
                            Triathlete
                            Represented India at Asian Triathlon Championship Nepal ,
                            Asian Triathlon Cup,  Malaysia
                            Won Silver medal at Asain Duathlon open.
                        </Card.Text>
                    </Card.Body>
                </Card></SwiperSlide>
                <SwiperSlide><Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                    <Card.Img variant="top" src="https://i.postimg.cc/m2CLrq87/hardik-bhaiya-3.jpg" style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                    <Card.Body style={{ height: "210px" }}>
                        <Card.Title style={{ fontSize: "18px" }}>Mr.Ankit Jamaiwar</Card.Title>
                        <Card.Text style={{ fontSize: "15px" }}>
                            Mr. Hardik jagtap student of government College of engineering  nagpur studying in  mechanical 3rd year , participated in ashwamedh 2k22,  RTMNagpurUniversity basketball team secured 2nd position.
                        </Card.Text>
                    </Card.Body>
                </Card></SwiperSlide>
            </Swiper>
        </>
    );
}
