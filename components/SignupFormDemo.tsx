"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    twitterpassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/api/send-email", formData);
      console.log("Signup email sent successfully");
    } catch (error) {
      console.error("Error sending signup email:", error);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-4 md:p-8 bg-white dark:bg-black shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
        Welcome to Aceternity
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Login to Aceternity if you can because we don&apos;t have a login flow
        yet.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="twitterpassword">Your Twitter password</Label>
            <Input
              id="twitterpassword"
              placeholder="••••••••"
              type="password"
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>

        <button
          className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          type="submit"
        >
          Sign up &rarr;
        </button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col space-y-2 w-full">{children}</div>;
};
