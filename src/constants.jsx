const seed = Math.round(Math.random() * 100);
export const SRC = `https://avatars.dicebear.com/api/bottts/${seed}.svg`;

export default function ProfilePic() {
  return (
    <div>
      <img
        className="h-12 w-12 rounded-full xl:mr-2.5   border border-purple-400"
        src={SRC}
        alt="profile pic"
      ></img>
    </div>
  );
}
