import React from "react";
import background from "../assets/background-leaves.svg";
import { marketingData } from "../data/dummyData";
import { GoArrowRight } from "react-icons/go";

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
          className="card w-[340px] h-[117px] relative bg-neutral-800 rounded-xl border border-zinc-300 group overflow-hidden hover:border-green-700 hover:scale-95"
        >
          <div className="p-4 flex items-start gap-3">
            <div>
              <img src={item.icon} alt="Leaf Icon" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-white flex items-center gap-3 text-lg font-bold">
                {item.heading}
                <GoArrowRight className="arrow" />
              </div>
              <div className="w-[216px] text-white text-xs font-normal">Import, store and structure your as entities</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marketing;
