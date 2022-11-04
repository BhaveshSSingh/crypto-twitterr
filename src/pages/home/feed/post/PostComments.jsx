import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Moment from "react-moment";
import { db } from "../../../../firebase";
import { BsThreeDots } from "react-icons/bs";

export default function PostComments({
  comment,
  user,
  post,
  postID,
  commentID,
}) {
  const deleteComment = () => {
    console.log("delete clicked");
    deleteDoc(doc(db, "posts", postID, "comments", commentID));
  };

  console.log("user " + user.displayName);
  console.log("commenter " + comment.username);
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
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
          {/* <div className="icon group flex-shrink-0">
            <BsThreeDots className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div> */}
          <div>
            {user.displayName === comment.username ? (
              <div className="icon group-hover:bg-red-500 group-hover:bg-opacity-10 ">
                <AiOutlineDelete
                  size={22}
                  className="hover:text-red-500"
                  onClick={deleteComment}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
