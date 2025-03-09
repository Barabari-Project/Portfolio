import React from "react";
import vectorImg1 from "../../assets/Home/home-11-vector-1.png"
import vectorImg2 from "../../assets/Home/home-11-vector-2.png"
import vectorImg3 from "../../assets/Home/home-11-vector-3.png"
const VectorImages = () => {
  return (
    <>
      <div className="max-md:hidden">
        {/* Vector Image 1 */}
        <div className="tp-parallax-wrap left-[193px] top-[-50px] max-lg:left-[-125px] max-lg:top-[] absolute z-13 vector-image vector-image-1">
          <div className="tp-loop-wrap relative">
            <div className="tp-mask-wrap overflow-visible">
              <img
                src={vectorImg1}
                alt=""
                className="tp-caption vector-img"
                style={{ width: 1409, height: 1062 }}
              />
            </div>
          </div>
        </div>
        {/* Wave Vector */}
        <div className="tp-parallax-wrap left-[1132px] top-[366px] max-xl:left-[894px] max-lg:left-[657px] max-lg:top-[400px] absolute z-14 vector-image wave-vector-image">
          <div className="tp-loop-wrap rs-wave wave-loop">
            <div className="tp-mask-wrap overflow-visible">
              <img
                src={vectorImg2}
                alt=""
                className="tp-caption vector-img"
                style={{ width: 422, height: 353 }}
              />
            </div>
          </div>
        </div>
        {/* Slide Loop Vector */}
        <div className="tp-parallax-wrap left-[699px] top-[557px] max-xl:left-[563px] max-lg:left-[325px] max-lg:top-[576px] absolute z-15 vector-image slide-loop-vector-image">
          <div className="tp-loop-wrap rs-slideloop slide-loop">
            <div className="tp-mask-wrap overflow-visible">
              <img
                src={vectorImg3}
                alt=""
                className="tp-caption vector-img"
                style={{ width: 422, height: 378 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VectorImages;
