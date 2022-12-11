import React, { useEffect, useState } from 'react';
import PieDiagram from './PieDiagram';
import Bargraph from './Bargraph';
import DepartmentCard from './DepartmentCard.js';
import NavBar from './Navbar.js';
import Footer from './Footer';
import TopAchiever from './TopAchiever';
import Col from 'react-bootstrap/Col';
import PauseOnHover from "./PauseOnHover.js";
import ReactCardSlider from 'react-card-slider-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import MaleProfile from "../images/male-university-graduate-silhouette-with-the-cap-svgrepo-com.svg"
import FemaleProfile from "../images/female-graduate-student-svgrepo-com.svg"
import Recruiters from './Recruiters.js';
import Loader from "./Loader";
import Topachiever1 from "./Topachiever1"
import Package from './Package';
import DataTable from './DataTable';



function Alumini() {
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 5000)
    // }, [])
    return (
        // <div >
        //     {loading ?

        //         <Loader className='Team-Loader' style={{
        //             textAlign: "center",
        //             display: "flex",
        //             justifyContent: 'center',
        //             alignItems: 'center',

        //         }}
        //             // color={'#294a65'}
        //             loading={loading}
        //             // cssOverride={override}
        //             size={300}
        //         // aria-label="Loading Spinner"
        //         // data-testid="loader"
        //         // speedMultiplier={1.5}
        //         /> :
        <div>
            <NavBar />
            <Container>
                <Package />
                <h1 className="col-md-9   fw-bolder d-flex align-items-center justify-content-center " style={{ textAlign: "center", margin: "175px auto 100px", }}>Student Data</h1>
                {/* <PauseOnHover /> */}
                <DataTable />
                {/* <Topachiever1 /> */}
                <h1 className="col-md-9   fw-bolder d-flex align-items-center justify-content-center " style={{ textAlign: "center", margin: "0px auto 100px", }}>Placement Record</h1>
                <Row>
                    <Col>
                        <PieDiagram />
                    </Col>
                    <Col>
                        <Bargraph />
                    </Col>

                </Row>
                <h1 className="col-md-9   fw-bolder d-flex align-items-center justify-content-center " style={{ textAlign: "center", margin: "175px auto 100px", }}>MAIN RECRUITER</h1>
            </Container>
            <Recruiters />
            <Row style={{ marginTop: "300px" }}><Col>


            </Col>
                <Col style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <img className='MaleProfile' src={MaleProfile} alt="" />
                    <Card.Text style={{ margin: "0" }}><b>Male</b>
                    </Card.Text>
                    <Card.Text  ><b>  31%</b>

                    </Card.Text></Col>
                <Col style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <img className='FemaleProfile' src={FemaleProfile} alt="" />
                    <Card.Text style={{ margin: "0" }}><b>Female</b>

                    </Card.Text>
                    <Card.Text ><b>69%</b>

                    </Card.Text></Col>
            </Row>

            <Footer />
        </div >
        //             }

        //         </div>
    )
}

export default Alumini