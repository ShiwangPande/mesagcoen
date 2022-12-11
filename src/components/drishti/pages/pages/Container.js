import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import Navbar from "./Navbar2";
import Footer from "./Footer1";
import CustomCursor from "./Cursor";
import Header from "./Header";
import Featured from "./Feature";
import About from "./About";
import Gallery from "./Gallery";
import useLocoScroll from "./useLocoScroll";

import "../../styles/home.scss";

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);


  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(3);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty flowers</h1>
          <h2>Rio de Janeiro</h2>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Home;
