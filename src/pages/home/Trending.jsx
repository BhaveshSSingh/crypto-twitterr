import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Trending() {
  return (
    <>
      <div className=" bg-transparent hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full font-light  ">
        <div className="space-y-0 5">
          <p className="text-[#6e767d] text-xs font-medium">
            Cricket · LIVE
            <br />
          </p>
          <h6 className="font-bold max-w-[250px] text-sm">
            ICC T20 World Cup: Pakistan vs Bangladesh{" "}
          </h6>
          <p></p>
        </div>
        <div>
          <img
            src="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/1522d4c2-39f3-4c84-91f7-df1b9c542534/05814a7a-970f-4d2c-9c7c-b31ab02a694f/1280x720/match/image.jpg"
            alt=""
            className="object-cover rounded-2xl w-22 h-20"
          />
        </div>
      </div>
      <div className=" bg-transparent hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full font-light  ">
        <div className="space-y-0 5">
          #AvatarTheWayOfWater
          <p className="text-[#6e767d] text-xs font-medium">
            Watch #AvatarTheWayOfWater only in Cinemas from <br />
          </p>
          <h6 className="font-bold max-w-[250px] text-sm">December 16</h6>
          <p className="flex ">
            <BsArrowUpRight /> promoted by 20th century movies india
            <span className="tag"></span>
          </p>
        </div>
        <div></div>
      </div>
      <div className=" bg-transparent hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full font-light  ">
        <div className="space-y-0 5">
          Entertainment · Trending{" "}
          <p className="text-[#6e767d] text-xs font-medium">
            #RanbirKapoor <br />
          </p>
          <h6 className="font-bold max-w-[250px] text-sm">December 16</h6>
          <p>
            Trending with <span className="tag">#AliaBhatt</span>
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
}
