import React from "react";
import SidebarIcons from "./SidebarIcons";
import {
  BiHomeAlt,
  BiHash,
  BiBell,
  BiUser,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import { BsInbox, BsBookmarkPlus, BsClipboard } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import logo from "../../../assets/logo.png";
import ProfilePic from "../../../constants";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <img width={40} height={40} src={logo} alt="twitter pic" />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24 m:-5">
        <SidebarIcons text="Home" Icon={AiFillHome} active />
        <SidebarIcons text="Explore" Icon={BiHash} />
        <SidebarIcons text="Notifications" Icon={BiBell} />
        <SidebarIcons text="Messages" Icon={BsInbox} />
        <SidebarIcons text="Bookmarks" Icon={BsBookmarkPlus} />
        <SidebarIcons text="Lists" Icon={BsClipboard} />
        <SidebarIcons text="Pic" Icon={BiUser} />
        <SidebarIcons text="More" Icon={BiDotsHorizontalRounded} />
      </div>
      <button className="hidden xl:inline ml-auto w-56 h-[52px] font-bold pd-20px rounded-full text-lg hover:bg-[#9e86ff]">
        Tweet
      </button>
      <div className="text flex items-center justify-center mt-auto hoverAnimation xl:ml-auto ">
        {/* <img
          className="         
            h-10 w-10 rounded-full xl:mr-2.5"
          src={SRC}
          alt=""
        ></img> */}
        {/* Dice bear from contansts */}
        <ProfilePic />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Snoop Cat</h4>
          <p className="text-[gray]">@snoopcat</p>
        </div>
        <BiDotsHorizontalRounded className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}
