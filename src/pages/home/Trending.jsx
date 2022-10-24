import React from "react";

export default function Trending() {
  return (
    <div className=" bg-transparent hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full font-light  ">
      <div className="space-y-0 5">
        {/* <p>{ result.heading}</p> */}
        <p className="text-[#6e767d] text-xs font-medium">
          T20 World Cup.
          <br />
          LIVE T20 World Cup.
          <br /> LIVE T20 World Cup.
          <br />
          LIVE T20 World Cup. LIVE
        </p>
        <h6 className="font-bold max-w-[250px] text-sm">Result. description</h6>
        <p>
          Trending With
          <span className="tag">#tags</span>
        </p>
      </div>
      <div>
        <img
          src="https://miro.medium.com/max/1071/1*WNr4o3XKVcb556Al3beWAQ.jpeg"
          alt=""
          className="object-cover rounded-2xl w-22 h-20"
        />
      </div>
    </div>
  );
}
