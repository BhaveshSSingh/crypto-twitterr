import React, { useState } from "react";
import { BsArrowLeft, BsThreeDots } from "react-icons/bs";
import Moment from "react-moment";
import { Comment } from "./home/feed/post/Comment";
import DeleteRetweet from "./home/feed/post/DeleteRetweet";
import { Like } from "./home/feed/post/Like";
import Post from "./home/feed/post/Post";

export default function PostPage({ user, id, post, Home, postPage }) {
  const [posts, setPosts] = useState();

  return (
    <>
      <div className="">
        <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black">
          <div
            className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
            onClick={Home}
          >
            <BsArrowLeft size={22} />
          </div>
          Tweet
        </div>
        {/*  */}
      </div>
    </>
  );
}
