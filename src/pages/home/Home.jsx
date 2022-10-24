import React from "react";
import Feed from "./feed/Feed";
import Sidebar from "./sidebar/Sidebar";
import Widgets from "./Widgets";

export default function Home({ user }) {
  return (
    <>
      <main className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar user={user} />
        <Feed user={user} />
        <Widgets />
        {/* Modal*/}
      </main>
    </>
  );
}
