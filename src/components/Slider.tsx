import React from "react";

const Slider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="scroll-smooth absolute top-0 left-0 w-screen h-screen overflow-y-scroll snap-mandatory snap-y">
      {children}
      {/* <div className="rounded-full w-[40px] rotate-180 h-[40px] hover:bg-black/30 transition-all flex justify-center items-center border absolute bottom-4 left-1/2 -translate-x-1/2">
        ^
      </div> */}
    </div>
  );
};

export default Slider;
