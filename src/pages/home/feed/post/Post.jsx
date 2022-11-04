import { Like } from "./Like";
import { BsThreeDots } from "react-icons/bs";
import Moment from "react-moment";
import DeleteRetweet from "./DeleteRetweet";
import { Comment } from "./Comment";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../../firebase";

import PostComments from "./PostComments";

function Post({ id, post, postPage, user }) {
  const navigate = useNavigate();
  function redirectPage({ id }) {
    // navigate(`/post/${id}`);
  }

  // fOR pOST coMMENTS
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

  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700 break-words">
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
        <div
          className={`flex ${!postPage && "justify-between"}`}
          onClick={redirectPage}
        >
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
            <span className="hover:underline text-sm sm:text-[15px break-words">
              <Moment fromNow>{post?.time?.toDate()}</Moment>
            </span>
            {!postPage && (
              <p className="text-white text-[15px] sm:text-base mt-0.5 break-all">
                {post?.text}
              </p>
            )}
          </div>
          <div className="icon group flex-shrink-0 ml-auto hover:text-purple-500">
            <BsThreeDots />
          </div>
        </div>
        {postPage && (
          <p className="text-[15px] sm:text-base mt-0.5" onClick={redirectPage}>
            {post?.text}
          </p>
        )}
        <img
          src={post?.image}
          alt=""
          className="rounded-2xl max-h-[700px] object-cover mr-2"
          onClick={redirectPage}
        />
        <div
          className={` text-[#6e767d] flex justify-between w-10/12  ${
            postPage && "mx-auto"
          }`}
        >
          {/* Like  */}
          {<Like id={id} user={user} />}

          {/* Comment */}
          <Comment id={id} post={post} postPage={postPage} user={user} />

          {/* Delete */}
          <DeleteRetweet id={id} user={user} post={post} />
        </div>
        {/* Comments render here */}
        {comments.length > 0 && (
          <div className="pb-10">
            {comments.map((comment) => (
              <PostComments
                key={comment.id}
                commentID={comment.id}
                postID={id}
                comment={comment.data()}
                user={user}
                post={post}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
