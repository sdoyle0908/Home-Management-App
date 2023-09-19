import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="text-lg bg-babyBlue text-blue-100 w-screen p-4">
        <div className="flex flex-row justify-between">
          <div>
            <h1>Home Hub</h1>
          </div>
          <div className="flex flex-row justify-end space-x-5 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="sign-up">Sign Up</Link>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}
