import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PersonOne from "./PersonOne";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";
import PersonTwo from "./PersonTwo";

gsap.registerPlugin(ScrollTrigger);

const PeopleInteractionSection = () => {
  const sectionRef = useRef(null);
  const peopleRef = useRef([]);

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.set(peopleRef.current, {
      opacity: 0,
      y: 70,
      scale: 0.95,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        once: true, // 👈 IMPORTANT
      },
    });

    tl.to(peopleRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.25,
      ease: "power2.out",
      duration: 1,
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-indigo-800 flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
        <div ref={(el) => (peopleRef.current[0] = el)}>
          <PersonOne className="h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] w-auto" />
        </div>
        <div ref={(el) => (peopleRef.current[1] = el)}>
          <PersonTwo className="h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] w-auto" />
        </div>
        <div ref={(el) => (peopleRef.current[2] = el)} className="hidden sm:block">
          <PersonOne className="h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] w-auto" />
        </div>
      </div>
    </section>
  );
};

export default PeopleInteractionSection;
