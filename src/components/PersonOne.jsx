import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PersonOne = ({ className }) => {
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
          src="https://lottie.host/5f7f3900-f2ed-47d4-8cf7-fb1e57baa591/8qlzCjbVU8.lottie"
          autoplay
          loop={false}
          className={className}
        />
      )}
    </div>
  );
};

export default PersonOne;




