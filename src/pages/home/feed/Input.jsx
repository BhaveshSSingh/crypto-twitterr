import React, { useState, useRef } from "react";
import { MdClear, MdAddPhotoAlternate } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import "./Input.css";
import Picker from "@emoji-mart/react";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  serverTimestamp,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { db, storage } from "../../../firebase";
import ProfilePic from "../../../constants";

function Input({ user }) {
  const [input, setInput] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const filePickerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendPost = async () => {
    if (loading) return;
    setLoading(true);
    // Create the Doc
    const docRef = await addDoc(collection(db, "posts"), {
      id: user.uid,
      tag: user.uid.substring(0, 5),
      username: user.displayName,
      userImg: user.photoURL,
      text: input,
      time: serverTimestamp(),
    });
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    // Update the Doc with img
    if (selectedImage) {
      await uploadString(imageRef, selectedImage, "data_url").then(async () => {
        // DownLoad URL to use later
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }

    // Reset the states
    setLoading(false);
    setInput("");
    setSelectedImage(null);
    setShowEmojis(false);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedImage(readerEvent.target.result);
    };
  };

  // Adds emoji to the input with the texts
  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <div
      className={`border-b border-purple-300 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide ${
        loading && "opacity-60"
      }`}
    >
      <span className="cursor-pointer">
        <ProfilePic />
      </span>

      <div className="w-full divide-y divide-purple-400">
        <div className={`${selectedImage && "pb-7"} ${input && "space-y-2.5"}`}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            rows="2"
            className="bg-transparent outline-none text-lg 
             placeholder-gray-500 w-full"
          />

          {selectedImage && (
            <div className="relative">
              <span
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedImage(null)}
              >
                <MdClear size={22} className="text-white" />
              </span>
              <img
                src={selectedImage}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>
        {!loading && (
          <>
            <div className="flex items-center justify-between pt-2.5 text-purple-600">
              <div className="flex items-center">
                <div
                  className="icon"
                  onClick={() => filePickerRef.current.click()}
                >
                  <MdAddPhotoAlternate size={28} />
                  <input
                    type="file"
                    hidden
                    onChange={addImageToPost}
                    ref={filePickerRef}
                  />
                </div>

                <div
                  className="icon"
                  onClick={() => setShowEmojis(!showEmojis)}
                >
                  <BsEmojiSmile size={22} />
                </div>

                {showEmojis && <Picker onEmojiSelect={addEmoji} />}
              </div>
              <button
                className="cursor-pointer   bg-[#7856ff] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#ab97fb] disabled:hover:bg-[#7856ff] disabled:opacity-50 disabled:cursor-default "
                disabled={!input.trim() && !selectedImage}
                onClick={sendPost}
              >
                Tweet
              </button>
            </div>
            {/* <ToastContainer /> */}
          </>
        )}
      </div>
    </div>
  );
}

export default Input;
