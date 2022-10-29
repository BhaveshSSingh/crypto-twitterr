import React from "react";
import { BiSearch } from "react-icons/bi";
import Trending from "./Trending";

export default function Widgets({}) {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-transparent   w-11/12 xl:w-9/12">
        <div className="bg-[#202327] flex items-center p-3  relative rounded-full ">
          <BiSearch size={20} className=" h-5  rounded-full" />
          <input
            type="text"
            className="bg-transparent  rounded-full placeholder-gray-500 outline-none absolute inset-0 pl-11 border border-transparent w-full
            focus:border-purple-500 "
            placeholder="Search Twitter"
          />
        </div>
      </div>
      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">What's happening</h4>
        {/* {trendingResults.map((result, index) => (
          <Trending key={index} result={result} />
        ))} */}
        <Trending />
        <button className=" bg-transparent hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-purple-500 font-light rounded-b-xl ">
          Show more
        </button>
      </div>

      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        {/* {trendingResults.map((result, index) => (
          <Trending key={index} result={result} />
        ))} */}
        <div className=" bg-transparent hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center">
          <img
            src="https://frankzane.com/wp-content/uploads/2016/03/Vac_1-300x300.jpg"
            className="object-cover  rounded-full w-16 h-16"
            alt=""
          />{" "}
          <div className="ml-4 leading-5 group">
            <h4 className="font-bold group-hover:underline">Frank Zane</h4>
            <h5 className="text-gray-500 text-[15px]">@frankzane</h5>
          </div>
          <button className="ml-auto bg-white  text-black rounded-full font-bold text-sm py-1.5 px-3.5">
            Follow
          </button>
        </div>

        <button className=" bg-transparent hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-purple-500 font-light rounded-b-xl ">
          Show more
        </button>
      </div>
    </div>
  );
}
