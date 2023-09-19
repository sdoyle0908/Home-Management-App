import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <main className="font-sans flex flex-col items-center">
      <Navbar />
      <Outlet />
    </main>
  );
}
