import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const navRef = useRef(null);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const buttonRef = useRef(null);
  const secondButtonRef = useRef(null); // ✅ NEW

  useEffect(() => {
    const scroll = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=200",
        scrub: true,
      },
    });

    scroll.to(containerRef.current, {
      height: 56,
      borderRadius: 0,
      paddingLeft: 16,
      paddingRight: 16,
      ease: "none",
    });

    // ✅ Animate BOTH buttons together
    scroll.to(
      [buttonRef.current, secondButtonRef.current],
      {
        opacity: 0,
        scale: 0.9,
        pointerEvents: "none",
        ease: "none",
      },
      0
    );

    scroll.to(
      logoRef.current,
      {
        position: "fixed",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        scale: 1.4,
        ease: "none",
      },
      0
    );

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        ref={containerRef}
        className="
          flex items-center
          h-[68px] w-[calc(100vw-96px)]
          max-w-6xl
          px-8
          gap-4
          rounded-[18px]
          bg-[#0B0F2A]/35
          backdrop-blur-[20px]
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          border border-white/10"
      >
        <div ref={logoRef} className="text-white font-[nameFont] tracking-wide">
          BlueFins
        </div>

        {/* Buttons container */}
        <div className="ml-auto flex gap-3">
          <button
            ref={secondButtonRef}
            className="
              text-sm text-white
              px-4 py-2
              rounded-full
              bg-white/10
              hover:bg-white/20
              transition"
          >
            AboutUs
          </button>

          <button
            ref={buttonRef}
            className="
              text-sm text-white
              px-4 py-2
              rounded-full
              bg-white/10
              hover:bg-white/20
              transition"
          >
            Notify Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


