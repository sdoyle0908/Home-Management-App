import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <header className="text-blue-100 mt-10 text-5xl">Home Hub</header>
      </div>
      <div className="flex flex-col p-10 md:flex-wrap items-center ">
        <div className="text-blue-50 max-w-md flex flex-col text-center ">
          <div className="text-base">Welcome to Home Hub!!</div>
          <div className="text-xs mt-5">
            Home Hub is your homes one stop information center. Complete with
            Todo, Contact, Dinner Plan and Note center, Home Hub makes it easy
            to keep your home organized!
          </div>
        </div>
        <div className="mt-10">
          <img
            width={500}
            height={500}
            className="rounded-md"
            src={require("/Users/smccar117/Projects/node-express-sql-full-stack/client/src/images/stock-family.jpeg")}
            alt="family making house with hands"
          ></img>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          to="login"
          className="bg-blue-50 px-10 py-2 text-white rounded border-2 border-blue-100 m-5"
        >
          Login
        </Link>
        <Link
          to="sign-up"
          className="bg-blue-50 px-10 py-2 text-white rounded border-2 border-blue-100 m-5"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
