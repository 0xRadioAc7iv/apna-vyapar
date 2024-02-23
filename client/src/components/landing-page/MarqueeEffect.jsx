import React from 'react';
import Marquee from "react-fast-marquee";
import star from "../../assets/star.svg";

const MarqueeEffect = () => {
  const repeatedText = "APNA VYAPAR";

  return (
    <div className="inset-0 -z-10 h-full w-full bg-black">
      <Marquee className="bg-radial-gradient text-white tracking-[3px]">
        {[...Array(20)].map((_, index) => (
          <React.Fragment key={index}>
            <span className="">{repeatedText}</span>
            <img src={star} alt="star" className="inline-block h-4 w-4 mx-20" />
          </React.Fragment>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeEffect;