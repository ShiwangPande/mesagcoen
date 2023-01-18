import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import FooterPic from '../images/footer.jpg'
import { MDBIcon } from 'mdb-react-ui-kit';
export default function Footer() {
    return (
        <MDBFooter className='text-center text-lg-start text-white' style={{ background: "rgb(34, 40, 49)" }}>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                {/* <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                        <MDBIcon icon='camera' size='xs' />
                        <MDBIcon className='ms-1' icon='camera' size='sm' />
                        <MDBIcon className='ms-1' icon='camera' size='lg' />
                        <MDBIcon className='ms-1' icon='camera' size='2x' />
                        <MDBIcon className='ms-1' icon='camera' size='3x' />
                        <MDBIcon className='ms-1' icon='camera' size='4x' />
                        <MDBIcon className='ms-1' icon='camera' size='5x' />
                        <MDBIcon className='ms-1' icon='camera' size='6x' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
<<<<<<< HEAD
                </div>
=======
                </div> */}
>>>>>>> a71603c920316a8255cd9d805f06443e8133080c
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 '>
                            <div className='text-uppercase fw-bold ' style={{ display: "flex", justifyContent: "center" }}>
                                {/* <MDBIcon icon="gem" className="me-3" /> */}
                                <img className='footer-logo' src="https://i.postimg.cc/Pf8dfTfj/mesa-logo-WHITE-PNG.png" alt="" />
                            </div>
                            <p className='text-uppercase fw-bold footer-logo-tagline' style={{ textAlign: 'center' }}>
                                Gearing up for a better future
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Quick Find</h6>
                            <p>
                                <a href='/mesa-activities' className='text-reset'>
                                    Recent Activities
                                </a>
                            </p>
                            <p>
                                <a href='/contact' className='text-reset'>
                                    Contact Us
                                </a>
                            </p>
                            <p>
                                <a href='/gallery' className='text-reset'>
                                    Gallery
                                </a>
                            </p>
                            <p>
                                <a href='/team' className='text-reset'>
                                    Our Team
                                </a>
                            </p>

                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='https://www.instagram.com/mesa_gcoen/' className='text-reset'>
                                    Instagram
                                </a>
                            </p>
                            <p>
                                <a href='https://www.linkedin.com/company/gcoen-mechanical-engineering-students-association-mesa/' className='text-reset'>
                                    Linkedin
                                </a>
                            </p>
                            <p>
                                <a href='https://t.me/+Aubb5P1CMrVkMjRl' className='text-reset'>
                                    Telegram
                                </a>
                            </p>
                            {/* <p>
                                <a href='#!' className='text-reset'>
                                    Twitter
                                </a>
                            </p> */}
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Gcoen New Khapri, Nagpur, IN
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                gcoenmesa@gmail.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> Tech Head: +918459795840
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> Joint-Secretary: +918237050035
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div className="footer-pic d-flex align-items-center justify-content-center">
                {/* <img src="https://www.linkpicture.com/q/wrench3_1.png" alt="" /> */}
                {/* <iframe title="map-iframe" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Government%20College%20of%20engineering%20Nagpur,%20Maharashtra%20India%20+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" class="map rounded-lg aspect-square min-h-[20rem] lg:aspect-video lg:w-[36rem] max-w-[100vw]"></iframe> */}
                <iframe title="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119107.51863375082!2d79.03248347166964!3d21.1081819672118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be5e617378eb%3A0x682e0bc768d22adb!2sGovernment%20Engineering%20College%2CNagpur!5e0!3m2!1sen!2sin!4v1669056837541!5m2!1sen!2sin" frameborder="0" class="map rounded-lg aspect-square min-h-[20rem] lg:aspect-video lg:w-[36rem] max-w-[100vw]"></iframe>
            </div>
            <div className='footer__height text-center p-4'>
                <MDBContainer fluid>
                    <p className='text-white'>
                        © 2021 All Rights Reserved <br />
                        <a target={"_blank"} href="https://www.linkedin.com/in/shiwang-pandey-33a628221/">
                            <b className='text-white'>Designed And Developed by Shiwang Pandey</b>
                        </a>
                    </p>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}