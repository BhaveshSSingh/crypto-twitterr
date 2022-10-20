import { signInWithPopup } from "firebase/auth";
import logo from "../../assets/logo.svg";
import { auth, provider } from "../../firebase";

export default function Login() {
  const signInUser = () => {
    signInWithPopup(auth, provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="grid place-items-center min-h-screen	">
      <div className="object-contain h-40">
        <img src={logo} alt="logo" />
      </div>
      <button
        className="w-80 h-10 font-extrabold hover:bg-black hover:text-purple-500 rounded-lg"
        onClick={signInUser}
      >
        Sign in
      </button>
    </div>
  );
}
