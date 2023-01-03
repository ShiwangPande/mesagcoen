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
                    src="https://i.postimg.cc/jS4FZJMX/committee-Pic.jpg"
                    alt="First slide"
                />
                {/* <Carousel.Caption style={{ color: "black" }}>
                    <h2 >Committe Pic</h2>
                    <p >At Government College Of Engineering, Nagpur</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="slide_show d-block "

                    src="https://www.linkpicture.com/q/trophy.jpg"
                    alt="Second slide"
                />

                {/* <Carousel.Caption style={{ color: "black" }}>
                    <h2>Second slide label</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item >
                {/* <Carousel.Caption style={{ color: "black" }}>
                    <h2>Third slide label</h2>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
                <img
                    className="slide_show d-block"
                    src="https://i.postimg.cc/P5VsHRwc/committe-picture234.jpg"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}
export default SlideShow