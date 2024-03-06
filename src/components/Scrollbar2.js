import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
                        <Card.Img variant="top" src='https://i.postimg.cc/rwpG7bK3/mesa-214.webp' style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                        <Card.Body style={{ height: "210px" }}>
                            <Card.Title style={{ fontSize: "18px" }}>SPICE</Card.Title>
                            <Card.Text style={{ fontSize: "15px" }}>
                                Student Project Innovation Competition & Exhibition competition was organized by the MESA
                                committee of the government college of engineering Nagpur on the
                                occasion of engineers day on 20th of September 2022.
                            </Card.Text>
                        </Card.Body>
                        <a href="https://drive.google.com/file/d/1Bv-AZU4b1IrgjKhLvkMafIxBB-7huKAV/view?usp=sharing" target={"_blank"}>
                            <Button style={{ textAlign: "center" }} variant="outline-light" size="m-lg">View Report
                            </Button></a>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                        <Card.Img variant="top" src="https://i.postimg.cc/8zJjQxrn/mesa-204.webp" style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                        <Card.Body style={{ height: "210px" }}>
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
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                        <Card.Img variant="top" src='https://i.postimg.cc/264rm01N/mesa-164.webp' style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                        <Card.Body style={{ height: "210px" }}>
                            <Card.Title style={{ fontSize: "18px" }}>GOVERNMENT: ITI VISIT</Card.Title>
                            <Card.Text style={{ fontSize: "15px" }}>
                                ITI visit
                            </Card.Text>
                        </Card.Body>
                        <a href="https://drive.google.com/file/d/1LPY64ilWrxbO5HVSM-FADPLDEkuUwDlO/view?usp=sharing" target={"_blank"}>
                            <Button style={{ textAlign: "center" }} variant="outline-light" size="m-lg">View Report
                            </Button></a>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                        <Card.Img variant="top" src="https://i.postimg.cc/9F1F6Jkq/mesa-153.webp" style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                        <Card.Body style={{ height: "210px" }}>
                            <Card.Title style={{ fontSize: "18px" }}>INDUSTRIAL VISIT - THERMAL POWER PLANT</Card.Title>
                            <Card.Text style={{ fontSize: "15px" }}>
                                The M.E.S.A committee of the Government College
                                of Engineering, Nagpur organized an industrial visit
                                of both 2nd year and 3rd year to the thermal power
                                plant situated at Koradi.
                            </Card.Text>
                        </Card.Body>
                        <a href="https://drive.google.com/file/d/1DcvAlog8YhoH_QdJPk2y4P6ZQJxEyVna/view?usp=share_link" target={"_blank"}>
                            <Button style={{ textAlign: "center" }} variant="outline-light" size="m-lg">View Report
                            </Button></a>
                    </Card>
                </SwiperSlide>
                <SwiperSlide><Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                    <Card.Img variant="top" src='https://i.postimg.cc/W1LLfrNJ/mesa-61.webp' style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                    <Card.Body style={{ height: "210px" }}>
                        <Card.Title style={{ fontSize: "18px" }}>INDUTRIAL ROBOTICS & AUTOMATION</Card.Title>
                        <Card.Text style={{ fontSize: "15px" }}>
                            The Mechanical engineering student association, MESA organized a workshop
                            on Industrial Robotics and Automation and its Future opportunities.
                        </Card.Text>
                    </Card.Body>
                    <a href="https://drive.google.com/file/d/1DUrdOW0_k4P5ManE4llwR1r6JXpx0xnE/view?usp=sharing" target={"_blank"}>
                        <Button style={{ textAlign: "center" }} variant="outline-light" size="m-lg">View Report
                        </Button></a>
                </Card></SwiperSlide>
                <SwiperSlide><Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                    <Card.Img variant="top" src="https://i.postimg.cc/j5gCzvrf/mesa-79.webp" style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                    <Card.Body style={{ height: "210px" }}>
                        <Card.Title style={{ fontSize: "18px" }}>Bureau of Indian Standards.</Card.Title>
                        <Card.Text style={{ fontSize: "15px" }}>
                            The Mechanical engineering student association, MESA organized a guest lecture Bureau of Indian Standards.
                        </Card.Text>
                    </Card.Body>
                    <a href="https://drive.google.com/file/d/1DEiFyYEquNb4IQKk-cyBtevI2Pp8oPFV/view?usp=share_link" target={"_blank"}>
                        <Button style={{ textAlign: "center" }} variant="outline-light" size="m-lg">View Report
                        </Button></a>
                </Card></SwiperSlide>

                <SwiperSlide><Card style={{ minHeight: "440px", width: '550px', backgroundColor: 'rgb(57 62 70)', color: "#eeeeee", borderRadius: "20px", border: '1.3mm ridge rgb(34 40 49)' }} >
                    <Card.Img variant="top" src="https://i.postimg.cc/7PBT731D/asdasdasdasdasdc-1.png" style={{ height: "360px", borderRadius: "20px 20px 0 0" }} />
                    <Card.Body style={{ height: "210px" }}>
                        <Card.Title style={{ fontSize: "18px" }}>CATIA Workshop</Card.Title>
                        <Card.Text style={{ fontSize: "15px" }}>
                            A three day workshop on “CATIA Software” has been organised by the Mechanical
                            Engineering Student Association from 21st February to 23rd February 2023.
                        </Card.Text>
                    </Card.Body>
                    <a href="https://drive.google.com/file/d/1PyB-Awkphn2Y23Q8Z1W_eBuyiGbghKK3/view?usp=share_link" target={"_blank"}>
                        <Button style={{ textAlign: "center" }} variant="outline-light" size="m-lg">View Report
                        </Button></a>
                </Card></SwiperSlide>
               
            </Swiper>
        </>
    );
}
