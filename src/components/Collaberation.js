import React from 'react'
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Collaberation() {
    return (
        <div>
            <Navbar />
            <Container>
                <h1 className="h1-responsive font-weight-bold my-5 d-flex align-items-center justify-content-center" ><strong style={{ textAlign: "center" }}>Collaboration</strong></h1>

                <p className='my-3'>Collaboration is the key to success. We are proud to have collaborated with the following organisations:</p>
                {/* <div className="mou"> */}
                <Table bordered hover variant="light" size='sm'>
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
                            <td><img src="https://i.postimg.cc/bvkM6KWf/pdf.png" alt="" style={{ width: "35px", cursor: "pointer" }} />
                            
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>MINAR-HYDRO (HYDRAULIC MRO SOLUTIONS)</td>
                            <td>Shri. Jitendra Nayak</td>
                            <td>3 Years</td>
                            <td><img src="https://i.postimg.cc/bvkM6KWf/pdf.png" alt="" style={{ width: "35px", cursor: "pointer" }} /></td>
                        </tr>
                    </tbody>
                </Table>
                <br className='my-5' />
                {/* </div> */}
                <Container>
                    <div className="colab">

                        <Row className='my-5 border border-3 border-dark'>
                            <Col sm={4} className='d-flex justify-content-center'>
                                <img src="https://i.postimg.cc/C19YC6NX/MOU.png" className="mou my-3" style={{ maxHeight: "350px" }} alt="" />
                            </Col>
                            <Col sm={8} className=' mou_line'>
                                <h5 className='m-3 p-4'>  Mechanical Engineering Department
                                    signed MOUs with Minar Hydro. </h5>
                                <p className='p-5'>
                                    The Mechanical Engineering Department at the Government College of Engineering Nagpur recently signed a Memorandum of Understanding (MOU) with Minar Hydro. The MOU was signed by the managing director of Minar Hydro, Shri. Jitendra Nayak, and representatives from the Mechanical Engineering Department.

                                    The purpose of the MOU is to provide opportunities for students of mechanical engineering at the college to gain practical experience and knowledge through internships and other training programs offered by Minar Hydro. This will help to bridge the gap between the theoretical knowledge taught in the classroom and the practical skills needed to succeed in the industry.

                                    The MOU was organized by the Mechanical Engineering Students Association (MESA) at the college, which aims to provide extracurricular opportunities and resources for students in the mechanical engineering program. The association played a key role in facilitating the partnership between the college and Minar Hydro, which will benefit the students in the department.

                                    Overall, the MOU signed between Mechanical Engineering Department at Government College of Engineering Nagpur and Minar Hydro is a positive step towards providing students with practical experience and knowledge which will help them to be better prepared for the workforce.</p>

                            </Col>
                        </Row>
                        <hr />
                        <Row className='my-5 border border-3 border-dark'>
                            <Col sm={4} className='d-flex justify-content-center'>
                                <img src="https://i.postimg.cc/2jGq8FNf/Whats-App-Image-2024-03-05-at-23-01-35-1.webp" className="mou my-3" style={{ maxHeight: "350px" }} alt="" />
                            </Col>
                            <Col sm={8} className=' mou_line'>
                                <h5 className='m-3 p-4'>  Mechanical Engineering Department signed
                                    MOUs with CADD centre Services
                                    Private Limited,Nagpur.</h5>
                                <p className='p-5'>
                                    The Mechanical Engineering Department at the Government College of Engineering Nagpur recently signed a Memorandum of Understanding (MOU) with CADD Centre Services Private Limited, Nagpur. The MOU was signed by the Managing Director of CADD Centre Services, Shruti Vaibhav Wazalwar, and representatives from the Mechanical Engineering Department.

                                    The purpose of the MOU is to provide students of mechanical engineering at the college with training and employment opportunities in the field of computer-aided design and drafting (CADD). The MOU will allow students to gain practical experience and knowledge in the use of CADD software, which is widely used in the mechanical engineering industry.

                                    The MOU was organized by the Mechanical Engineering Students Association (MESA) at the college, which aims to provide extracurricular opportunities and resources for students in the mechanical engineering program. The association played a key role in facilitating the partnership between the college and CADD Centre Services, which will benefit the students in the department.

                                    Overall, the MOU signed between Mechanical Engineering Department at Government College of Engineering Nagpur and CADD Centre Services Private Limited is a positive step towards providing students with practical experience and knowledge in the field of CADD. This will help students to be better prepared for the workforce and take advantage of the many employment opportunities available in this field. </p>

                            </Col>
                        </Row>


                    </div>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}

export default Collaberation