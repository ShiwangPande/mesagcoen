import React from 'react'
import Navbar from './Navbar.js';
import Mou from '../images/MOU.png'
import Mou2 from '../images/MOU 2.png'
import Footer from './Footer.js';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import pdf from '../images/pdf.png'

function Collaberation() {
    return (
        <div>
            <Navbar />
            <Container>
                <h1 className="h1-responsive font-weight-bold my-5 d-flex align-items-center justify-content-center" ><strong style={{ textAlign: "center" }}>Collaberation</strong></h1>

                <p className='my-3'>Collaberation is the key to success. We are proud to have collaborated with the following organisations:</p>
                {/* <div className="mou"> */}
                <Table bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name Of Company</th>
                            <th>Name Of Managing Director</th>
                            <th>Duration</th>
                            <th>File</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>CADD centre Services
                                Private Limited,Nagpur
                            </td>
                            <td>Shruti Vaibhav Wazalwar
                            </td>
                            <td>3 Years</td>
                            <td><img src={pdf} alt="" style={{ width: "35px", cursor: "pointer" }} /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>MINAR-HYDRO (HYDRAULIC MRO SOLUTIONS)</td>
                            <td>Shri. Jitendra Nayak</td>
                            <td>3 Years</td>
                            <td><img src={pdf} alt="" style={{ width: "35px", cursor: "pointer" }} /></td>
                        </tr>
                    </tbody>
                </Table>
                {/* </div> */}
            </Container>
            <Footer />
        </div>
    )
}

export default Collaberation