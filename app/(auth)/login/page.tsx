"use client";

import Image from "next/image";
import Link from "next/link";
import { RiCellphoneFill } from "react-icons/ri";

import phone from "@/app/assets/images/phone.jpg";

interface pageProps {}

const LoginPage: React.FC<pageProps> = ({}) => {
	return (
		<main className="flex justify-center h-screen overflow-hidden bg-white sm:bg-indigo-600">
			<div className="z-10 flex-1 max-w-sm p-4 bg-white sm:auth-shadow">

        {/* logo */}
        <div className="flex items-center">
          <RiCellphoneFill size={36} className="text-indigo-600" />
          <span className="text-3xl font-light text-indigo-600">My</span>
          <span className="text-3xl font-medium text-indigo-600">Mobile</span>
        </div>

        {/* form */}
				<div className="flex flex-col h-full gap-8 pt-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium">Sign into your account</h1>
            <div className="flex gap-2 text-sm">
              <span className="font-light text-neutral-500">Not a member?</span>
              <Link href="/register" className="font-medium text-indigo-600">
                Register now
              </Link>
            </div>
          </div>
          <form action="" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="email">
                Email address
              </label>
              <input
                className="p-2 border rounded-md shadow-sm border-neutral-300"
                type="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                className="p-2 border rounded-md shadow-sm border-neutral-300"
                type="password"
                id="password"
              />
            </div>
            <div className="flex justify-between text-sm">
              <div className="flex gap-2">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="font-light">
                  Remember
                </label>
              </div>
              <Link href="/reset" className="font-medium text-indigo-600">
                Forgot password?
              </Link>
            </div>
            <button className="p-2 text-sm font-medium text-white bg-indigo-600 rounded-md">
              Sign in
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <hr className="flex-1" />
              <span className="text-sm">Or continue with</span>
              <hr className="flex-1" />
            </div>
            <button className="flex items-center justify-center gap-1 p-2 text-sm font-medium text-white bg-black rounded-md">
              <svg
                        className="inline-block w-5 h-5 mr-2"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              GitHub
            </button>
          </div>
        </div>
			</div>
      
      {/* hero */}
      <div className="relative flex-1 hidden md:block">
        <Image src={phone} fill alt="" className="object-cover scale-125" quality={100} priority placeholder="blur" aria-hidden />
      </div>
		</main>
	);
};

export default LoginPage;
