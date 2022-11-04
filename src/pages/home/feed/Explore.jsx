import { BsArrowLeft } from "react-icons/bs";
import Post from "./post/Post";

function Explore({ Home, post, id, user }) {
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
          Explore
        </div>
      </div>
      hey
      {post.map((posts) => {
        <Post />;
      })}
    </>
  );
}

export default Explore;
