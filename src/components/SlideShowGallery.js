import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


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
                    src="https://i.postimg.cc/CLDVjN9n/thermal-Powerplant.png"
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
                    src="https://i.postimg.cc/jS401jxs/industrial-Visite.png"
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
                    src="https://i.postimg.cc/jS401jxs/industrial-Visite.png"
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