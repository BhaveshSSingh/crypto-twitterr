import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

export default function ProfilePic() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <img
        className="h-12 w-12 rounded-full xl:mr-2.5   "
        src={user.photoURL}
        alt="profile pic"
      ></img>
    </div>
  );
}
