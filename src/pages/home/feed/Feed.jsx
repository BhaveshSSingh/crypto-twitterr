import React from "react";
import { BiLogOut } from "react-icons/bi";
import Input from "./Input";
import "react-toastify/dist/ReactToastify.css";
import { logout } from "../../../firebase";

export default function Feed() {
  return (
    <div className="flex-grow border-l border-r  border-purple-300 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className=" flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b border-purple-300">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <button
          className="bg-red-500  flex items-center justify-center  ml-auto text-white p-2 rounded m-1"
          onClick={logout}
        >
          Logout <BiLogOut className="m-1" />
        </button>
      </div>
      <Input />
    </div>
  );
}
