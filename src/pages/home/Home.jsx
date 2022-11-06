import Feed from "./feed/Feed";
import Sidebar from "./sidebar/Sidebar";
import Widgets from "./Widgets";
import { ToastContainer } from "react-toastify";

export default function Home({ user }) {
  return (
    <>
      <main className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar user={user} />
        <Feed user={user} className="w-[800px]" />
        <Widgets />
      </main>
      <ToastContainer theme="dark" />
    </>
  );
}
