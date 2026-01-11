import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PersonOne = ({ className }) => {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 70%",
      once: true, // 🔥 sirf ek baar trigger
      onEnter: () => {
        if (!hasTriggered.current) {
          hasTriggered.current = true;
          setShouldRender(true); // 👈 Lottie ek hi baar mount hogi
        }
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div ref={containerRef}>
      {shouldRender && (
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






