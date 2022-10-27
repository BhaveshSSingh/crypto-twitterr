import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  // console.log(user.photoURL);
  return (
    <>
      {/* <Routes>
        {user ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route path="/" element={<Home user={user} />} />
        )}
      </Routes> */}

      {user ? <Home user={user} /> : <Login />}
    </>
  );
}

export default App;
