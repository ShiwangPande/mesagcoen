import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import FooterPic from '../images/footer.jpg'
import { MDBIcon } from 'mdb-react-ui-kit';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
export default function Footer() {
    const [open, setOpen] = React.useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };
    const [open1, setOpen1] = React.useState(false);

    const handleClickToOpen1 = () => {
        setOpen1(true);
    };

    const handleToClose1 = () => {
        setOpen1(false);
    };
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
                        <Button variant="none" style={{ color: 'white' }}
                            onClick={handleClickToOpen}>
                            © 2021 All Rights Reserved
                        </Button>
                        <Dialog open={open} onClose={handleToClose}>
                            <DialogTitle>{"© 2021 All Rights Reserved"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Copyright © 2023 Mesa All rights reserved.

                                    All content on this website, including text, graphics, logos, images, and software, is the property of Mesa and is protected by copyright and other intellectual property laws. The content on this website may not be reproduced, distributed, modified, or reposted without the express written consent of Mesa.

                                    Mesa and its logos are trademarks or registered trademarks of Mesa in the United States and other countries. Other company and product names may be trademarks of their respective owners.

                                    The unauthorized use of any content on this website may violate copyright, trademark, and other laws. If you believe that any content on this website infringes on your intellectual property rights, please contact us at gcoenmesa@gmail.com.

                                    Mesa respects the intellectual property rights of others and expects its users to do the same. If you believe that your work has been copied in a way that constitutes copyright infringement, please contact us at gcoenmesa@gmail.com.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleToClose}
                                    color="primary" autoFocus>
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog> <br />
                        <Button variant="none" style={{ color: 'white' }}
                            onClick={handleClickToOpen1}>
                            Privacy Policy
                        </Button>
                        <Dialog open={open1} onClose={handleToClose1}>
                            <DialogTitle>{"Privacy Policy"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Privacy Policy for Mesa Website

                                    At Mesa, we are committed to protecting the privacy of our users. This Privacy Policy applies to our website, mesagcoen.org, and governs data collection and usage. By using our website, you consent to the data practices described in this policy.

                                    Collection of Personal Information

                                    We may collect personal information, such as your name, email address, and phone number, when you voluntarily provide it to us through our website. We may also collect information about your use of our website, including pages visited, links clicked, and search queries.

                                    Use of Personal Information

                                    We may use your personal information to contact you with newsletters, marketing or promotional materials, and other information that may be of interest to you. We may also use your personal information to improve the functionality of our website, to personalize your experience, and to comply with legal obligations.

                                    Sharing of Personal Information

                                    We may share your personal information with third-party service providers to assist us in providing our services, such as website hosting, data analysis, and email delivery. We may also share your personal information with law enforcement or other government agencies if required by law.

                                    Security of Personal Information

                                    We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.

                                    Changes to Privacy Policy

                                    We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will provide notice of any material changes by updating the date of this policy and posting the updated policy on our website.

                                    Contact Us

                                    If you have any questions about this Privacy Policy, please contact us at mesagcoen@gmail.com.

                                    Effective Date: January 25, 2023</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleToClose1}
                                    color="primary" autoFocus>
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog> <br />
                        <a target={"_blank"} href="https://www.linkedin.com/in/shiwang-pandey-33a628221/">
                            <b className='text-white'>Designed And Developed by Shiwang Pandey</b>
                        </a>
                    </p>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}