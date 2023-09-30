import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Navbar from './Navbar.js';
import Footer from './Footer';
import Loader from "./Loader";

import Button from 'react-bootstrap/Button';

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


                    <Container>
                        <h1 className="h1-responsive font-weight-bold my-5 d-flex align-items-center justify-content-center" ><strong style={{ textAlign: "center" }}>MESA COMMITTEE <br />2023-24</strong>

                        </h1>


                        <div className="profile_card" >
                            {/* president */}
                            <div className="profile_section">
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/Kv3dWcq5/1.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Maurya Khandait</h5>
                                    <p className="text-uppercase blue-text"><strong>President</strong></p>

                                    <a href='https://www.instagram.com/om_ambarte' target='_blank' className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }} >
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/om-ambarte-3b185421a/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>

                                </div>
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/rwS78nL0/2.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Shiwang Pandey</h5>
                                    <p className="text-uppercase blue-text"><strong>Vice President</strong></p>

                                    <a href='https://www.instagram.com/ashutosh_acharya___/' target='_blank' className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }} >
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/ashutosh-acharya-ab13431b1/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>

                                </div>



                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/R04yq7MP/3.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Parth Tirmare</h5>
                                    <p className="text-uppercase blue-text"><strong>Vice President</strong></p>

                                    <a href='https://www.instagram.com/bhvk_khd/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='https://www.instagram.com/bhvk_khd/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                            </div>
                            <hr />
                            {/* secretary */}
                            <div className="profile_section">
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/MHNgGgTR/4.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Ketaki Mahalle</h5>
                                    <p className="text-uppercase blue-text"><strong>Secretary</strong></p>

                                    <a href='https://www.instagram.com/rayy__03/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/renu-bhendarkar-a956bb237/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>

                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/XvLh5rqn/5.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Sushrut Kohale</h5>
                                    <p className="text-uppercase blue-text"><strong>Joint Secretary</strong></p>

                                    <a href='https://www.instagram.com/shloktajne_/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/shlok-tajne-45b3531b9/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>



                            </div>
                            <hr />
                            {/* org head */}
                            <div className="profile_section">
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/d1SxWgGX/6.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Rutuja Nimbalkar</h5>
                                    <p className="text-uppercase blue-text"><strong>Organization Head</strong></p>

                                    <a href='https://instagram.com/_.kaushik._45?igshid=YmMyMTA2M2Y=' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
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
                                        <img src="https://i.postimg.cc/Kc1GZ2p1/7.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Varun Dudhane</h5>
                                    <p className="text-uppercase blue-text"><strong>Organization Co head</strong></p>

                                    <a href='https://instagram.com/akash_paraskar_?igshid=YmMyMTA2M2Y=' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/akash-paraskar-4b99b0234/' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/prh13kZd/8.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Ayush Khangar</h5>
                                    <p className="text-uppercase blue-text"><strong>Organization Co head</strong></p>

                                    <a href='https://www.instagram.com/__shiwang/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/shiwang-pandey/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>

                            </div>
                            <hr />
                            {/* sport coordinator */}
                            <div className="profile_section">

                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/GtTz2263/Untitled-design-18.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Vedant Nimgade</h5>
                                    <p className="text-uppercase blue-text"><strong>Sports Coordinator</strong></p>

                                    <a href='https://instagram.com/ketaki_14?igshid=YmMyMTA2M2Y=' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
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
                                        <img src="https://i.postimg.cc/NGZgFzZp/9.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Virendra Rathod</h5>
                                    <p className="text-uppercase blue-text"><strong>Sports Head</strong></p>

                                    <a href='https://www.instagram.com/p.art.h___13/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
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
                                        <img src="https://i.postimg.cc/wMCbzJfQ/10.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Prasad Sawalkar</h5>
                                    <p className="text-uppercase blue-text"><strong>Sports Head</strong></p>

                                    <a href='https://www.instagram.com/bondrevishakha/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/vishakha-bondre-b76a18257/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>

                            </div>

                            <div className="profile_section">

                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/wMCbzJfQ/10.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Prasad Sawalkar</h5>
                                    <p className="text-uppercase blue-text"><strong>Sports Co Head</strong></p>

                                    <a href='http://instagram.com/_sam_2605?igshid=ZmRIMzRkMDU=' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/sanjiwani-c-78564320a/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/PrZdwMjh/11.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Ameya Moharil</h5>
                                    <p className="text-uppercase blue-text"><strong>Sports Co head</strong></p>

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
                            {/* LR */}
                            <div className="profile_section">

                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/tgrbjShd/15.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Nikita Rahangdale </h5>
                                    <p className="text-uppercase blue-text"><strong>Ladies representative</strong></p>

                                    <a href='https://www.instagram.com/ved_nimgade_official._/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/vedant-nimgade-2a1b6423b/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/1XF1DybM/17.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Asmita Suryavanshi </h5>
                                    <p className="text-uppercase blue-text"><strong>Ladies representative</strong></p>

                                    <a href='https://www.instagram.com/ved_nimgade_official._/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/vedant-nimgade-2a1b6423b/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/ZRCSK8cG/16.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Radhika Pimple</h5>
                                    <p className="text-uppercase blue-text"><strong>Ladies representative</strong></p>

                                    <a href='https://www.instagram.com/ved_nimgade_official._/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/vedant-nimgade-2a1b6423b/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                            </div>
                            <hr />
                            {/* treasurer */}
                            <div className="profile_section">

                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/52S1PNyR/13.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Shlok Tajne</h5>
                                    <p className="text-uppercase blue-text"><strong>Treasurer</strong></p>

                                    <a href='https://www.instagram.com/ved_nimgade_official._/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/vedant-nimgade-2a1b6423b/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/wBxzn8sT/14.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Aditya Muddamwa</h5>
                                    <p className="text-uppercase blue-text"><strong>Joint Treasurer</strong></p>

                                    <a href='https://www.instagram.com/ved_nimgade_official._/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/vedant-nimgade-2a1b6423b/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>


                            </div>
                            <hr />
                            {/* tech team */}
                            <div className="profile_section">


                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/d1pK7hNL/18.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Arnav Gadpayle</h5>
                                    <p className="text-uppercase blue-text"><strong>Tech Head</strong></p>

                                    <a href='https://www.instagram.com/ved_nimgade_official._/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/vedant-nimgade-2a1b6423b/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/G2MZW4nX/19.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Ranashashank Ambad </h5>
                                    <p className="text-uppercase blue-text"><strong>Technical Co head</strong></p>

                                    <a href='https://www.instagram.com/ved_nimgade_official._/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/vedant-nimgade-2a1b6423b/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/HnVfdTpd/20.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Mitali Stephen</h5>
                                    <p className="text-uppercase blue-text"><strong>Technical co head</strong></p>

                                    <a href='https://www.instagram.com/ved_nimgade_official._/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/vedant-nimgade-2a1b6423b/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>

                            </div>
                            <hr />
                            {/* E M */}
                            <div className="profile_section">



                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/htFHRFNR/21.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Sushant Gujar</h5>
                                    <p className="text-uppercase blue-text"><strong>Executive Member</strong></p>

                                    <a href='https://www.instagram.com/ved_nimgade_official._/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/vedant-nimgade-2a1b6423b/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-lg-0 mb-3 profile" >
                                    <div className="avatar mx-auto">
                                        <img src="https://i.postimg.cc/1RjkMVHt/22.png" className=" z-depth-1-half" alt="Sample avatar" style={{ width: "200px", height: "250px", border: "1.3mm ridge rgb(238, 238, 238)", marginTop: "20px", borderRadius: "32px" }} />
                                    </div>
                                    <h5 className="font-weight-bold mt-4 mb-3">Anurag Darvatkar</h5>
                                    <p className="text-uppercase blue-text"><strong>Executive Member</strong></p>

                                    <a href='https://www.instagram.com/ved_nimgade_official._/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-fb" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsInstagram />
                                    </a>
                                    <a href='' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>

                                    </a>
                                    <a href='https://www.linkedin.com/in/vedant-nimgade-2a1b6423b/' target='_blank' type="button" className="btn-floating btn-sm mx-2 mb-2 btn-tw" style={{ fontSize: "30px", color: "#eeeeee" }}>
                                        <BsLinkedin />
                                    </a>
                                </div>
                            </div>
                            {/* <hr /> */}

                    <a href="/team2" target={"_blank"}>
                        <Button style={{ textAlign: "center" }} variant="outline-dark" size="lg">Previous Committee
                        </Button></a>
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