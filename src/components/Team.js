import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
// import Nav from 'react-bootstrap/Nav';
import Navbar from './Navbar.js';
import VicePresident from '../images/bhavika didi2.png'
import Scretary1 from '../images/renu di.png'
import Secretary2 from '../images/shlok bhai.png'
import Treasurer1 from '../images/kaushik bhaiya.png'
// import Treasurer2 from '../images/shlok bhai.png'
import LR1 from '../images/vishakha.png'
import LR2 from '../images/senhal.png'
import LR3 from '../images/sanjivini di.png'
import SportsCoordinator from '../images/pooja didi.png'
import SportsCoordinator2 from '../images/vedant.png'
// import TechHead1 from '../images/shiwang.png'
import TechHead2 from '../images/parth.png'
import TechHead3 from '../images/dovesh.png'
import Footer from './Footer';
// import TeamWork from '../images/teamwork.png'
// import TeamWork2 from '../images/teamwork2.png'
// import Button from 'react-bootstrap/Button';
// import logo from '../images/mesa-logo.png'
// import gears from '../images/gears.png'
import Loader from "./Loader";
// import Team1 from './Team1';
// import { useParallax } from 'react-scroll-parallax';
// import RotationAxis from './Parallax.js';
// import { Parallax } from 'react-scroll-parallax';
// import akash_bhaiya from '../images/akash paraskar.png';
import President from '../images/ashutosh bhaiya.png';
import shiwang from "../images/shiwangPande.png"
import advisor from "../images/om ambarte.png"
import ketaki from "../images/ketaki234.png"
import akash from "../images/akash paraskar.png"



