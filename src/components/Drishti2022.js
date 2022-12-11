import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./Drishti.css";
import DrishtiImg from "../images/drishti.png";
import DrishtiNavbar from "./DrishtiNavbar";
import Navbar from "./Navbar";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



gsap.registerPlugin(ScrollTrigger);

export default function Drishti2022() {
    const panels = useRef([]);
    const panelsContainer = useRef();

    const createPanelsRefs = (panel, index) => {
        panels.current[index] = panel;
    };

    useEffect(() => {
        const totalPanels = panels.current.length;
        gsap.to(panels.current, {
            yPercent: -100 * (totalPanels - 1),
            ease: "none",
            scrollTrigger: {
                trigger: panelsContainer.current,
                pin: true,
                scrub: 1,
                snap: 1 / (totalPanels - 1),
                // pinSpacing: false ,
                end: () => "+=" + panelsContainer.current.offsetWidth
            }
        });
    }, []);


    return (
        <div className="drishti">
            <DrishtiNavbar />
            <div className="container_drishti " ref={panelsContainer}>
                <div
                    className="description panel drishti_background"
                    ref={(e) => createPanelsRefs(e, 0)}
                >
                    <div>
                        <Row>
                            <Col><h1>Drishti 2K22</h1></Col>
                            <Col>
                                <img className="drishti_img" src={DrishtiImg} alt="" /></Col></Row>
                    </div>
                </div>
                <section className="panel drishti_background" ref={(e) => createPanelsRefs(e, 1)}>
                    <div>
                        <Row>
                            <Col><h1>Drishti 2K22</h1></Col>
                            <Col>
                                <img className="drishti_img" src={DrishtiImg} alt="" /></Col></Row>
                    </div>
                    EVENT ONE
                </section>
                <section className="panel drishti_background" ref={(e) => createPanelsRefs(e, 2)}>
                    EVENT TWO
                    <div>
                        <Row>
                            <Col><h1>Drishti 2K22</h1></Col>
                            <Col>
                                <img className="drishti_img" src={DrishtiImg} alt="" /></Col></Row>
                    </div>
                </section>
                <secrion className="panel drishti_background" ref={(e) => createPanelsRefs(e, 3)}>
                    EVENT THREE
                    <div>
                        <Row>
                            <Col><h1>Drishti 2K22</h1></Col>
                            <Col>
                                <img className="drishti_img" src={DrishtiImg} alt="" /></Col></Row>
                    </div>
                </secrion>
                <section className="panel drishti_background" ref={(e) => createPanelsRefs(e, 4)}>
                    EVENT FOUR
                    <div>
                        <Row>
                            <Col><h1>Drishti 2K22</h1></Col>
                            <Col>
                                <img className="drishti_img" src={DrishtiImg} alt="" /></Col></Row>
                    </div>
                </section>
                <section className="panel drishti_background" ref={(e) => createPanelsRefs(e, 5)}>
                    EVENT FIVE
                    <div>
                        <Row>
                            <Col><h1>Drishti 2K22</h1></Col>
                            <Col>
                                <img className="drishti_img" src={DrishtiImg} alt="" /></Col></Row>
                    </div>
                </section>
            </div>
        </div>
    );
}
