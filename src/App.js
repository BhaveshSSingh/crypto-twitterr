import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import { Routes, Route } from "react-router-dom";

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      {/* <Routes> */}
      {/* {user ? ( */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* ) : ( */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* )} */}
      {/* </Routes> */}

      {user ? <Home /> : <Login />}
    </>
  );
}

export default App;
