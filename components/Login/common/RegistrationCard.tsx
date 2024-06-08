import React from "react";

const RegistrationCard = ({ svg, title, message, btnClick }) => {
  return (
    <div style={{border:".7px solid #7EB5E4"}} className="flex flex-col w-full sm:w-1/3 lg:w-1/5 rounded-2xl h-[100%] bg-white justify-center items-center">
    {/* <div className="flex flex-col w-[100%] md:w-1/5 rounded-2xl h-[100%] bg-white justify-center items-center"> */}
      <div className="bg-pvBackGroundGray h-1/2 pt-6 w-full box-border flex justify-center  items-center rounded-t-2xl border ">
        {svg}
      </div>
      <div className="flex flex-col justify-around h-[10rem]  w-full p-4 gap-4 items-center text-center border-red-700">
        <div className="flex flex-col gap-2">
        <span className="text-base font-medium text-fieldNameColor">
          {title}
        </span>
        <span className="text-xs text-gray-o-500">{message}</span>
        </div>
        {/* <div className=""> */}
          <button className="py-2 px-6 text-sm border hover:bg-pvBlue border-pvborderRadius font-medium bg-white rounded-full hover:text-white text-pvborderRadius" onClick={btnClick}>
            Register
          </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default RegistrationCard;
