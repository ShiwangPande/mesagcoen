import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Navbar from './Navbar.js';
import Footer from './Footer';
import Loader from "./Loader";



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
                                        <img src="https://www.linkpicture.com/q/om-ambarte.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Om Ambarte</h5>
                                    <p className="text-uppercase blue-text"><strong>Advisor</strong></p>

                                    <a href='https://www.instagram.com/om_ambarte' target='_blank' className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }} >
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
                                        <img src="https://i.postimg.cc/wx5LtcM0/ashutosh-bhaiya.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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
                                        <img src="https://www.linkpicture.com/q/bhavika-didi2.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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
                                        <img src="https://i.postimg.cc/1zq0zkbj/renu-di.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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
                                        <img src="https://www.linkpicture.com/q/shlok-bhai.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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
                                        <img src="https://www.linkpicture.com/q/kaushik-bhaiya.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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
                                        <img src="https://www.linkpicture.com/q/akash-paraskar.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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
                                        <img src="https://www.linkpicture.com/q/shiwangPande.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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
                                        <img src="https://www.linkpicture.com/q/ketaki234.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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
                                        <img src="https://www.linkpicture.com/q/dovesh.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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
                                        <img src="https://www.linkpicture.com/q/parth_1.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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
                                        <img src="https://www.linkpicture.com/q/sanjivini-di.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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
                                        <img src="https://www.linkpicture.com/q/vishakha.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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
                                        <img src="https://www.linkpicture.com/q/senhal.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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
                                        <img src="https://www.linkpicture.com/q/pooja-didi.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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
                                        <img src="https://www.linkpicture.com/q/vedant.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
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