import React from "react";
import background from "../assets/background-leaves.svg";
import { marketingData } from "../data/dummyData";
import leaf from "../assets/leaf-icon.svg";

const Marketing = () => {
  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "",
    paddingLeft: "100px",
    paddingTop: "100px",
  };

  return (
    <div style={styles} className="">
      {marketingData.map((item) => (
        <div
          key={item.id}
          className="w-[340px] h-[117px] relative bg-neutral-800 rounded-xl border border-zinc-300 group overflow-hidden hover:border-green-700 hover:scale-95"
        >
          {/* <div className="w-[54px] h-[54px] left-[19px] top-[30px] absolute">
            <img src={item.icon} alt="Leaf Icon" />
          </div>
          <div className="w-[216px] left-[80px] top-[60px] absolute text-white text-xs font-normal">
            {item.description}
          </div>
          <div className="h-[22px] left-[80px] top-[30px] absolute transition-transform duration-300 ease-in-out group-hover:transform translate-x-full">
            <div className="left-0 top-0 flex items-center gap-4 text-white text-lg font-bold">
              {item.heading}
            </div>
          </div> */}
          <div className="p-4 flex items-start gap-3">
            <div>
              <img src={item.icon} alt="Leaf Icon" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-white text-lg font-bold">
                {item.heading}
              </div>
              <div className="w-[216px] text-white text-xs font-normal">Import, store and structure you data strcutre as entites</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marketing;
