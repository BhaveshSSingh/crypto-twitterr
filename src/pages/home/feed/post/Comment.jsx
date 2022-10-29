import React, { useEffect, useState } from "react";
import ProfilePic from "../../../../constants";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../../firebase";
import Modal from "../../../../modal/Modal";
import { MdClose } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import Moment from "react-moment";

export function Comment({ id, post, postPage, user }) {
  const [showModal, setShowModal] = useState(false);

  // comment\
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  async function sendComment(e) {
    e.preventDefault();

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: comment,
      username: user.displayName,
      tag: user.uid.substring(0, 5),
      userImg: user.photoURL,
      timestamp: serverTimestamp(),
    });
    setShowModal(false);
    setComment("");
  }
  return (
    <>
      {" "}
      <div
        className="flex items-center space-x-1 group "
        onClick={() => setShowModal(true)}
      >
        <div className="icon group-hover:bg-orange-500 group-hover:bg-opacity-10 ">
          <AiOutlineComment size={22} className={` hover:text-orange-500`} />
        </div>
        {comments.length > 0 && (
          <span className="group-hover:text-orange-500 text-sm">
            {comments.length}
          </span>
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="flex items-center border-b border-gray-700">
          <div className="icon group">
            <MdClose size={28} onClick={() => setShowModal(false)} />
          </div>
        </div>
        <div className="flex px-4 pt-5 pb-2.5 sm:px-6">
          <div className="w-full">
            <div className="text-[#6e767d] flex gap-x-3 relative">
              <span className="w-0.5 h-full z-[-1] absolute left-5 top-11 bg-gray-600" />
              <img
                src={
                  post.userImg
                    ? post?.userImg
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBCVC-ISKIyOp_8TIJvtrN0EmZEWF5RxHew&usqp=CAU"
                }
                alt="Profile Pic"
                className="h-11 w-11 rounded-full mr-4"
              />
              <div className="text-[#63767d]">
                <div className="inline-block group">
                  <h4
                    className={`font-bold text-[15px] sm:text-base hover:underline inline-block
                        }`}
                  >
                    {post?.username}
                  </h4>
                  <span
                    className={`text-sm sm:text-[15px] ml-1.5
                        }`}
                  >
                    @{post?.tag}
                  </span>
                </div>{" "}
                .{" "}
                <span className="hover:underline text-sm sm:text-[15px">
                  <Moment fromNow>{post?.time?.toDate()}</Moment>
                </span>
                {!postPage && (
                  <p className="text-white text-[15px] sm:text-base mt-0.5">
                    {post?.text}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-7 flex space-x-3 w-full">
              <ProfilePic />
              <div className="flex-grow mt-2">
                <textarea
                  value={comment}
                  placeholder="Tweet your reply"
                  rows="2"
                  className="bg-transparent outline-none text-lg placeholder-gray-500 tracking-wide
                    w-full min-h-[80px]
                    "
                  onChange={(e) => setComment(e.target.value)}
                />
                <div className="flex items-center justify-between pt-2.5">
                  <div className="icon"></div>
                  <button
                    className="text-white 
                        bg-[#7856ff]
                        rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-purple-500 disabled:hover:bg-[#831df0] disabled:opacity-50 disabled:cursor-default"
                    type="submit"
                    onClick={sendComment}
                    disabled={!comment.trim()}
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
