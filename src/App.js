import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
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
