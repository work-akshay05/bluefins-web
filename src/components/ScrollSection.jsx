import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import phoneImg from '../assets/phone.svg';
import personImg from '../assets/organizer.svg';

gsap.registerPlugin(ScrollTrigger);

const MobileInteractionComponent = () => {
  const sectionRef = useRef(null);
  const personRef = useRef(null);
  const buttonRef = useRef(null);
  const contentBoxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentBoxRef.current, { opacity: 0, y: 20 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=120%',
          scrub: true,
          duration: 1,
        },
      });

      tl.to(personRef.current, {
        x: '-40px',
        y: '-15px',
        rotation: -2,
        ease: 'power1.out',
      }).to(
        buttonRef.current,
        {
          scale: 0.9,
          backgroundColor: '#5b21b6',
          boxShadow: '0 12px 30px rgba(91, 33, 182, 0.35)',
          duration: 0.3,
          ease: 'power1.out',
        },
        '<0.2'
      ).to(
        contentBoxRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power1.out',
        },
        '<0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-[220vh] bg-indigo-800 flex items-start justify-center p-8"
    >
      <div className="relative w-full max-w-6xl h-[100vh] sticky top-8">
        <div className="absolute left-8 top-1/3 -translate-y-1/2">
          <div className="relative">
            <img 
              src={phoneImg} 
              alt="Phone" 
              className="h-[50vh] w-auto"
            />
            <button
              ref={buttonRef}
              className="absolute bottom-16 left-[45%] -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-2 py-1 rounded-3xl font-semibold hover:bg-purple-700 transition-colors shadow-lg"
            >
              Create Event
            </button>
          </div>
        </div>
        <div className="absolute left-[22%] top-1/3 -translate-y-1/2" ref={personRef}>
          <img 
            src= {personImg}
            alt="Person" 
            className="h-[50vh] w-auto"
          />
        </div>

        <div ref={contentBoxRef} className="absolute top-[20%] left-[28rem] bg-white rounded-3xl p-5 w-72 shadow-2xl">
          
        </div>

        <div className="absolute bottom-12 right-8 bg-white rounded-2xl p-8 w-96 shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Another Section
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, optio.

          </p>
        </div>
        
      </div>
    </div>
  );
};

export default MobileInteractionComponent;
