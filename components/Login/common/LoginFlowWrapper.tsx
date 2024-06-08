import React from "react";
import LogoSVG from "./LogoSVG";
import LeftImg from "./LeftImg";
import RightImg from "./RightImg";
import GoogleImg from "./GoogleImg";
import FacebookImg from "./Facebook";
import AppleImg from "./Apple";

interface LoginFlowWrapper {
  showCountry?: boolean;
  svg: any;
  message: string;
  children: any;
}

function LoginFlowWrapper({ showCountry = true, svg, message, children }) {

  return (
    <>
      {/* <div className="fixed" id="topDiv">
        <div className="hidden md:flex justify-between items-center px-4 md:px-11 h-20 w-full">
          <LogoSVG />
        </div>
      </div> */}

      <div className="flex h-screen">
      <div className="w-1/2 bg-[#ECBC76] flex items-center justify-center relative">
        <LeftImg />
        <div className="absolute top-4 left-4 text-lg font-bold text-[#CA5821]">Your Logo</div>
      </div>
      <div className="absolute z-10 inset-0 flex items-center justify-center">
        <div className="max-w-md w-full p-8 rounded-3xl shadow-lg bg-white">
          <div className="flex">
            <div className="w-3/4">
              <h2 className="text-[20px] text-black mt-1">Welcome to Lorem</h2>
              <h1 className="text-[55px] font-medium text-black">Sign in</h1>
            </div>
            <div className="w-1/4">
              <span className="text-sm text-[#8D8D8D] hover:text-gray-800">No Account? </span>
              <a href="#" className="text-[#B87514]">Sign up</a>
            </div>
            
          </div>
          <form className="mt-8">
            <div className="mb-6">
              <label htmlFor="username" className="block text-base">
                Enter your username or email address
              </label>
              <input
                type="text"
                id="username"
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-[#808080]"
                placeholder="Username or email address"
              />
            </div>
            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-base">
                Enter your Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-[#808080]"
                placeholder="Password"
              />
              <div className="flex items-center justify-end mt-4">
                <a href="#" className="text-[13px] text-[#AD3113]">Forgot Password?</a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#E48700] hover:bg-[#e5921d] text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e5921d]"
              >
                Sign in
              </button>
            </div>
            <div className="flex items-center justify-center my-6">
              <span className="text-gray-500">OR</span>
            </div>
            <div className="grid grid-cols-6 gap-3">
              <button
                type="button"
                className="w-full py-3 px-4 h-[55px] bg-[#FFF4E3] text-[#B87514] rounded-lg shadow-sm flex items-center justify-center space-x-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 col-span-4"
              >
                <GoogleImg/>
                <span>Sign in with Google</span>
              </button>
                <button className="w-full h-[55px] bg-[#F6F6F6] shadow-sm flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg col-span-1">
                  <FacebookImg />
                </button>
                <button className="w-full h-[55px] bg-[#F6F6F6] shadow-sm flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg col-span-1">
                  <AppleImg />  
                </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-white flex items-center justify-center relative">
        <RightImg />
      </div>
    </div>
    
      {/* <div className="flex flex-col md:flex-row h-screen">
        <div className=" md:flex items-center justify-center h-[35vh]  md:h-full w-full md:w-[54%]  flex-col gap-12 py-4 md:py-28 px-4 md:px-16 divBg">
          <div className="flex justify-center items-center font-poppins opacity-100 z-50 relative text-m md:text-xl">
            <span className="text-trustgreen">Trust . </span>
            <span className="text-transparencyyellow">Transparency . </span>
            <span className="text-excellenceBlue">Excellence</span>
          </div>
          <div className="h-[20vh] md:h-[50vh]">{svg}</div>
          <div className="text-DarkBlue text-m md:text-xl px-4 md:px-20 text-center">
            {message}
          </div>
        </div>
        <div
          className="h-[65vh] md:h-full w-full md:w-[46%] max-sm:block overflow-y-auto  flex flex-col items-center "
        >
          {children}
        </div>
      </div> */}
    </>
  );
}

export default LoginFlowWrapper;
