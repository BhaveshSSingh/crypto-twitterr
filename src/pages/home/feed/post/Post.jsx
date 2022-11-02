import { Like } from "./Like";
import { BsThreeDots } from "react-icons/bs";
import Moment from "react-moment";
import DeleteRetweet from "./DeleteRetweet";
import { Comment } from "./Comment";
import { useNavigate } from "react-router-dom";
import PostPage from "../../../PostPage";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../../firebase";
import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineDelete,
  AiOutlineHeart,
  AiOutlineRetweet,
} from "react-icons/ai";
import ProfilePic from "../../../../constants";
import { MdClose } from "react-icons/md";
import Modal from "../../../../modal/Modal";

function Post({ id, post, postPage, user }) {
  const navigate = useNavigate();
  function redirectPage() {
    navigate(`/post/${id}`);
  }

  // For likes
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState([]);

  // Likes section
  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );
  useEffect(
    () => setLiked(likes.findIndex((like) => like.id === user?.uid) !== -1),
    [likes]
  );

  const likePost = async () => {
    console.log("like clicked");
    if (liked) {
      await deleteDoc(doc(db, "posts", id, "likes", user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", user.uid), {
        username: user.displayName,
      });
    }
  };

  // For comments
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

  // For delete and retweet
  // Delete your own posts (Delete btn)
  const deleteHandler = () => {
    console.log("delete clicked");
    deleteDoc(doc(db, "posts", id));
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
    alert("Copied to Clipboard");
  };

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
          {/* {<Like id={id} user={user} />} */}

          <div className="flex items-center space-x-1 group" onClick={likePost}>
            <div className="icon group-hover:bg-pink-600/10 ">
              {liked ? (
                <AiFillHeart size={22} className="text-pink-500" />
              ) : (
                <AiOutlineHeart
                  size={22}
                  className={` hover:text-pink-500  `}
                />
              )}
            </div>
            {likes.length > 0 && (
              <span
                className={`group-hover:text-pink-600 text-sm ${
                  liked && "text-pink-600"
                }`}
              >
                {likes.length}
              </span>
            )}
          </div>

          {/* Comment */}
          {/* <Comment id={id} post={post} postPage={postPage} user={user} /> */}
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
          {/* Delete */}
          {/* <DeleteRetweet id={id} user={user} post={post} /> */}
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
                <AiOutlineRetweet
                  size={22}
                  className=" hover:text-purple-500"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
