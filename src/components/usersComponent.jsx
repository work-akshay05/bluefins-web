import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";

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

      gsap.to(peopleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.25,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 flex items-center justify-center"
    >
      <div className="flex gap-24">
        <div ref={(el) => (peopleRef.current[0] = el)}>
          <img src={person1} alt="Person using phone" className="h-[320px]" />
        </div>
        <div ref={(el) => (peopleRef.current[1] = el)}>
          <img src={person2} alt="Person using phone" className="h-[320px]" />
        </div>
        <div ref={(el) => (peopleRef.current[2] = el)}>
          <img src={person3} alt="Person using phone" className="h-[320px]" />
        </div>
      </div>
    </section>
  );
};

export default PeopleInteractionSection;
