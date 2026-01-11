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
      className="min-h-[220vh] bg-indigo-800 flex items-start justify-center p-4 sm:p-6 md:p-8"
    >
      <div className="relative w-full max-w-6xl h-[100vh] sticky top-4 sm:top-6 md:top-8">
        {/* Phone Section */}
        <div className="absolute left-2 sm:left-4 md:left-8 top-1/4 sm:top-1/3 -translate-y-1/2">
          <div className="relative">
            <img 
              src={phoneImg} 
              alt="Phone" 
              className="h-[30vh] sm:h-[40vh] md:h-[50vh] w-auto"
            />
            <button
              ref={buttonRef}
              className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-[45%] -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-2 py-1 text-xs sm:text-sm md:text-base rounded-3xl font-semibold hover:bg-purple-700 transition-colors shadow-lg"
            >
              Create Event
            </button>
          </div>
        </div>
        
        {/* Person Image */}
        <div className="absolute left-[15%] sm:left-[18%] md:left-[22%] top-1/4 sm:top-1/3 -translate-y-1/2" ref={personRef}>
          <img 
            src={personImg}
            alt="Person" 
            className="h-[30vh] sm:h-[40vh] md:h-[50vh] w-auto"
          />
        </div>

        {/* Content Box - Hidden on mobile, visible on larger screens */}
        <div ref={contentBoxRef} className="hidden sm:block absolute top-[15%] sm:top-[18%] md:top-[20%] left-[50%] sm:left-[20rem] md:left-[28rem] bg-white rounded-3xl p-3 sm:p-4 md:p-5 w-48 sm:w-60 md:w-72 shadow-2xl">
          
        </div>

        {/* Info Card */}
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 right-2 sm:right-4 md:right-8 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 md:p-8 w-[55%] sm:w-72 md:w-96 shadow-2xl">
          <h2 className="text-sm sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 sm:mb-3">
            Another Section
          </h2>
          <p className="text-xs sm:text-base text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, optio.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default MobileInteractionComponent;
