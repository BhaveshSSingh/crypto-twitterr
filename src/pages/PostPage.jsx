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

export default function PostPage({ id }) {
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

  // console.log((posts?.username)(posts?.text));
  useEffect(
    () =>
      onSnapshot(doc(db, "posts", id), (snapshot) => {
        setPost(snapshot.data());
      }),
    [db]
  );

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

  console.log(post.text);
  return (
    <>
      <Post id={id} post={post} postPage />
    </>
  );
}
