import React from "react";
import LogoSVG from "./LogoSVG";

interface LoginFlowWrapper {
  showCountry?: boolean;
  svg: any;
  message: string;
  children: any;
}

function LoginFlowWrapper({ showCountry = true, svg, message, children }) {

  return (
    <>
      <div className="fixed" id="topDiv">
        <div className="hidden md:flex justify-between items-center px-4 md:px-11 h-20 w-full">
          <LogoSVG />
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-screen">
        {/* <div className="flex h-screen"> */}
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
          // style={{ height: `cal(100%-${height}px)` }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default LoginFlowWrapper;
