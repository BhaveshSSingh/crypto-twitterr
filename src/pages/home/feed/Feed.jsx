import React, { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import Input from "./Input";
import "react-toastify/dist/ReactToastify.css";
import { db, logout } from "../../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Post from "./post/Post";
import { Route, Routes } from "react-router-dom";
import Explore from "./Explore";
import PostPage from "../../PostPage";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export default function Feed({ user }) {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

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
  console.log(posts);
  // for the Arrow Icons in pages
  function redirectHome() {
    navigate(`/`);
  }

  return (
    <div className="flex-grow border-l border-r  border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      {/* <Outlet /> */}

      {/* Main Feed */}

      <Routes>
        <Route
          path="/"
          element={
            <>
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
              <div className="pb-72">
                {posts.map((post) => (
                  <Post
                    key={post.id}
                    id={post.id}
                    user={user}
                    post={post.data()}
                  />
                ))}
              </div>
            </>
          }
        />

        <Route
          path="/post/:id"
          element={
            <>
              <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black">
                <div
                  className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
                  onClick={redirectHome}
                >
                  <BsArrowLeft size={22} />
                </div>
                Tweet
              </div>
              {posts.map((post) => (
                <PostPage
                  key={post.id}
                  id={post.id}
                  user={user}
                  post={post.data()}
                  postPage
                  Home={redirectHome}
                />
              ))}
              {/* <Post /> */}
            </>
          }
        />

        <Route path="/explore" element={<Explore Home={redirectHome} />} />

        {/* BookMarks */}

        {/* <Route path={"bookmarks"} element={<BookMark />} /> */}

        {/* Follow People */}

        {/* <Route path="/follows" element={<Follow/>} /> */}
      </Routes>
    </div>
  );
}
