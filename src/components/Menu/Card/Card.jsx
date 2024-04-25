import React from "react";
import images from "../../../assets/images/images.jpg";

export function Card() {
  return (
    <div className="flex bg-[#def3fd] p-3 gap-3 relative rounded-xl">
      <img src={images} className="w-[100px] rounded-sm" alt="image" />
      <div className="flex flex-col justify-between">
        <p>همبرگر مخصوص</p>
        <p>1000 تومان</p>
        <div className="flex gap-2">
          <span className="bg-cyan-600 px-1 w-5 text-center text-sm text-white">
            +
          </span>
          <span>0</span>
          <span className="bg-cyan-600 px-1 w-5 text-center text-sm text-white">
            -
          </span>
        </div>
      </div>
      <span className="absolute bottom-2 left-2">2000$</span>
    </div>
  );
}
