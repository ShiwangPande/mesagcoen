import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import thermalPowerPlant from '../images/thermalPowerplant.png';
import industrialVisit from '../images/industrialVisite.png';
// import Spice from '../images/Spice.png'


function SlideShow() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
                <img
                    className="slide_show d-block"
                    src={thermalPowerPlant}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>Industrial Visit: Thermal PowerPlant</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="slide_show d-block "
                    src={industrialVisit}
                    alt="Second slide"
                />
                {/* 
                <Carousel.Caption>
                    <h3>Industrial Visit</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="slide_show d-block"
                    src={industrialVisit}
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
                    <h3>SPICE</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}
export default SlideShow