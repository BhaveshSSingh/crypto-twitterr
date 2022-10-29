import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

export default function ProfilePic() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <img
        className="h-11 w-11 rounded-full xl:mr-2.5   "
        src={
          user.photoURL
            ? user?.photoURL
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBCVC-ISKIyOp_8TIJvtrN0EmZEWF5RxHew&usqp=CAU"
        }
        alt="profile pic"
      ></img>
    </div>
  );
}
