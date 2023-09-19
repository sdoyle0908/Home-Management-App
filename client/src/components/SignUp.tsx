import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionFunction, Form, redirect } from "react-router-dom";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const firstName = formData.get("firstName");
  console.log("firstName", firstName);

  const submission = {
    first_name: formData.get("firstName"),
    last_name: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log("sm - submission", submission);

  await fetch("http://localhost:5001/users", {
    method: "POST",
    body: JSON.stringify(submission),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/login");
};

export default function SignUp() {
  const signupSchema = z
    .object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const { register, formState } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const { errors } = formState;

  console.log("sm", errors);

  return (
    <div className="bg-blue-50 py-10 px-5 mt-10 w-full max-w-[300px] md:max-w-[500px] lg:max-w-[700px] ">
      <div className="text-center text-3xl mb-10 text-white">Sign Up</div>
      <Form method="post" className="flex flex-col">
        <label htmlFor="firstName" className="text-white mb-2">
          First Name:
        </label>
        <input type="text" className="mb-5" {...register("firstName")} />
        <label htmlFor="lastName" className="text-white mb-2">
          Last Name:
        </label>
        <input type="text" className="mb-5" {...register("lastName")} />
        <label htmlFor="email" className="text-white mb-2">
          Email:
        </label>
        <input type="text" className="mb-5" {...register("email")} />
        <label htmlFor="password" className="text-white mb-2">
          Password:
        </label>
        <input type="text" className="mb-5" {...register("password")} />
        <label htmlFor="confirmPassword" className="text-white mb-2">
          Confirm Password:
        </label>
        <input type="text" {...register("confirmPassword")} />
        <input type="submit" className="mt-10 bg-babyBlue p-2" />
      </Form>
    </div>
  );
}
