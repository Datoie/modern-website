import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { avatar } from '../assets';

function Hero() {
  const animation1 = useRef(null);
  const animation2 = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    const englishEl = animation1.current;
    const georgianEl = animation2.current;

    const handleAnimation = () => {
      if (scrollPosition >= 300) {
        gsap.to(englishEl, { opacity: 0, y: 50, duration: 0.5 });
        gsap.to(georgianEl, { opacity: 0, y: 50, duration: 1 });
      } else {
        gsap.to(englishEl, { opacity: 1, y: 0, duration: 0.5 });
        gsap.to(georgianEl, { opacity: 1, y: 0, duration: 1 });
      }
    };

    handleAnimation();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      gsap.killTweensOf(englishEl);
      gsap.killTweensOf(georgianEl);
    };
  }, [scrollPosition]);

  return (
    <div className='bg-black z-[-1] w-full sm:h-[55rem] h-[45rem] flex flex-col items-center justify-center xl:gap-[5rem] gap-[2rem] md:p-[5rem] p-[1rem]'>
      <div className='flex xl:flex-row flex-col gap-[5rem]'>
        <div className='pl-[1rem] relative grid gap-[1rem]'>
          <h1 ref={animation1} className='text-white md:text-[2.4em] text-[1.3em] reenie-beanie sm:text-end text-center'>
            Davit Grdzelsivhili Web Developer <br />Leader at <span className='text--secondary'>Goal Oriented Academy</span>
          </h1>
          <h2 ref={animation2} className='text-white md:text-[2.4em] text-[1.3em] unicode--font'>
            დავით გრძელიშვილი ვებ დეველოპერი <br /><span className='text--secondary reenie-beanie'>Goal Oriented Academy</span> ლიდერი
          </h2>

          <div className='h-[100%] xl:flex hidden absolute bg--primary w-1 right-[-2rem] top-[0]' /> {/* left */}
          <div className='h-1 w-full xl:hidden flex absolute bg--primary right-[0rem] bottom-[-1rem]' /> {/* bottom */}
        </div >
        <div className='right-0 flex justify-center'>
          <div className='relative'>
            <img src={avatar} alt="avatar" className='absolute  sm:w-[300px] w-[200px] z-[2]  top-[3rem] right-[3rem]' />
            <div className='bg--primary sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] rounded-full top-[8rem] z-[1] right-[3rem]' />
          </div>
        </div>
      </div >
      <span className='text-[white] reenie-beanie text-[5em]'>scroll</span>
    </div >
  )
}

export default Hero