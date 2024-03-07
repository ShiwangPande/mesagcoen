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
                {/* <img
                    className="slide_show d-block"
                    src="https://i.postimg.cc/nLJBvW47/committee-Pic-jpg.webp"
                    alt="First slide"
                /> */}
                <img
                    className="slide_show d-block"
                    src="https://i.postimg.cc/zvzVF3WM/Whats-App-Image-2024-03-05-at-23-02-34-1.webp"
                    alt="First slide"
                />
                {/* <Carousel.Caption style={{ color: "black" }}>
                    <h2 >Committe Pic</h2>
                    <p >At Government College Of Engineering, Nagpur</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            {/* <Carousel.Item >
                <img
                    className="slide_show d-block "

                    src="https://i.postimg.cc/xTmXtRTP/trophy-jpg.webp"
                    alt="Second slide"
                /> */}

            {/* <Carousel.Caption style={{ color: "black" }}>
                    <h2>Second slide label</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            {/* </Carousel.Item> */}
            <Carousel.Item >
                <img
                    className="slide_show d-block"
                    src="https://i.postimg.cc/50Y0KQMc/fornt1.webp"
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
                    <h3>SPICE</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
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
                    src="https://i.postimg.cc/RFBPTCB4/sfoorti2024.webp"
                    alt="Third slide"
                />

            </Carousel.Item>



            <Carousel.Item >
                <img
                    className="slide_show d-block"
                    src="https://i.postimg.cc/PfDJmD4Y/front5.webp"
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
                    <h3>SPICE</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item >
                {/* <img
                    className="slide_show d-block"
                    src="https://i.postimg.cc/nLJBvW47/committee-Pic-jpg.webp"
                    alt="First slide"
                /> */}
                <img
                    className="slide_show d-block object-fit-contain"
                    src="https://i.postimg.cc/CL6zbhKP/Whats-App-Image-2024-03-05-at-23-02-33-1.webp"
                    alt="First slide"
                />
                {/* <Carousel.Caption style={{ color: "black" }}>
                    <h2 >Committe Pic</h2>
                    <p >At Government College Of Engineering, Nagpur</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="slide_show d-block"
                    src=" https://i.postimg.cc/kXF5HdL5/front2.webp"
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
                    <h3>SPICE</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
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
                    src="https://i.postimg.cc/zX4nfv3x/committe-picture234-jpg.webp"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}
export default SlideShow