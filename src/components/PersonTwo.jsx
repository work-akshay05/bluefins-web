import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PersonTwo = ({ className }) => {
  const containerRef = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 70%",
      end: "bottom 30%",

      onEnter: () => setPlay(true),
      onEnterBack: () => setPlay(true),

      onLeave: () => setPlay(false),
      onLeaveBack: () => setPlay(false),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {play && (
        <DotLottieReact
          src="https://lottie.host/36a1bce9-224e-4ed5-ab7b-7bd653605fc7/wMoh3bIdH9.lottie"
          autoplay
          loop={false}
          className={className}
        />
      )}
    </div>
  );
};

export default PersonTwo;