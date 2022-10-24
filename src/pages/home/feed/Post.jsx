import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  AiOutlineComment,
  AiFillLike,
  AiOutlineLike,
  AiOutlineRetweet,
  AiOutlineDelete,
} from "react-icons/ai";

function Post({ id, post, postPage }) {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      {!postPage && (
        <img
          src={post?.userImg}
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
            </div>{" "}
            .{" "}
            <span className="hover:underline text-sm sm:text-[15px">
              {/* <Moment></Moment> */}
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
          <AiOutlineComment size={22} className={` hover:text-orange-500`} />
          <AiOutlineLike
            size={22}
            className={` hover:text-green-500  `}
            onClick={``}
          />
          <AiOutlineRetweet size={22} className=" hover:text-purple-500" />
          <AiOutlineDelete size={22} className="hover:text-red-500" />
        </div>
      </div>
    </div>
  );
}

export default Post;
