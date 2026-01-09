import React, { useEffect } from "react";
import ManSvg from "../../assets/AboutUsAssets/Group.svg";
import DotSmall from "../../assets/AboutUsAssets/Ellipse1.svg";
import DotMedium from "../../assets/AboutUsAssets/Ellipse2.svg";
import DotLarge from "../../assets/AboutUsAssets/Ellipse3.svg";
import RoundedRectangle from "../../assets/AboutUsAssets/RoundedRectangle1.svg";
import GreenRect from "../../assets/AboutUsAssets/Rectangle1Gree.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ManAndThreeDots = () => {

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".man",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".man",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        ".dots",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        ".thinking",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.2"
      )
      .fromTo(
        ".green",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      );

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={ManSvg} alt="Man" className="man absolute left-24 bottom-24 opacity-0 "/>

      <div className="dots absolute top-[15vh] left-[35vh] flex items-end gap-3 opacity-0">
        <img src={DotSmall} className="w-5 h-5" />
        <img src={DotMedium} className="w-8 h-8" />
        <img src={DotLarge} className="w-12 h-12" />
      </div>

      <div className="thinking absolute top-[15vh] left-[52vh] opacity-0">
        <img src={RoundedRectangle} className="h-16" />
      </div>

      <div className="green absolute top-60 left-[70vh] opacity-0">
        <img src={GreenRect} />
      </div>
    </section>
  );
};

export default ManAndThreeDots;
