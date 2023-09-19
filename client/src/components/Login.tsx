import React from "react";
import { useForm, Form } from "react-hook-form";
import { z } from "zod";

export default function Login() {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5).max(20),
  });

  return (
    <div className="bg-blue-50 py-10 px-5 mt-10 w-full max-w-[300px] md:max-w-[500px] lg:max-w-[700px] ">
      <div className="text-center text-3xl mb-10 text-white">Login</div>
      <form className="flex flex-col">
        <label htmlFor="email" className="text-white mb-2">
          Email:
        </label>
        <input type="text" name="email" className="mb-5" />
        <label htmlFor="password" className="text-white mb-2">
          Password:
        </label>
        <input type="text" name="password" />
        <input type="submit" className="mt-10 bg-babyBlue p-2" />
      </form>
    </div>
  );
}
