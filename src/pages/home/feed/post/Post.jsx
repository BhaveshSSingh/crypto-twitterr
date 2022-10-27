import { Like } from "./Like";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import Moment from "react-moment";
import { useState } from "react";
import Modal from "../../../../modal/Modal";
import { MdClose } from "react-icons/md";
import DeleteRetweet from "./DeleteRetweet";

function Post({ id, post, postPage, user }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      {!postPage && (
        <img
          src={
            post.userImg
              ? post?.userImg
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBCVC-ISKIyOp_8TIJvtrN0EmZEWF5RxHew&usqp=CAU"
          }
          alt=""
          className="h-11 w-11 rounded-full mr-4"
        />
      )}
      <div className="flex flex-col space-y-2 w-full">
        <div className={`flex ${!postPage && "justify-between"}`}>
          {postPage && (
            <img
              src={post?.userImg}
              alt="Profile Pic"
              className="h-11 w-11 rounded-full mr-4"
            />
          )}
          <div className="text-[#63767d]">
            <div className="inline-block group">
              <h4
                className={`font-bold text-[15px] sm:text-base hover:underline ${
                  !postPage && "inline-block"
                }`}
              >
                {post?.username}
              </h4>
              <span
                className={`text-sm sm:text-[15px] ${!postPage && "ml-1.5"}`}
              >
                @{post?.tag}
              </span>
            </div>
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
          <div className="icon group flex-shrink-0 ml-auto hover:text-purple-500">
            <BsThreeDots />
          </div>
        </div>
        {postPage && (
          <p className="text-[15px] sm:text-base mt-0.5">{post?.text}</p>
        )}
        <img
          src={post?.image}
          alt=""
          className="rounded-2xl max-h-[700px] object-cover mr-2"
        />
        <div
          className={` text-[#6e767d] flex justify-between w-10/12  ${
            postPage && "mx-auto"
          }`}
        >
          {/* Like component */}
          {<Like id={id} user={user} />}
          {/* Delete */}
          <DeleteRetweet id={id} user={user} post={post} />
          {/* Comment */}

          <div
            className="flex items-center space-x-1 group "
            onClick={() => setShowModal(true)}
          >
            <div className="icon group-hover:bg-orange-500 group-hover:bg-opacity-10 ">
              <AiOutlineComment
                size={22}
                className={` hover:text-orange-500`}
              />
            </div>
            {/* {comments.length > 0 ? <span className="group-hover:text-orange-500 text-sm">{comments.length}</span> : ""} */}
          </div>
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <div className="icon group">
              <MdClose size={28} onClick={() => setShowModal(false)} />
            </div>
            <div className={`pt-2 flex ${!postPage && "justify-between"}`}>
              <img
                src={post?.userImg}
                alt="Profile Pic"
                className="h-11 w-11 rounded-full mr-4"
              />
              <div className="text-[#63767d]">
                <div className="inline-block group">
                  <h4
                    className={`font-bold text-[15px] sm:text-base hover:underline ${
                      !postPage && "inline-block"
                    }`}
                  >
                    {post?.username}
                  </h4>
                  <span
                    className={`text-sm sm:text-[15px] ${
                      !postPage && "ml-1.5"
                    }`}
                  >
                    @{post?.tag}
                  </span>
                </div>
                .{" "}
                <span className="hover:underline text-sm sm:text-[15px">
                  <Moment fromNow>{post?.time?.toDate()}</Moment>
                </span>
                {!postPage && (
                  <p className="text-white text-[15px] sm:text-base mt-0.5">
                    {post?.text}
                  </p>
                )}
                <img
                  src={post?.image}
                  alt=""
                  className="rounded-2xl max-h-[700px] object-cover mr-2"
                />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Post;
