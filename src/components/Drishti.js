import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./Drishti.css";
import DrishtiImg from "../images/drishti.png";
import DrishtiNavbar from "./DrishtiNavbar";
import Navbar from "./Navbar";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import drishtibackground1 from '../images/drishtibackground1.png';
// import drishtibackground2 from '../images/drishtibackground2.png';
// import drishtibackground3 from '../images/drishtibackground3.png';
// import drishtibackground4 from '../images/drishtibackground4.png';
// import drishtibackground5 from '../images/drishtibackground5.png';
import { Parallax } from 'react-scroll-parallax';
import HeroBot from './HeroBot';
import Robot from './Robot';


gsap.registerPlugin(ScrollTrigger);

export default function Drishti() {
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
                // pinSpacing: false,
                end: () => "+=" + panelsContainer.current.offsetWidth
            }
        });
    }, []);


    // base vertical scrolling on how wide the container is so it feels more natural.

    return (
        <div className="Drishti">
            <DrishtiNavbar />
            <div className="container_drishti " ref={panelsContainer}>

                <div
                    className="panel drishti_bg1"
                    ref={(e) => createPanelsRefs(e, 0)}
                >
                    <div>
                        <Row>
                            <Col><h1 style={{ color: "#EEEEEE" }}>Drishti 2K20</h1></Col>
                            <Col>
                                <img className="drishti_img" src={DrishtiImg} alt="" /></Col></Row>
                    </div>
                </div>
                <section className="panel drishti_bg2" ref={(e) => createPanelsRefs(e, 1)}>
                    EVENT TWO
                    {/* <HeroBot /> */}
                </section>
                <section className="panel drishti_bg3" ref={(e) => createPanelsRefs(e, 2)}>

                    EVENT THREE
                    {/* <Robot /> */}
                </section>
                <section className="panel drishti_bg4" ref={(e) => createPanelsRefs(e, 3)}>

                    EVENT  FOUR
                </section>
                <section className="panel drishti_bg5" ref={(e) => createPanelsRefs(e, 4)}>
                    EVENT  FIVE
                </section>
            </div>
            {/* <div className="scroll-down">
                <div className="arrow"></div>
            </div> */}
            {/* <header> */}

            {/* </header> */}
        </div>
    );
}
