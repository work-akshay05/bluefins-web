import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { API_BASE_URL } from "../config/api";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const navRef = useRef(null);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const buttonRef = useRef(null);
  const secondButtonRef = useRef(null);

  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/api/notify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("You'll be notified as soon as we go live!");
      setEmail("");
      setShowForm(false);
    } catch (err) {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        ref={containerRef}
        className="relative flex items-center h-[68px] w-[calc(100vw-96px)] max-w-6xl px-8 gap-4 rounded-[18px] bg-[#0B0F2A]/35 backdrop-blur-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.25)] border border-white/10" >
        <div
          ref={logoRef}
          className="text-white font-[nameFont] tracking-wide">
          BlueFins
        </div>

        <div className="ml-auto flex items-center gap-3 relative">
          <button
            ref={secondButtonRef}
            className="
              text-sm text-white
              px-4 py-2
              rounded-full
              bg-white/10
              hover:bg-white/20
              transition
            ">
            AboutUs
          </button>

          <button
            ref={buttonRef}
            onClick={() => setShowForm((prev) => !prev)}
            className="
              text-sm text-white
              px-4 py-2
              rounded-full
              bg-white/10
              hover:bg-white/20
              transition
            ">
            Notify Me
          </button>

          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="
                absolute top-14 right-0
                flex items-center gap-2
                px-4 py-3
                rounded-xl
                bg-[#0B0F2A]/90
                backdrop-blur-xl
                border border-white/10
                shadow-lg
              ">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className=" bg-transparent
                  text-white
                  text-sm
                  px-3 py-2
                  rounded-md
                  border border-white/20
                  outline-none
                  placeholder-white/50
                "/>

              <button
                type="submit"
                className="
                  text-sm
                  px-4 py-2
                  rounded-md
                  bg-blue-500
                  hover:bg-blue-600
                  transition
                "
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>

      {status && (
        <p className="mt-2 text-center text-sm text-white/80">
          {status}
        </p>
      )}
    </nav>
  );
};

export default NavBar;



