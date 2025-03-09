import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedCircles = () => {
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);

  useEffect(() => {
    const animateCircles = () => {
      gsap.fromTo(
        circle1Ref.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(
        circle2Ref.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
      gsap.fromTo(
        circle3Ref.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power3.out' }
      );
    };

    animateCircles();

    // Optionally, add a cleanup function if needed
    // return () => {
    //   gsap.killTweensOf(circle1Ref.current);
    //   gsap.killTweensOf(circle2Ref.current);
    //   gsap.killTweensOf(circle3Ref.current);
    // };
  }, []);

  return (
    <>
      {/* Circle 1 */}
      <div
        className="tp-parallax-wrap absolute z-10 circle-1-wrap"
        style={{ left: '636px', top: '-538px' }}
      >
        <div className="tp-loop-wrap relative">
          <div className="tp-mask-wrap overflow-visible">
            <div
              ref={circle1Ref}
              className="tp-caption absolute bg-[#334499] rounded-full circle-1"
              style={{
                transform: 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Circle 2 */}
      <div
        className="tp-parallax-wrap absolute z-11 circle-2-wrap"
        style={{ left: '725px', top: '-397px' }}
      >
        <div className="tp-loop-wrap relative">
          <div className="tp-mask-wrap overflow-visible">
            <div
              ref={circle2Ref}
              className="tp-caption absolute bg-white/10 rounded-full circle-2"
              style={{
                transform: 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Circle 3 */}
      <div
        className="tp-parallax-wrap absolute z-12 circle-3-wrap"
        style={{ left: '774px', top: '-361px' }}
      >
        <div className="tp-loop-wrap relative">
          <div className="tp-mask-wrap overflow-visible">
            <div
              ref={circle3Ref}
              className="tp-caption absolute bg-white/7 rounded-full circle-3"
              style={{
                transform: 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedCircles;