import React from "react";
import { AiOutlineRetweet, AiOutlineDelete } from "react-icons/ai";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { toast } from "react-toastify";
export default function DeleteRetweet({ id, user, post }) {
  // Delete your own posts (Delete btn)
  const deleteHandler = () => {
    console.log("delete clicked");
    deleteDoc(doc(db, "posts", id));
    toast(`Post Deleted 🗑️`);
  };
  // Copy to clipboard (RwTweet btn)
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://cryptoo-bros.firebaseapp.com/"
      );
    } catch (e) {
      console.error("e", e);
    }
    toast(" Link Copied 🔗");
  };
  return (
    <div>
      {user.uid === post.id ? (
        <div className="icon group-hover:bg-red-500 group-hover:bg-opacity-10 ">
          <AiOutlineDelete
            size={22}
            className="hover:text-red-500"
            onClick={deleteHandler}
          />
        </div>
      ) : (
        <div
          className="icon group-hover:bg-purple-500 group-hover:bg-opacity-10 "
          onClick={copyToClipboard}
        >
          <AiOutlineRetweet size={22} className=" hover:text-purple-500" />
        </div>
      )}
    </div>
  );
}
