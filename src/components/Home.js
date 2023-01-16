import Container from 'react-bootstrap/Container';
import Navbar from './Navbar.js';
import React, { useEffect, useState, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import SlideShow from './SlideShow'
import Navtabs from './NavTabs';
import Row from 'react-bootstrap/Row';
import CardMessage from './CardMessage';
import Card from 'react-bootstrap/Card';
import { ThemeProvider } from 'react-bootstrap';
import Footer from './Footer';
import Achievement from './Achievement.js';
import Loader from "./Loader";
import Popup from './Popup';
import { GoogleButton } from 'react-google-button';
import { signInWithGoogle, signOutwithGoogle } from '../context/AuthContext';


function Home() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, [])
    // const [buttonPopup, setButtonPopup] = useState(false);
    const [timedPopup, setTimedPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 5000);
    }, []);
    // const trailer = document.getElementById('trailer');
    // window.onmousemove = function (e) {
    //     const x = e.clientx - trailer.offsetWidth / 2;
    //     const y = e.clienty - trailer.offsetHeight / 2;
    //     trailer.style.transform = 'translate(${x}px,${y}px)';

    // }

    return (
        <div className='Home'>
            {loading ?

                <Loader
                    // color={'#294a65'}
                    loading={loading}
                    // cssOverride={override}
                    size={300}
                // aria-label="Loading Spinner"
                // data-testid="loader"
                // speedMultiplier={1.5}
                /> :
                <div style={{ overflowX: "hidden" }}>
                    <Navbar />
                    <SlideShow />
                    <ThemeProvider
                        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                        minBreakpoint="xxs"
                    >
                        <img className='main_logo' src="https://i.postimg.cc/2yvY0F96/mesa-logo-1.png" alt="" />
                        <h1 className="col-md-9   fw-bolder d-flex align-items-center justify-content-center " style={{ textAlign: "center", margin: "43px auto 100px", padding: "0 95px" }}>Mechanical Engineering <br />Student Association <br />(MESA) </h1>
                        <Container className='card_cont p-0' >



                            <CardMessage />

                            <Row className='mt-5'>
                                <Col className="md-19" style={{ margin: "11px" }}>
                                    <h1 id='news_events' className="mt-4 mb-4 col-md-9  m-auto fw-bolder " style={{ textAlign: "center" }}>News & events</h1>
                                    <Navtabs />
                                    <div className="mt-5 ratio ratio-16x9">
                                        <iframe
                                            // https://youtu.be/
                                            src="https://www.youtube.com/embed/FoS-BKzdS_Y"
                                            title="YouTube video"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <Card.Text>
                                    </Card.Text>
                                </Col>

                                <Col className="md-19" style={{ margin: "11px" }}>
                                    <h1 id='about_the_mesa' className="mt-4 mb-4 col-md-9  m-auto fw-bolder " style={{ textAlign: "center" }} >About MESA</h1>

                                    <p class="cutoff-text mt-5" style={{ margin: "11px", textAlign: "justify", padding: "25px", background: "#393E46", color: "#EEEEEE", borderRadius: "20px" }} >
                                        MESA is among the most active student bodies in the institute. Every Mechanical Engineering student beginning his journey with the first year in the program at GCOEN is a member of MESA. Mentored by experienced faculty members of the Mechanical Engineering department, students take upon many initiatives that prepare them to face the challenges of the future. The department newsletter also sees significant contributions from MESA. MESA takes an active role in the institute events. In all events, DRISHTI is the mechanical techfest event of Governmnet College of Engineering Nagpur. Competitions leveraging industry-oriented methods and software tools such as those from the area of CAD are also held. In addition to technical events, co-curricular and extracurricular activities are also organized by the department for students. Various Workshops and Guest lectures are conducted under MESA. Along with that industrial visits are also provided by the college for students for practical knowledge.
                                        <br />

                                        Program Educational Objectives:<br />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M16 12l-6 6V6z" fill="rgba(238,238,238,1)" /></svg>Graduates of the program will become competent engineers suitable for the mechanical engineering-based industry and higher education.<br />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M16 12l-6 6V6z" fill="rgba(238,238,238,1)" /></svg>Graduates of the program will acquire the necessary foundation in fundamental mechanical engineering subjects for the development of mathematical and analytical abilities.<br />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M16 12l-6 6V6z" fill="rgba(238,238,238,1)" /></svg>Graduates of the program will acquire the knowledge and skills in mechanical engineering to provide technological solutions.<br />
                                    </p>
                                    <input class="expand-btn" type="checkbox" ></input>
                                </Col>
                            </Row>
                            <Row className='mt-5'>
                                <h1 id='about_the_mesa' className="mt-5 col-md-9  m-auto fw-bolder " style={{ textAlign: "center" }}>Achievements</h1>
                                <Achievement />
                            </Row>
                        </Container>
                    </ThemeProvider>
                    <br />
                    {/* <button onClick={() => setButtonPopup(true)}> open Popup</button> */}
                    {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <h1>my popup</h1>
                        <button onClick={signInWithGoogle}><GoogleButton /></button>
                    </Popup> */}
                    <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                        <h3>Continue As:</h3>
                        <hr />
                        <button onClick={() => { signInWithGoogle(); setTimedPopup(false) }} style={{ borderRadius: "none", pointer: "cursor" }}><GoogleButton /></button>
                    </Popup>
                    <Footer />
                </div>
            }

        </div>
    );
}

export default Home