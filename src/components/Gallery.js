import React, { useEffect, useState, useRef, } from 'react';
import Container from 'react-bootstrap/Container';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Footer from './Footer';
import photos from "./Photo";
import photos1 from "./Photo1";
import photos2 from "./Photo2";
import photos3 from "./Photo3";
import photo5 from "./Photo5";
import photo4 from "./Photo4";
import Loader from "./Loader";
import NavBar from './Navbar';
import photo6 from "./Photo6";
import photo7 from "./Photo7";
import photo8 from "./Photo8";
import photo9 from "./Photo9";
import photo10 from "./Photo10";
import photo11 from "./Photo11";
import photo12 from "./Photo12";
import photo13 from "./Photo13";

const slides = photos.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));
const slides1 = photos1.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));
const slides2 = photos2.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));
const slides3 = photos3.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));
const slides4 = photo4.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));
const slides5 = photo5.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));
const slides6 = photo6.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));
const slides7 = photo7.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));
const slides8 = photo8.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));
const slides9 = photo9.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));
const slides10 = photo10.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));
const slides11 = photo11.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));
const slides12 = photo12.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));
const slides13 = photo13.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));

function Gallery() {
    const [index, setIndex] = useState(-1);
    const [index1, setIndex1] = useState(-1);
    const [index2, setIndex2] = useState(-1);
    const [index3, setIndex3] = useState(-1);
    const [index4, setIndex4] = useState(-1);
    const [index5, setIndex5] = useState(-1);
    const [index6, setIndex6] = useState(-1);
    const [index7, setIndex7] = useState(-1);
    const [index8, setIndex8] = useState(-1);
    const [index9, setIndex9] = useState(-1);
    const [index10, setIndex10] = useState(-1);
    const [index11, setIndex11] = useState(-1);
    const [index12, setIndex12] = useState(-1);
    const [index13, setIndex13] = useState(-1);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, [])
    return (
        <div className="">
            {loading ?

                <Loader
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
                    <div className="gallery">
                        <div className='head'>MESA Gallery</div>
                        <div className="tagline">We frame your moments</div>
                    </div>
                    <div className="mt-3" style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                        <h3 id='Spice' className="py-3 col-md-9 pb-3 m-auto fw-bolder d-flex align-items-center justify-content-center">SPICE: Student Project Innovation Competetion Exhibition</h3>
                    </div>
                    {/* <div className="photobg">
                <img src={PhotoBg} alt="" />
            </div>
            <div className="photobg" style={{ top: "201%", height: "61%" }}>
                <img src={PhotoBg} alt="" />
            </div> */}
                    <Container className='p-3'>
                        <PhotoAlbum
                            photos={photos}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index) => setIndex(index)}
                        /></Container>
                    <Lightbox
                        slides={slides}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                    <div className="mt-5 " style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                        <h2 id='Technical-Quiz' className="py-3 col-md-9  m-auto fw-bolder d-flex align-items-center justify-content-center" >Technical Quiz</h2>
                    </div>
                    <Container className='p-3'>
                        <PhotoAlbum
                            photos={photos1}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index1) => setIndex1(index1)}
                        /></Container>
                    <Lightbox
                        slides={slides1}
                        open={index1 >= 0}
                        index={index1}
                        close={() => setIndex1(-1)}
                        // enable optional lightbox plugins
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />

                    <div className="mt-5" style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                        <h2 id='Industrial-visit' className="py-3 col-md-9  m-auto fw-bolder d-flex align-items-center justify-content-center" >Government: ITI Visit</h2>
                    </div>
                    <Container className='p-3'>
                        <PhotoAlbum
                            photos={photos2}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index2) => setIndex2(index2)}
                        /></Container>
                    <Lightbox
                        slides={slides2}
                        open={index2 >= 0}
                        index={index2}
                        close={() => setIndex2(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                    <div className="mt-5" style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                        <h2 id='Thermal-PowerPlant' className="py-3 col-md-9  m-auto fw-bolder d-flex align-items-center justify-content-center" >Industrial Visit - Thermal Power Plant</h2>
                    </div>
                    <Container className='p-3'>
                        <PhotoAlbum
                            photos={photos3}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index3) => setIndex3(index3)}
                        /></Container>
                    <Lightbox
                        slides={slides3}
                        open={index3 >= 0}
                        index={index3}
                        close={() => setIndex3(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                    <div className="mt-5" style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                        <h2 id='Thermal-PowerPlant' className="py-3 col-md-9  m-auto fw-bolder d-flex align-items-center justify-content-center" >Indutrial Robotics & Automation</h2>
                    </div>
                    <Container className='p-3'>
                        <PhotoAlbum
                            photos={photo5}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index5) => setIndex5(index5)}
                        /></Container>
                    <Lightbox
                        slides={slides5}
                        open={index5 >= 0}
                        index={index5}
                        close={() => setIndex5(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                    <div className="mt-5" style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                        <h2 id='Thermal-PowerPlant' className="py-3 col-md-9  m-auto fw-bolder d-flex align-items-center justify-content-center" >Bureau of India Standards</h2>
                    </div>
                    <Container className='p-3'>
                        <PhotoAlbum
                            photos={photo6}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index6) => setIndex6(index6)}
                        /></Container>
                    <Lightbox
                        slides={slides6}
                        open={index6 >= 0}
                        index={index6}
                        close={() => setIndex6(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                    <div className="mt-5" style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                        <h2 id='Thermal-PowerPlant' className="py-3 col-md-9  m-auto fw-bolder d-flex align-items-center justify-content-center" >Catia workshop</h2>
                    </div>
                    <Container className='p-3'>
                        <PhotoAlbum
                            photos={photo7}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index7) => setIndex7(index7)}
                        /></Container>
                    <Lightbox
                        slides={slides7}
                        open={index7 >= 0}
                        index={index7}
                        close={() => setIndex7(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                    <div className="mt-5" style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                        <h2 id='Thermal-PowerPlant' className="py-3 col-md-9  m-auto fw-bolder d-flex align-items-center justify-content-center" >Iron & Iron Carbide Lecture</h2>
                    </div>
                    <Container className='p-3'>
                        <PhotoAlbum
                            photos={photo8}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index8) => setIndex8(index8)}
                        /></Container>
                    <Lightbox
                        slides={slides8}
                        open={index8 >= 0}
                        index={index8}
                        close={() => setIndex8(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                    <div className="mt-5" style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                        <h2 id='Thermal-PowerPlant' className="py-3 col-md-9  m-auto fw-bolder d-flex align-items-center justify-content-center" >Insights Of Semiconductor Industry</h2>
                    </div>
                    <Container className='p-3'>
                        <PhotoAlbum
                            photos={photo9}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index9) => setIndex9(index9)}
                        /></Container>
                    <Lightbox
                        slides={slides9}
                        open={index9 >= 0}
                        index={index9}
                        close={() => setIndex9(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                    <div className="mt-5" style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                        <h2 id='Thermal-PowerPlant' className="py-3 col-md-9  m-auto fw-bolder d-flex align-items-center justify-content-center" >Seminar on Skill development and career opportunities in steam boiler</h2>
                    </div>
                    <Container className='p-3'>
                        <PhotoAlbum
                            photos={photo10}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index10) => setIndex10(index10)}
                        /></Container>
                    <Lightbox
                        slides={slides10}
                        open={index10 >= 0}
                        index={index10}
                        close={() => setIndex10(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                    <div className="mt-5" style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                        <h2 id='Thermal-PowerPlant' className="py-3 col-md-9  m-auto fw-bolder d-flex align-items-center justify-content-center" >Innovative Manufacturing Process in Automotive Industry</h2>
                    </div>
                    <Container className='p-3'>
                        <PhotoAlbum
                            photos={photo11}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index11) => setIndex11(index11)}
                        /></Container>
                    <Lightbox
                        slides={slides11}
                        open={index11 >= 0}
                        index={index11}
                        close={() => setIndex11(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                
                    <div className="mt-5" style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                        <h2 id='Thermal-PowerPlant' className="py-3 col-md-9  m-auto fw-bolder d-flex align-items-center justify-content-center" >Tertiary Graduation Ceremony (passes year 2022)</h2>
                    </div>
                    <Container className='p-3'>
                        <PhotoAlbum
                            photos={photo12}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index12) => setIndex12(index12)}
                        /></Container>
                    <Lightbox
                        slides={slides12}
                        open={index12 >= 0}
                        index={index12}
                        close={() => setIndex12(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                    <div className="mt-5" style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                        <h2 id='Thermal-PowerPlant' className="py-3 col-md-9  m-auto fw-bolder d-flex align-items-center justify-content-center" >Drishti 2k23</h2>
                    </div>
                    <Container className='p-3'>
                        <PhotoAlbum
                            photos={photo13}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index13) => setIndex13(index13)}
                        /></Container>
                    <Lightbox
                        slides={slides13}
                        open={index13 >= 0}
                        index={index13}
                        close={() => setIndex13(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />

                    <div className="mt-5" style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}>
                        <h2 id='Thermal-PowerPlant' className="py-3 col-md-9  m-auto fw-bolder d-flex align-items-center justify-content-center" >Previous Year Events</h2>
                    </div>
                    <Container className='p-3'>
                        <PhotoAlbum
                            photos={photo4}
                            layout="rows"
                            targetRowHeight={150}
                            onClick={(event, photo, index4) => setIndex4(index4)}
                        /></Container>
                    <Lightbox
                        slides={slides4}
                        open={index4 >= 0}
                        index={index4}
                        close={() => setIndex4(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />



                    <Footer />
                </div>
            }

        </div>
    )
}

export default Gallery