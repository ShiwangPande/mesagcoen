import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

export default function Drishti1() {
    const panels = useRef([]);
    const panelsContainer = useRef();

    const createPanelsRefs = (panel, index) => {
        panels.current[index] = panel;
    };
    useEffect(() => {
        const totalPanels = panels.current.length;
        gsap.to(panels.current, {
            xPercent: -100 * (totalPanels - 1),
            ease: "none",
            scrollTrigger: {
                trigger: panelsContainer.current,
                start: "top top",
                pin: true,
                pinSpacing: false,
                snap: 1 / (totalPanels - 1),
                // base vertical scrolling on how wide the container is so it feels more natural.
                end: () => "+=" + panelsContainer.current.offsetWidth
            }
        });
    }, []);



    return (
        <div ref={panelsContainer}>
            <div class="description panel blue" ref={(e) => createPanelsRefs(e, 0)}>
                <div><h1>Layered pinning</h1>
                    <p>Use pinning to layer panels on top of each other as you scroll.</p>
                    <div class="scroll-down">Scroll down<div class="arrow"></div></div>
                </div>
            </div>


            <section class="panel red" ref={(e) => createPanelsRefs(e, 1)}>
                ONE
            </section>
            <section class="panel orange" ref={(e) => createPanelsRefs(e, 2)}>
                TWO
            </section>
            <section class="panel purple" ref={(e) => createPanelsRefs(e, 3)}>
                THREE
            </section>
            <section class="panel green" ref={(e) => createPanelsRefs(e, 4)}>
                FOUR
            </section>





            <header>
                <a href="https://greensock.com/scrolltrigger">
                    <img class="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
                </a>
            </header>
        </div>
    )
}