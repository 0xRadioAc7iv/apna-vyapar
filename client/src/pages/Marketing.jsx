import React from "react";
import background from "../assets/background-leaves.svg";
import { marketingData } from "../data/dummyData";
import leaf from "../assets/leaf-icon.svg";
import { FaArrowRightLong } from 'react-icons/fa';

const Marketing = () => {
  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    padding: "16px",
  };

  return (
    <div style={styles}>
      {marketingData.map((item) => (
        <div
          key={item.id}
          className="w-[350px] h-[117px] relative bg-neutral-800 rounded-xl border border-zinc-300 group overflow-hidden hover:border-green-700 hover:scale-95"
        >
          <div className="w-[54px] h-[54px] left-[19px] top-[30px] absolute">
            <img src={item.icon} alt="Leaf Icon" />
          </div>
          <div className="w-[216px] left-[80px] top-[60px] absolute text-white text-xs font-normal">
            {item.description}
          </div>
          <div className="h-[22px] left-[80px] top-[30px] absolute transition-transform duration-300 ease-in-out group-hover:transform translate-x-full">
            <div className="left-0 top-0 flex items-center gap-4 text-white text-lg font-bold">
              {item.heading} <FaArrowRightLong />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marketing;
