import React, { useEffect } from 'react';
import './DrishtiNavbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Drishti from './Drishti';
import logo from '../images/mesa-logo.png'
import Dropdown from 'react-bootstrap/Dropdown';
import { useAuth } from '../context/AuthContext'
import { signInWithGoogle, signOutwithGoogle } from '../context/AuthContext';
import { Button } from 'react-bootstrap';

const DrishtiNavbar = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses = ['navbar'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }
    const { currentUser } = useAuth();
    return (<header className={navbarClasses.join(" ")} style={{ position: "absolute" }}>


        <Navbar >
            <Container>
                <Navbar.Brand href="/" style={{ color: "#EEEEEE", fontWeight: "bold", fontSize: "19px" }}>
                    <img className='logo' src={logo} alt="" />
                </Navbar.Brand>
                <Nav className="me-auto" style={{ display: 'flex', margin: 'auto' }}>
                    <Nav.Link href="/drishti" style={{ color: "#EEEEEE", fontWeight: "bolder", fontSize: "20px", marginRight: '15px' }}>Drishti 2020</Nav.Link>
                    <Nav.Link href="/drishti2022" style={{ color: "#EEEEEE", fontWeight: "bolder", fontSize: "20px", marginRight: '15px' }}>Drishti 2022</Nav.Link>
                    {/* <Nav.Link href="#pricing" style={{ color: "#EEEEEE", fontWeight: "bolder", fontSize: "15px", marginRight: '15px' }}>Pricing</Nav.Link> */}
                </Nav>
                <Nav>

                    <div eventKey={2} href="/login" style={{ color: "#EEEEEE", fontWeight: "bolder", fontSize: "15px" }}>

                        {
                            currentUser ? <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic" >
                                    <img className="rounded-circle shadow-4" src={localStorage.getItem('profilePic')} style={{ width: "60px" }} alt="Avatar" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ position: "absolute", left: "-74px" }}>
                                    <Dropdown.Item ><strong>{
                                        localStorage.getItem('name')}</strong></Dropdown.Item>
                                    <Dropdown.Item ><strong>Email: </strong>{localStorage.getItem('email')}</Dropdown.Item>
                                    <Dropdown.Item onClick={signOutwithGoogle}>Sign Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> :
                                <Button variant="outline-light" type='submit' style={{ position: "relative", left: "90px" }} onClick={signInWithGoogle} >login</Button>
                        }

                    </div>



                </Nav>
            </Container>
        </Navbar>


    </header>
    )
};
export default DrishtiNavbar;

