import React, { useState, useRef } from "react";
import ProfilePic from "../../../constants";
import { MdOutlineCancel, MdAddPhotoAlternate } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import "./Input.css";
// import data from "@emoji-mart/data/sets/14/apple.json";
import Picker from "@emoji-mart/react";

function Input() {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [addImageToPost, setAddImageToPost] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const filePickerRef = useRef(null);

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };
  console.log(input);

  return (
    <div
      className={`border-b border-purple-300 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide`}
    >
      <span className="cursor-pointer">
        <ProfilePic />
      </span>

      <div className="w-full divide-y divide-purple-400">
        <div className={``}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            rows="2"
            className="bg-transparent outline-none text-lg text-gray-200 placeholder-gray-400 w-full"
          />

          {selectedFile && (
            <div className="relative">
              <span
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <MdOutlineCancel className="text-white h-5" />
              </span>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2.5 text-purple-600">
          <div className="flex items-center">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <MdAddPhotoAlternate size={28} />
              <input
                type="file"
                hidden
                onChange={addImageToPost}
                ref={filePickerRef}
              />
            </div>

            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
              <BsEmojiSmile size={22} />
            </div>

            {showEmojis && <Picker onEmojiSelect={addEmoji} />}
          </div>
          <button
            className=" text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#a28bff]   cursor-pointer opacity-70"
            disabled={!input && !selectedFile}
            // onClick={sendPost}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
