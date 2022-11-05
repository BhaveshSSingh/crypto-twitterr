import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Moment from "react-moment";
import { db } from "../../../../firebase";
import { BsPencil } from "react-icons/bs";
import Modal from "../../../../modal/Modal";
import { MdClose } from "react-icons/md";

export default function PostComments({
  comment,
  user,
  post,
  postID,
  commentID,
}) {
  // MOdal for edit
  const [showModal, setShowModal] = useState(false);
  const [editComment, setEditComment] = useState(comment.comment);

  // Edit Comment
  async function updateComments(e) {
    e.preventDefault();
    await updateDoc(doc(db, "posts", postID, "comments", commentID), {
      comment: editComment,
    });
    setShowModal(false);
  }
  // Delete comment
  const deleteComment = () => {
    console.log("delete clicked");
    deleteDoc(doc(db, "posts", postID, "comments", commentID));
  };
  // console.log("user " + user.displayName);
  // console.log("commenter " + comment.username);
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-900">
      <img
        src={comment?.userImg}
        alt=""
        className="h-11 w-11 rounded-full mr-4"
      />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4 className="font-bold text-[#d9d9d9] text-[15px] sm:text-base inline-block group-hover:underline">
                {comment?.username}
              </h4>
              <span className="ml-1.5 text-sm sm:text-[15px]">
                @{comment?.tag}{" "}
              </span>
            </div>{" "}
            ·{" "}
            <span className="hover:underline text-sm sm:text-[15px]">
              <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
            </span>
            <p className="text-[#d9d9d9] mt-0.5 max-w-sm  text-[15px] sm:text-base break-all">
              {comment?.comment}
            </p>
          </div>

          <div className="flex">
            {user.displayName === comment.username ? (
              <>
                <div
                  className="icon group-hover:bg-red-500 group-hover:bg-opacity-10 "
                  onClick={() => setShowModal(true)}
                >
                  <BsPencil
                    size={22}
                    className="text-[#6e767d] hover:text-purple-500 h-5"
                  />
                </div>
                <div className="icon group-hover:bg-red-500 group-hover:bg-opacity-10 ">
                  <AiOutlineDelete
                    size={22}
                    className="text-[#6e767d] hover:text-red-500 h-5"
                    onClick={deleteComment}
                  />
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="p-2">
          <div className="flex justify-between	 items-center border-b border-gray-700">
            Edit Todo
            <div className="icon group">
              <MdClose size={28} onClick={() => setShowModal(false)} />
            </div>
          </div>
          <div className="pt-4">
            <input
              className="bg-transparent outline-none text-lg 
             placeholder-gray-500 w-full"
              type="text"
              autoFocus
              value={editComment}
              onChange={(e) => setEditComment(e.target.value)}
            />
          </div>
          <button
            className="cursor-pointer   bg-[#7856ff] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#ab97fb] disabled:hover:bg-[#7856ff] disabled:opacity-50 disabled:cursor-default "
            disabled={!editComment.trim()}
            onClick={updateComments}
          >
            Comment
          </button>
        </div>
      </Modal>
    </div>
  );
}
