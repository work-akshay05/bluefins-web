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
      className="min-h-[150vh] bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 "
    >
    <div ref={leftBoxRef} className="relative w-full max-w-6xl h-[80vh] sticky top-8">
        <div className="absolute top-[30%] left-[10%] bg-white rounded-2xl p-5 w-96 shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Another Section
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, optio.

          </p>
        </div>
        <div ref={rightBoxRef} className="absolute top-[60%] right-8 bg-white rounded-2xl p-5 w-96 shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Another Section
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, optio.

          </p>
        </div>
    </div>
    
    </section>
  );
};

export default NextContentSection;



