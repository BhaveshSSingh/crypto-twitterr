import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { BsArrowLeft, BsThreeDots } from "react-icons/bs";
import Moment from "react-moment";
import { db } from "../firebase";
import { Comment } from "./home/feed/post/Comment";
import DeleteRetweet from "./home/feed/post/DeleteRetweet";
import { Like } from "./home/feed/post/Like";
import Post from "./home/feed/post/Post";

export default function PostPage({ user, id, Home, postPage, post }) {
  // const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

  // useEffect(
  //   () =>
  //     onSnapshot(doc(db, "posts", id), (snapshot) => {
  //       setPost(snapshot.data());
  //     }),
  //   [db]
  // );

  // useEffect(
  //   () =>
  //     onSnapshot(
  //       query(
  //         collection(db, "posts", id, "comments"),
  //         orderBy("timestamp", "desc")
  //       ),
  //       (snapshot) => setComments(snapshot.docs)
  //     ),
  //   [db, id]
  // );

  return (
    <>
      <div className="">
        {/*  */}
        <Post user={user} id={id} post={post} postPage />
        {comments.length > 0 && (
          <div className="pb-72">
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                id={comment.id}
                comment={comment.data()}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
