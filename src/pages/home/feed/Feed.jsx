import React, { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import Input from "./Input";
import "react-toastify/dist/ReactToastify.css";
import { db, logout } from "../../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Post from "./post/Post";

export default function Feed({ user }) {
  const [posts, setPosts] = useState([]);

  // Retreving the posts

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("time", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
        console.log("useEffect");
      }
    );
    return () => {
      unsubscribe();
    };
  }, [db]);
  return (
    <div className="flex-grow border-l border-r  border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div
        className="
      bg-black opacity-[0.97]
       flex items-center sm:justify-between py-2 px-3 sticky top-0  border-b border-gray-700"
      >
        <h2 className="text-lg sm:text-xl font-bold ">Home</h2>
        <button
          className=" flex items-center justify-center  ml-auto text-white rounded p-1 mr-1"
          onClick={logout}
        >
          Logout <BiLogOut className="m-1" />
        </button>
      </div>
      <Input user={user} />
      {/*Showing  posts */}
      <div className="pb-72">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} user={user} post={post.data()} />
        ))}
      </div>
    </div>
  );
}
