"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "@/app/lib/auth";
import Image from "next/image";
import { useLoading } from "../../../context/loadContext";

export default function Signup() {
  const { loading } = useLoading();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, displayName);
      router.push("/");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleSigninClick = () => {
    router.push("/signin");
  };

  return (
    <div className="min-h-screen flex items-center bg-gray-100">
      <div className="w-1/2 h-screen relative">
        <Image
          src="/images/4307.webp"
          alt="Signup Image"
          layout="fill"
          loading="lazy"
          objectFit="cover"
          objectPosition="right"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-[#262626]">
            New Here ??
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#262626]">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#dd7a29]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#262626]">Email</label>
              <input
                type="email"
                placeholder="Enter Email Address"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#dd7a29]"
              />
            </div>
            <div className="mb-6">
              <label className="block text-[#262626]">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#dd7a29]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#12547c] text-white py-2 px-4 rounded-lg hover:opacity-85 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <button
              onClick={handleSigninClick}
              className="text-[#12547c] hover:underline focus:outline-none"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
      {loading && <Loading />}
    </div>
  );
}
