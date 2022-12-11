import { Button } from 'react-bootstrap';
import React, { useRef, useState } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/mesa logo WHITE PNG.png'
import { MDBContainer } from "mdb-react-ui-kit";
import { useAuth } from '../context/AuthContext'
import { GoogleButton } from 'react-google-button';
import { signInWithGoogle, signOutwithGoogle } from '../context/AuthContext';
import { Link, useHistory, Redirect } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';





function NavBar() {

    const { currentUser } = useAuth();

    return (
        <>
            {
                ["sm",].map((expand) => (
                    <Navbar collapseOnSelect expand="lg" bg="" variant="dark" style={{ background: "#222831" }}>
                        <Container>
                            <Navbar.Brand href="/" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "19px" }}>
                                <img className='logo' src={logo} alt="" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                            <Navbar.Collapse id="responsive-navbar-nav" >
                                <Navbar.Offcanvas style={{ background: "#222831" }}
                                    id={`offcanvasNavbar-expand-${expand}`}
                                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                    placement="end"
                                >
                                    <Offcanvas.Header closeButton style={{ color: "#EEEEEE" }}>
                                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "19px" }}>
                                            <img className='logo' src={logo} alt="" />
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Nav className="me-auto navbar-dark" style={{ gap: "20px", margin: "auto", alignItems: "center" }} >
                                            <Nav.Link className='nav-item' href="/" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px" }}>Home</Nav.Link>
                                            <Nav.Link className='nav-item' href="/team" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px" }}>Committee</Nav.Link>
                                            {/* {
                                                currentUser ? <Nav.Link className='nav-item' href="/content" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px" }}> Student Corner</Nav.Link> :
                                                    <div onClick={() => { signInWithGoogle(); <Redirect to="/content" /> }} className='nav-item' style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px", cursor: "pointer" }}> Student Corner</div>} */}

                                            <Nav.Link className='nav-item' href="/mesa-activities" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px" }}>Mesa-Activities</Nav.Link>
                                            {/* <Nav.Link className='nav-item' href="/drishti" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px" }}>Drishti</Nav.Link> */}
                                            {/* <Nav.Link className='nav-item' href="/alumini" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px" }}>Alumni</Nav.Link> */}

                                            <Nav.Link className='nav-item' href="/gallery" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px" }}>Gallery</Nav.Link>
                                            <Nav.Link className='nav-item' href="/contact" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "15px" }}>Contact</Nav.Link>

                                        </Nav>
                                        <Nav>

                                            <div className='user_icon' eventKey={2} href="/login" style={{ color: "#EEEEEE", fontWeight: "bolder", fontSize: "15px", display: "flex", justifyContent: "center" }}>

                                                {
                                                    currentUser ? <Dropdown>
                                                        <Dropdown.Toggle variant="none" id="dropdown-basic" >
                                                            <img className="rounded-circle shadow-4" src={localStorage.getItem('profilePic')} style={{ width: "50px" }} alt="Avatar" />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu style={{ position: "absolute", left: "-74px" }}>
                                                            <Dropdown.Item ><strong>{
                                                                localStorage.getItem('name')}</strong></Dropdown.Item>
                                                            <Dropdown.Item ><strong>Email: </strong>{localStorage.getItem('email')}</Dropdown.Item>
                                                            <Dropdown.Item onClick={signOutwithGoogle}>Sign Out</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown> :
                                                        <Button variant="outline-light" type='submit' style={{}} onClick={signInWithGoogle} >login</Button>
                                                }

                                            </div>



                                        </Nav>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Navbar.Collapse>
                        </Container >
                    </Navbar >
                ))}
        </>
    )
}

export default NavBar;