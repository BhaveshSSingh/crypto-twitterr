import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import { db } from "../../../firebase";
import Modal from "../../../modal/Modal";

export function EditPost({ user, post, id }) {
  // MOdal for edit
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(post.text);

  async function updatePost(e) {
    e.preventDefault();
    await updateDoc(doc(db, "posts", id), {
      text: editPost,
    });
    toast("Tweet Edited Successfully!");
    setShowModal(false);
  }

  return (
    <>
      <div className="icon group flex-shrink-0 ml-auto hover:text-purple-500">
        {user.uid === post.id && (
          <BsThreeDots onClick={() => setShowModal(true)} />
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="p-2 ">
          <div className="flex justify-between	 items-center border-b border-gray-700">
            Edit Tweet
            <div className="icon group">
              <MdClose size={28} onClick={() => setShowModal(false)} />
            </div>
          </div>
          <div className="pt-4 flex justify-between">
            <div className="pt-4">
              <input
                className="bg-transparent outline-none text-lg 
             placeholder-gray-500 w-full"
                type="text"
                autoFocus
                value={editPost}
                onChange={(e) => setEditPost(e.target.value)}
              />
            </div>
            <button
              className="cursor-pointer   bg-[#7856ff] text-white rounded-full px-3 py-1 font-normal shadow-md hover:bg-[#ab97fb] disabled:hover:bg-[#7856ff] disabled:opacity-50 disabled:cursor-default "
              disabled={!editPost.trim()}
              onClick={updatePost}
            >
              Tweet
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
