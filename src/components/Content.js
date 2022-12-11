import React, { useEffect, useState } from 'react';
import NavBar from './Navbar'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
import Table from 'react-bootstrap/Table';
import Card from './cards/Card';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';
import Card4 from './cards/Card4';
import Card5 from './cards/Card5';
import Card6 from './cards/Card6';
import Card7 from './cards/Card7';
import Card8 from './cards/Card8';
import Footer from './Footer'
import logo from '../images/mesa-logo.png'
import Loader from "./Loader";
import Pyq1 from './PYQ/Pyq1';
import Pyq2 from './PYQ/Pyq2';
import Pyq3 from './PYQ/Pyq3';
import Pyq4 from './PYQ/Pyq4';
import Pyq5 from './PYQ/Pyq5';
import Pyq6 from './PYQ/Pyq6';
import Pyq7 from './PYQ/Pyq7';
import Pyq8 from './PYQ/Pyq8';

function Content() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, [])
    const [basicActive1, setBasicActive1] = useState('tab1');

    const handleBasicClick1 = (value: string) => {
        if (value === basicActive1) {
            return;
        }

        setBasicActive1(value);
    };
    const [basicActive2, setBasicActive2] = useState('tab4');

    const handleBasicClick2 = (value: string) => {
        if (value === basicActive2) {
            return;
        }

        setBasicActive2(value);
    };
    const [basicActive3, setBasicActive3] = useState('tab7');

    const handleBasicClick3 = (value: string) => {
        if (value === basicActive3) {
            return;
        }

        setBasicActive3(value);
    };
    const [basicActive4, setBasicActive4] = useState('tab10');

    const handleBasicClick4 = (value: string) => {
        if (value === basicActive4) {
            return;
        }

        setBasicActive4(value);
    };
    const [basicActive5, setBasicActive5] = useState('tab13');
    const handleBasicClick5 = (value: string) => {
        if (value === basicActive5) {
            return;
        }

        setBasicActive5(value);
    };
    const [basicActive6, setBasicActive6] = useState('tab16');
    const handleBasicClick6 = (value: string) => {
        if (value === basicActive6) {
            return;
        }

        setBasicActive6(value);
    };
    const [basicActive7, setBasicActive7] = useState('tab19');
    const handleBasicClick7 = (value: string) => {
        if (value === basicActive7) {
            return;
        }

        setBasicActive7(value);
    };
    const [basicActive8, setBasicActive8] = useState('tab22');
    const handleBasicClick8 = (value: string) => {
        if (value === basicActive8) {
            return;
        }

        setBasicActive8(value);
    };
    return (
        <div >
            {loading ?

                <Loader className='Team-Loader' style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
                    // color={'#294a65'}
                    loading={loading}
                    // cssOverride={override}
                    size={300}
                // aria-label="Loading Spinner"
                // data-testid="loader"
                // speedMultiplier={1.5}
                /> :
                <div>
                    <NavBar />
                    <div className="library">
                        <div className='head'>Digital Library</div>
                        <div className="tagline">Explore the world of books</div>
                    </div>
                    <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}><strong>1st semester</strong></h2>
                    <MDBTabs className='mb-3'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick1('tab1')} active={basicActive1 === 'tab1'}>
                                Syllabus
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick1('tab2')} active={basicActive1 === 'tab2'}>
                                Books
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick1('tab3')} active={basicActive1 === 'tab3'}>
                                Previous Year Papers
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>
                        <MDBTabsPane show={basicActive1 === 'tab1'}>
                            <div className="cardss-list" style={{ justifyContent: 'center' }}>
                                <div className='cards'>
                                    <a href='https://drive.google.com/file/d/1lBtjmEvGk-1ulpV8kw1TABt8-LOMsnjR/view?usp=sharing' target="_blank">
                                        <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-3.jpg" alt="" style={{ height: "213px" }} /> </a>

                                </div></div>


                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive1 === 'tab2'} >
                            <div className="cardss-list" >
                                <Card /></div>
                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive1 === 'tab3'}>
                            <div className="cardss-list" >
                                <Pyq1 /></div>

                        </MDBTabsPane>
                    </MDBTabsContent>
                    {/* <div className="cardss-list" >
                        <Card /></div> */}
                    <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}><strong>2nd semester</strong></h2>
                    <MDBTabs className='mb-3'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick2('tab4')} active={basicActive2 === 'tab4'}>
                                Syllabus
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick2('tab5')} active={basicActive2 === 'tab5'}>
                                Books
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick2('tab6')} active={basicActive2 === 'tab6'}>
                                Previous Year Papers
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>
                        <MDBTabsPane show={basicActive2 === 'tab4'}>
                            <div className="cardss-list" style={{ justifyContent: 'center' }}>
                                <div className='cards'>
                                    <a href='https://drive.google.com/file/d/14Drd3YduDPWBfWRpDU1V3MQ532v84CqQ/view?usp=sharing' target="_blank">
                                        <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-4.jpg" alt="" style={{ height: "213px" }} /> </a>


                                </div></div>


                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive2 === 'tab5'} >
                            <div className="cardss-list" >
                                <Card2 /></div>
                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive2 === 'tab6'}>
                            <div className="cardss-list" >
                                <Pyq2 /></div>

                        </MDBTabsPane>
                    </MDBTabsContent>
                    {/* <div className="cardss-list" >
                        <Card2 /></div> */}
                    <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}><strong> 3rd semester</strong></h2>
                    <MDBTabs className='mb-3'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick3('tab7')} active={basicActive3 === 'tab7'}>
                                Syllabus
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick3('tab8')} active={basicActive3 === 'tab8'}>
                                Books
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick3('tab9')} active={basicActive3 === 'tab9'}>
                                Previous Year Papers
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>
                        <MDBTabsPane show={basicActive3 === 'tab7'}>
                            <div className="cardss-list" style={{ justifyContent: 'center' }}>
                                <div className='cards'>
                                    <a href='https://drive.google.com/file/d/1yjAxLe3GtE9uLcbioyo9bewdzJZBXBFx/view?usp=sharing' target="_blank">
                                        <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-2.jpg" alt="" style={{ height: "213px" }} /> </a>


                                </div></div>


                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive3 === 'tab8'} >
                            <div className="cardss-list" >
                                <Card3 /></div>
                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive3 === 'tab9'}>
                            <div className="cardss-list" >
                                <Pyq3 /></div>

                        </MDBTabsPane>
                    </MDBTabsContent>

                    <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}><strong>4th semester</strong></h2>
                    <MDBTabs className='mb-3'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick4('tab10')} active={basicActive4 === 'tab10'}>
                                Syllabus
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick4('tab11')} active={basicActive4 === 'tab11'}>
                                Books
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick4('tab12')} active={basicActive4 === 'tab12'}>
                                Previous Year Papers
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>
                        <MDBTabsPane show={basicActive4 === 'tab10'}>
                            <div className="cardss-list" style={{ justifyContent: 'center' }}>
                                <div className='cards'>
                                    <a href='https://drive.google.com/file/d/1AcevZ7C_PAtnaAahRRR5rhTLJul_KdWs/view?usp=sharing' target="_blank">
                                        <img src='https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-5.jpg' alt="" style={{ height: "213px" }} /> </a>

                                </div>
                            </div>


                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive4 === 'tab11'} >
                            <div className="cardss-list" >
                                <Card4 /></div>
                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive4 === 'tab12'}>
                            <div className="cardss-list" >
                                <Pyq4 /></div>

                        </MDBTabsPane>
                    </MDBTabsContent>
                    {/* <div className="cardss-list" >
                        <Card4 /></div> */}
                    <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}><strong>5th semester</strong></h2>
                    <MDBTabs className='mb-3'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick5('tab13')} active={basicActive5 === 'tab13'}>
                                Syllabus
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick5('tab14')} active={basicActive5 === 'tab14'}>
                                Books
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick5('tab15')} active={basicActive5 === 'tab15'}>
                                Previous Year Papers
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>
                        <MDBTabsPane show={basicActive5 === 'tab13'}>
                            <div className="cardss-list" style={{ justifyContent: 'center' }}>
                                <div className='cards'>
                                    <a href='https://drive.google.com/file/d/1SzXNrNnx9mSF7JWjTQa-z3Sxu5XXyoIK/view?usp=sharing' target="_blank">
                                        <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-6.jpg" alt="" style={{ height: "213px" }} /> </a>

                                </div></div>


                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive5 === 'tab14'} >
                            <div className="cardss-list" >
                                <Card5 /></div>
                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive5 === 'tab15'}>
                            <div className="cardss-list" >
                                <Pyq5 /></div>

                        </MDBTabsPane>
                    </MDBTabsContent>
                    {/* <div className="cardss-list" >
                        <Card5 /></div> */}
                    <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}><strong>6th semester</strong></h2>
                    <MDBTabs className='mb-3'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick6('tab16')} active={basicActive6 === 'tab16'}>
                                Syllabus
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick6('tab17')} active={basicActive6 === 'tab17'}>
                                Books
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick6('tab18')} active={basicActive6 === 'tab18'}>
                                Previous Year Papers
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>
                        <MDBTabsPane show={basicActive6 === 'tab16'}>
                            <div className="cardss-list" style={{ justifyContent: 'center' }}>
                                <div className='cards'>
                                    <a href='https://drive.google.com/file/d/1Yg3SAk9p7QlnZceFopb31mQ6mp4Ec4rL/view?usp=sharing' target="_blank">
                                        <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-7.jpg" alt="" style={{ height: "213px" }} /> </a>

                                </div></div>


                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive6 === 'tab17'} >
                            <div className="cardss-list" >
                                <Card6 /></div>
                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive6 === 'tab18'}>
                            <div className="cardss-list" >
                                <Pyq6 /></div>

                        </MDBTabsPane>
                    </MDBTabsContent>

                    {/* <div className="cardss-list" >
                        <Card6 /></div> */}
                    <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}><strong>7th semester</strong></h2>
                    <MDBTabs className='mb-3'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick7('tab19')} active={basicActive7 === 'tab19'}>
                                Syllabus
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick7('tab20')} active={basicActive7 === 'tab20'}>
                                Books
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick7('tab21')} active={basicActive7 === 'tab21'}>
                                Previous Year Papers
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>
                        <MDBTabsPane show={basicActive7 === 'tab19'}>
                            <div className="cardss-list" style={{ justifyContent: 'center' }}>
                                <div className='cards'>
                                    <a href='https://drive.google.com/file/d/1dTUdgSjcvLO4QBc3zEdpGF1JgOVnYvNL/view?usp=sharing' target="_blank">
                                        <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-8.jpg" alt="" style={{ height: "213px" }} /> </a>

                                </div></div>


                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive7 === 'tab20'} >
                            <div className="cardss-list" >
                                <Card7 /></div>
                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive7 === 'tab21'}>
                            <div className="cardss-list" >
                                <Pyq7 /></div>

                        </MDBTabsPane>
                    </MDBTabsContent>

                    <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}><strong>8th semester</strong></h2>
                    <MDBTabs className='mb-3'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick8('tab22')} active={basicActive8 === 'tab22'}>
                                Syllabus
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick8('tab23')} active={basicActive8 === 'tab23'}>
                                Books
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick8('tab24')} active={basicActive8 === 'tab24'}>
                                Previous Year Papers
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                    {/* <div className="cardss-list" >
                        <Card7 /></div> */}
                    <MDBTabsContent>
                        <MDBTabsPane show={basicActive8 === 'tab22'}>
                            <div className="cardss-list" style={{ justifyContent: 'center' }}>
                                <div className='cards'>
                                    <a href='https://drive.google.com/file/d/1Yg3SAk9p7QlnZceFopb31mQ6mp4Ec4rL/view?usp=sharing' target="_blank">
                                        <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-8.jpg" alt="" style={{ height: "213px" }} /> </a>

                                </div></div>


                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive8 === 'tab23'} >
                            <div className="cardss-list" >
                                <Card8 /></div>
                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive8 === 'tab24'}>
                            <div className="cardss-list" >
                                <Pyq8 /></div>

                        </MDBTabsPane>
                    </MDBTabsContent>
                    {/* for more book */}
                    <div className='NDL'>

                        <p className='' style={{ fontSize: "15px", marginLeft: "40px", fontWeight: "600" }}>
                            For More Books: <a href="https://www.ndl.gov.in/">https://www.ndl.gov.in/</a>
                        </p>

                    </div>

                    <Footer />
                </div >
            }

        </div>
    )
}


export default Content