function Team() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, [])


    return (
        <div >
            {loading ?

                <Loader className='Team-Loader' style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
                    // color={'#294a65'}
                    loading={loading}
                    // cssOverride={override}
                    size={300}
                // aria-label="Loading Spinner"
                // data-testid="loader"
                // speedMultiplier={1.5}
                /> :
                <div>
                    <Navbar />
                    {/* <Parallax
                        rotate={[0, 360]}
                        style={{ height: '200px', width: "200px", margin: "auto", position: "absolute", top: "90vh", left: "50vw", zIndex: "-1" }}
                    >
                        <div className="spinner">
                            <img style={{ width: "200px", height: "200px", transformOrigin: "50% 50%" }} src={gears} alt="" />

                        </div>

                    </Parallax>
                    <Parallax
                        rotate={[0, 360]}
                        style={{ height: '200px', width: "200px", margin: "auto", position: "absolute", top: "50vh", left: "50vw", zIndex: "-1" }}
                    >
                        <div className="spinner">
                            <img style={{ width: "200px", height: "200px", transformOrigin: "50% 50%" }} src={gears} alt="" />

                        </div>

                    </Parallax> */}
                    {/* <Team1 /> */}
                    {/* <Parallax speed={-10}>
                        <RotationAxis />

                    </Parallax> */}


                    <Container>
                        <h1 className="h1-responsive font-weight-bold my-5 d-flex align-items-center justify-content-center" ><strong style={{ textAlign: "center" }}>MESA COMMITTEE <br />2022-23</strong>

                        </h1>


                        <div className="profile_card" >
                            <div className="profile_section">
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={advisor} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Om Ambarte</h5>
                                    <p className="text-uppercase blue-text"><strong>Advisor</strong></p>

                                    <a href='https://www.instagram.com/ashutosh_acharya___/' target='_blank' className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }} >
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.instagram.com/bhvk_khd/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>

                                </div>
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={President} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Ashutosh Acharya</h5>
                                    <p className="text-uppercase blue-text"><strong>President</strong></p>

                                    <a href='https://www.instagram.com/ashutosh_acharya___/' target='_blank' className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }} >
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.instagram.com/bhvk_khd/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>

                                </div>



                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={VicePresident} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Bhavika Khode</h5>
                                    <p className="text-uppercase blue-text"><strong>Vice-President</strong></p>

                                    <a href='https://www.instagram.com/bhvk_khd/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='https://www.instagram.com/bhvk_khd/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.instagram.com/bhvk_khd/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                            </div>
                            <hr />
                            {/* <h1 className="h1-responsive font-weight-bold my-3 d-flex align-items-center justify-content-center">
                                <strong> Secretary </strong>
                            </h1> */}
                            <div className="profile_section">
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={Scretary1} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Renu  Bhendarkar</h5>
                                    <p className="text-uppercase blue-text"><strong>Secretary</strong></p>

                                    <a href='https://www.instagram.com/rayy__03/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>

                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={Secretary2} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Shlok Tajne</h5>
                                    <p className="text-uppercase blue-text"><strong> Joint-Secretary</strong></p>

                                    <a href='https://www.instagram.com/shloktajne_/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                                {/* </div> */}
                                {/* <hr /> */}
                                {/* <h1 className="h1-responsive font-weight-bold my-3 d-flex align-items-center justify-content-center">
                                <strong> Treasurer</strong>
                            </h1> */}
                                {/* <div className="profile_section"> */}
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={Treasurer1} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Kaushik Maske</h5>
                                    <p className="text-uppercase blue-text"><strong>Treasurer</strong></p>

                                    <a href='https://www.instagram.com/bhvk_khd/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                                {/* <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={Treasurer2} className=" z-depth-1-half" alt="Sample avatar" style={{width: "200px", height: "250px",border: "1.3mm ridge rgb(238, 238, 238)",marginTop: "20px",borderRadius: "32px" }}  }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Falgun Lonkar</h5>
                                    <p className="text-uppercase blue-text"><strong>Treasurer</strong></p>

                                    <a href='https://www.instagram.com/_falo_16/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div> */}
                            </div>
                            <hr />
                            <div className="profile_section">
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={akash} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Akash Paraskar</h5>
                                    <p className="text-uppercase blue-text"><strong>Tech Lead</strong></p>

                                    <a href='https://www.instagram.com/poojashahu_21/' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={shiwang} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Shiwang Pandey</h5>
                                    <p className="text-uppercase blue-text"><strong>Tech Head</strong></p>

                                    <a href='https://www.instagram.com/__shiwang/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>

                            </div>
                            {/* <hr /> */}
                            {/* <h1 className="h1-responsive font-weight-bold my-3 d-flex align-items-center justify-content-center">
                                <strong>Technical Head </strong>
                            </h1> */}
                            <div className="profile_section">

                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={ketaki} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Ketaki Mahalle</h5>
                                    <p className="text-uppercase blue-text"><strong>Social Media Head</strong></p>

                                    <a href='https://www.instagram.com/ved_nimgade_official._/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={TechHead3} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Dovesh Aglawe</h5>
                                    <p className="text-uppercase blue-text"><strong>Tech Head</strong></p>

                                    <a href='https://www.instagram.com/dovesh.aglawe.2004/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>

                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={TechHead2} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Parth Tirmare</h5>
                                    <p className="text-uppercase blue-text"><strong>Tech Head</strong></p>

                                    <a href='https://www.instagram.com/p.art.h___13/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                            </div>
                            <hr />
                            {/* <h1 className="h1-responsive font-weight-bold my-3 d-flex align-items-center justify-content-center">
                                <strong> Ladies Representative </strong>
                            </h1> */}
                            <div className="profile_section">
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={LR3} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Sanjiwani Choudhary</h5>
                                    <p className="text-uppercase blue-text"><strong>Ladies Representative</strong></p>

                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={LR1} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Vishakha Bondre</h5>
                                    <p className="text-uppercase blue-text"><strong>Ladies Representative</strong></p>

                                    <a href='https://www.instagram.com/bondrevishakha/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>

                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={LR2} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Snehal Joshi</h5>
                                    <p className="text-uppercase blue-text"><strong>Ladies Representative</strong></p>

                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>

                            </div>
                            <hr />
                            {/* <h1 className="h1-responsive font-weight-bold my-3 d-flex align-items-center justify-content-center">
                                <strong>Sports Coordinator </strong>
                            </h1> */}
                            <div className="profile_section">
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={SportsCoordinator} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Pooja shahu</h5>
                                    <p className="text-uppercase blue-text"><strong>Sports Coordinator</strong></p>

                                    <a href='https://www.instagram.com/poojashahu_21/' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src={SportsCoordinator2} className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Vedant Nimgade</h5>
                                    <p className="text-uppercase blue-text"><strong>Sports Coordinator</strong></p>

                                    <a href='https://www.instagram.com/ved_nimgade_official._/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                            </div>
                            {/* <hr /> */}

                            <div className='my-3'></div>
                        </div>
                    </Container>
                    <Footer />
                </div>
            }

        </div>
    )
}

export default Team