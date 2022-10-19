import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import Input from "./Input";

export default function Feed() {
  return (
    <div className="flex-grow border-l border-r  border-purple-300 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className=" flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b border-purple-300">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <HiOutlineSparkles size={30} />
        </div>
      </div>
      <Input />
    </div>
  );
}
