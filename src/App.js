import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  console.log(user.photoURL);
  return (
    <>
      {user ? (
        <>
          <Home user={user} />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
