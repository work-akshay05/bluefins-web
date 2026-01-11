import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PersonTwo = ({ className }) => {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 70%",
      once: true, // 👈 GSAP sirf ek baar trigger kare
      onEnter: () => {
        if (!hasTriggered.current) {
          hasTriggered.current = true;
          setShouldRender(true); // 👈 Lottie sirf ek baar mount
        }
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div ref={containerRef}>
      {shouldRender && (
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

