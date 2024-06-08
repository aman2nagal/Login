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
    </>
  );
}

export default LoginFlowWrapper;
