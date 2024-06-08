import React from "react";
import { Button } from "@cpm/package-manager";
import LogoSVG from "./LogoSVG";

interface LoginFlowWrapper2 {
  svg: React.ReactElement;
  heading?: string;
  subHeading?: string;
  ButtonName?: string;
  click?: () => void;
  message?: string;
  showTagLine?: boolean;
  clickableText?: string;
  variant?: "default" | "secondary";
  buttonIcon?: React.ReactElement;
  messageIcon?: React.ReactElement;
  textClick?: () => void;
  // extraText?:string
}

const LoginFlowWrapper2 = ({
  svg,
  heading,
  subHeading,
  ButtonName,
  click,
  message,
  showTagLine = false,
  clickableText,
  variant = "default",
  buttonIcon,
  messageIcon,
  textClick,
  // extraText
}: LoginFlowWrapper2) => {
  return (
    <div className="font-poppins" id="RegistrationWrapper2Div">
      <div
        className="flex justify-between items-center px-4 md:px-11 h-20 w-full"
      >
        <span>
          <LogoSVG />
        </span>
        {showTagLine && (
          <div className=" flex justify-end items-center font-poppins opacity-100 z-50 text-xl">
            <span className="text-trustgreen">Trust . </span>
            <span className="text-transparencyyellow">Transparency . </span>
            <span className="text-excellenceBlue">Excellence</span>
          </div>
        )}
      </div>

      <div
        className="flex flex-col items-center  justify-center mx-2"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <div className="flex flex-col justify-center items-center p-6  gap-2 border border-pvBlue rounded-3xl w-[100%] md:w-[40%] h-[51%] bg-white ">
          <div>{svg}</div>
          <div className="w-full flex flex-col items-center gap-5  text-center bg-white">
            <div
              className={`font-medium text-xl ${
                heading == "Get Ready!" || heading == "Merging..."
                  ? "text-DarkBlue"
                  : "text-fieldNameColor"
              }`}
            >
              {heading}
            </div>
            <div
              className={`text-sm ${
                heading == "Get Ready!" || heading == "Merging..."
                  ? "text-subHeading"
                  : "text-grayText"
              } text-base`}
            >
              {subHeading}
            </div>
            {ButtonName && (
              <div className="flex justify-center full">
                <Button
                onClick={click}
                variant={variant}
                className="flex gap-2" 
                  >
                     {buttonIcon && <span>{buttonIcon}</span>}
                  {ButtonName}
                  </Button>
              </div>
            )}
            {(message || clickableText || messageIcon) && (
              <div className="flex justify-center items-center text-xs font-medium gap-1">
                {messageIcon && <span>{messageIcon}</span>}
                {message && (
                  <p className="text-grayText text-center">{message}</p>
                )}
                {clickableText && (
                  <p
                    className="text-primaryBlue cursor-pointer text-base"
                    onClick={textClick}
                  >
                    {clickableText}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFlowWrapper2;
