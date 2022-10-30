import React from "react";
import SidebarIcons from "./SidebarIcons";
import { BiHash, BiUser, BiLogOut } from "react-icons/bi";
import { BsBookmarkPlus } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import logo from "../../../assets/logo.svg";
import ProfilePic from "../../../constants";
import { logout } from "../../../firebase";

export default function Sidebar({ user }) {
  return (
    <div className="hidden sm-[440px]:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <img width={40} height={40} src={logo} alt="twitter pic" />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24 m:-5">
        <SidebarIcons text="Home" Icon={AiFillHome} active />
        <SidebarIcons text="Explore" Icon={BiHash} />
        <SidebarIcons text="Bookmarks" Icon={BsBookmarkPlus} />
        <SidebarIcons text="Find People" Icon={BiUser} />
        <a
          className="text-purple-500"
          href="https://discord-clone-baa20.firebaseapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <SidebarIcons
            text="Discord Clone"
            Icon={FaDiscord}
            href="https://discord-clone-baa20.firebaseapp.com/"
          />
        </a>
      </div>
      <button className="hidden xl:inline ml-auto w-56 h-[52px] font-bold pd-20px rounded-full text-lg hover:bg-[#9e86ff] text-white">
        Tweet
      </button>
      <div className="text flex items-center justify-center mt-auto hoverAnimation xl:ml-auto ">
        <ProfilePic />

        <div className="hidden xl:inline leading-5 ">
          <h4 className="font-bold">{user.displayName.substring(0, 8)}</h4>
          <p className="text-[gray]">@{user.uid.substring(0, 5)}</p>
        </div>
        <BiLogOut
          size={22}
          onClick={logout}
          className="h-5 hidden xl:inline ml-10 text-red-500"
        />
      </div>
    </div>
  );
}
