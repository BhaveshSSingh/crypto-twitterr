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

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <img
          width={30}
          height={30}
          src="https://icon-library.com/images/twitter-icon-svg/twitter-icon-svg-28.jpg"
          alt="twitter pic"
        />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24 ">
        <SidebarIcons text="Home" Icon={AiFillHome} active />
        <SidebarIcons text="Explore" Icon={BiHash} />
        <SidebarIcons text="Notifications" Icon={BiBell} />
        <SidebarIcons text="Messages" Icon={BsInbox} />
        <SidebarIcons text="Bookmarks" Icon={BsBookmarkPlus} />
        <SidebarIcons text="Lists" Icon={BsClipboard} />
        <SidebarIcons text="Profile" Icon={BiUser} />
        <SidebarIcons text="More" Icon={BiDotsHorizontalRounded} />{" "}
      </div>
    </div>
  );
}
