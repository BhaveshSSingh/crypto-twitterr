const seed = Math.round(Math.random() * 100);
export const SRC = `https://avatars.dicebear.com/api/bottts/${seed}.svg`;

export default function ProfilePic() {
  return (
    <>
      <img className="h-10 w-10 rounded-full xl:mr-2.5" src={SRC}></img>
    </>
  );
}
