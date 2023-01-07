import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
import Table from 'react-bootstrap/Table';


export default function Navtabs() {
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value: string) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <>
            <MDBTabs className='mb-3'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                        Announcements
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                        Events
                    </MDBTabsLink>
                </MDBTabsItem>
                {/* <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                        News
                    </MDBTabsLink>
                </MDBTabsItem> */}
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane show={basicActive === 'tab1'}>
                    <Table striped bordered hover size="lg">
                        <tbody>
                            <tr >
                                <marquee behavior="smooth" direction="left" >
                                    <td style={{ cursor: "pointer" }}>
                                        <a href="https://forms.gle/wZC6EMxNfwbyvq2u8" style={{ color: "blue", marginLeft: "10px" }}> <u>Sfoorti Mechanical merch.</u></a>
                                    </td>
                                </marquee>
                                {/* </tr>
                                <tr > */}
                                <marquee behavior="smooth" direction="left" >
                                    <td style={{ cursor: "pointer" }}>
                                        {/* <br /> */}
                                        <a href="https://drive.google.com/file/d/1DrKFxk3-taiU75O0lURGvbZFf-F4JENc/view?usp=share_links" style={{ color: "blue", marginLeft: "20px" }}><u>Register to Acedemics Bank of Credit.</u></a>
                                    </td></marquee>
                                {/* </tr>
                                <tr > */}
                            </tr>
                        </tbody>
                    </Table>


                </MDBTabsPane >
                <MDBTabsPane show={basicActive === 'tab2'} style={{ height: "146px", scrollBehavior: "smooth", overflow: "scroll" }}><Table striped bordered hover size="lg" style={{ height: "146px", scrollBehavior: "smooth", overflow: "scroll" }}>
                    <Table responsive="sm" style={{ height: "146px", scrollBehavior: "smooth", overflow: "scroll" }}>
                        <tbody>
                            <tr>
                                {/* <th>#</th> */}
                                <td><a href="https://drive.google.com/file/d/1VLKnkGbhUjnHC8INGON7kpYfkLJNuKr0/view?usp=sharing" style={{ color: "blue" }}>EDP camp</a>
                                </td>

                            </tr>

                            <tr>
                                {/* <td>1</td> */}
                                <td><a href="https://drive.google.com/file/d/1M8oTSB6NIwZEd075a_L5AhIk-rgUCBxq/view?usp=share_link" style={{ color: "blue" }}>  JSW Plant 15 sept 2018 </a></td>
                            </tr>
                            <tr>
                                {/* <td>2</td> */}
                                <td><a href="https://drive.google.com/file/d/1l5G-jWIWIAbMv1j6iCS0ZpcxHqYpRmTH/view?usp=share_link" style={{ color: "blue" }}>  Presentation in Samantrana International paper</a></td>



                            </tr>
                            <tr>
                                {/* <td>2</td> */}

                                <td><a href="https://drive.google.com/file/d/1vy3wAmmewRaCh01YAT1sIlcP-iDLxj3J/view?usp=share_link" style={{ color: "blue" }}>  Lecture on Industrial Project & Internship importance </a></td>




                            </tr>
                            <tr>
                                {/* <td>2</td> */}

                                <td><a href="https://drive.google.com/file/d/1FbUsawJ0fq9EjAJHyJgR4fxRGuRknGA6/view?usp=share_link" style={{ color: "blue" }}>  TCS expert talk</a></td>



                            </tr>
                            <tr> <td><a href="https://drive.google.com/file/d/1E_TwwCUQL19KhRdrE451bLtH244N7Wul/view?usp=sharing" style={{ color: "blue" }}> Expert Lecture</a></td>
                            </tr>
                            <tr>  <td><a href="https://drive.google.com/file/d/1s7XI8Dkxh_kcp9Q0ri3_STQCZTqrMpHl/view?usp=sharing" style={{ color: "blue" }}>Expert Lecture Ali Jeevaji,JSW Steels </a></td>
                            </tr>
                            <tr>  <td><a href="https://drive.google.com/file/d/1RVWF1MAqWTapaGMCnr6wDttJrBiy2Njv/view?usp=sharing" style={{ color: "blue" }}>  GMR Visit </a></td>
                            </tr>
                            <tr>
                                <td><a href="https://drive.google.com/file/d/1-sI9A2uXNk5JvAIpex3ea3dsPU_hD6Dj/view?usp=sharing" style={{ color: "blue" }}>GMR Power plant Bhandara 16 Feb 2018 </a></td>
                            </tr>
                            <tr>
                                <td><a href="https://drive.google.com/file/d/11T3UUSGMEkWDorDbqY8ytVVQc0kYYo0H/view?usp=sharing" style={{ color: "blue" }}>  Shaurya NCC defence</a> </td>
                            </tr>
                            <tr>
                                <td><a href="https://drive.google.com/file/d/1vDg2GKhd9i3z24qPLpD70zOrJCEn-MJF/view?usp=sharing" style={{ color: "blue" }}>  MCED workshop 8-10 Aug 2018 </a></td>
                            </tr>
                            <tr>
                                <td><a href="https://drive.google.com/file/d/1CHHbnUw-AJuT1xSvWKdzrlREYw1y-JF6/view?usp=share_link" style={{ color: "blue" }}>  PTM 2018 | PTM meet 2018 </a></td>
                            </tr>
                            <tr>

                                <td><a href="https://drive.google.com/file/d/1-7wFqEq7izvLWycE3fJT4N3Snw57VTIL/view?usp=share_link" style={{ color: "blue" }}>  Road safety awareness </a></td>
                            </tr>
                            <tr>

                                <td><a href="https://drive.google.com/file/d/1q8WHJIG3rFAWJfuZIW_Ya0N7mjWlnGKn/view?usp=share_link" style={{ color: "blue" }}>  Kinetic Gears Project meeting 1</a></td>
                            </tr>
                            <tr>
                                <td><a href="https://drive.google.com/file/d/1gE9Cj_uryKxjGkQ9pmNzCeuI3dEAlLsc/view?usp=sharing" style={{ color: "blue" }}>  Kinetic Gears Project meeting 2 </a></td>
                            </tr>
                            <tr>



                                <td><a href="https://drive.google.com/file/d/1ITWSRBVV2sOo5AJ001Oej49tTW_PUZBv/view?usp=sharing" style={{ color: "blue" }}>  Higher studies in Foreign Mr Bond Krishna Consultant </a></td>
                            </tr>

                        </tbody>
                    </Table>

                </Table>
                </MDBTabsPane>
                {/* <MDBTabsPane show={basicActive === 'tab3'}>
                    <Table striped bordered hover size="lg">
                        <tbody>
                            <tr>
                                <td>
                                    This is a great news Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sed est eveniet magni repellendus dolores repudiandae quisquam consectetur voluptate esse!</td>
                            </tr>
                        </tbody>
                    </Table>
                </MDBTabsPane> */}
            </MDBTabsContent >
        </>
    );
}