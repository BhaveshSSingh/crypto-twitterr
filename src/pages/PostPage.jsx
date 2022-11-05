import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

import Post from "./home/feed/post/Post";

export default function PostPage({ id, post, user, Home }) {
  // const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

  // console.log((posts?.username)(posts?.text));
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

  console.log(post.text);
  return (
    <>
      <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black">
        <div
          className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
          onClick={Home}
        >
          <BsArrowLeft size={22} />
        </div>
        Tweet
      </div>

      {post.map((post) => (
        <Post key={post.id} id={post.id} user={user} post={post.data()} />
      ))}
    </>
  );
}
