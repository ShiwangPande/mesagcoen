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
                            <td><img src="https://i.postimg.cc/bvkM6KWf/pdf.png" alt="" style={{ width: "35px", cursor: "pointer" }} /></td>
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
                                <img src="https://i.postimg.cc/C19YC6NX/MOU.png" className="mou my-3" alt="" /></Col>
                            <Col sm={8} className=' mou_line'>
                                <h5 className='m-3 p-4'>  Mechanical Engineering Department
                                    signed MOUs with Minar Hydro. </h5>
                                <p className='p-5'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi voluptates est commodi mollitia eligendi qui iusto, quasi perspiciatis modi, soluta, ut unde quam accusantium expedita architecto sint doloribus odit aliquam voluptatem provident laborum. Veniam amet vero unde quod iure est minima exercitationem sapiente nisi. Est excepturi sunt quia consequatur vel.
                                </p>

                            </Col>
                        </Row>
                        <hr />
                        <Row className='my-5 border border-3 border-dark'>
                            <Col sm={4} className='d-flex justify-content-center'>
                                <img src="https://i.postimg.cc/W3dTkPM0/MOU-2.png" className="mou my-3" alt="" />
                            </Col>
                            <Col sm={8} className=' mou_line'>
                                <h5 className='m-3 p-4'>  Mechanical Engineering Department signed
                                    MOUs with CADD centre Services
                                    Private Limited,Nagpur.</h5>
                                <p className='p-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sequi cumque minima fugiat velit sint ipsa? Hic, obcaecati velit dicta tempora quae in. Earum itaque doloribus sunt. Adipisci sequi aliquid nisi necessitatibus fugit ipsum illum optio facilis voluptates eligendi. Perferendis eligendi aliquid perspiciatis quo adipisci labore non. Voluptas quidem amet aliquam asperiores esse iusto aperiam nam? Ullam corrupti fuga mollitia eum dolorem ut aut nesciunt ea aperiam! Nostrum ad totam ullam voluptate dolorem, omnis odit qui ducimus dignissimos atque doloribus?
                                </p>

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