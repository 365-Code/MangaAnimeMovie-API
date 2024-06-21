import React from "react";
import HeaderBlock from "./HeaderBlock";

const index = 0;
const Slide = ({ image, cards }: { image: string; cards: Array<any> }) => {
  return (
    <div className="relative w-full h-full overflow-hidden snap-start p-4">
      <div className="absolute top-0 left-0 w-full h-full flex -z-10">
        <div className="basis-[300px] h-full bg-gradient-to-b from-orange-400 to-orange-100" />
        <div className="h-full flex-1 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-200 to-slate-300" />
          <img src={image} alt="" className="cover-img opacity-40" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
