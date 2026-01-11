import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NextContentSection = () => {
  const sectionRef = useRef(null);
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.set([leftBoxRef.current, rightBoxRef.current], {
      opacity: 0,
      scale: 0.9,
      y: 60,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        ease: "back.out(1.4)",
        scrub: 0.6
      },
    })
    .to(leftBoxRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    },0)
    .to(
        rightBoxRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '<0.4'
      );

  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section
      ref={sectionRef}
      className="min-h-[150vh] bg-indigo-800 px-4 sm:px-6 md:px-8"
    >
      <div ref={leftBoxRef} className="relative w-full max-w-6xl mx-auto h-[80vh] sticky top-4 sm:top-6 md:top-8">
        {/* Left Card */}
        <div className="absolute top-[20%] sm:top-[25%] md:top-[30%] left-0 sm:left-[5%] md:left-[10%] bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 w-[60%] sm:w-72 md:w-96 shadow-2xl">
          <h2 className="text-sm sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 sm:mb-3">
            Another Section
          </h2>
          <p className="text-xs sm:text-base text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, optio.
          </p>
        </div>
        
        {/* Right Card */}
        <div ref={rightBoxRef} className="absolute top-[50%] sm:top-[55%] md:top-[60%] right-0 sm:right-4 md:right-8 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 w-[60%] sm:w-72 md:w-96 shadow-2xl">
          <h2 className="text-sm sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 sm:mb-3">
            Another Section
          </h2>
          <p className="text-xs sm:text-base text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, optio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NextContentSection;



