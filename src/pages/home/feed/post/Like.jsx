import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../../firebase";
import { toast } from "react-toastify";

export function Like({ id, user }) {
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
      toast("Liked ❤️");
    }
  };
  return (
    <div className="flex items-center space-x-1 group" onClick={likePost}>
      <div className="icon group-hover:bg-pink-600/10 ">
        {liked ? (
          <AiFillHeart size={22} className="text-pink-500" />
        ) : (
          <AiOutlineHeart size={22} className={` hover:text-pink-500  `} />
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
  );
}
