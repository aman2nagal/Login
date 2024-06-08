import React from "react";
import LogoSVG from "@/components/Login/common/LogoSVG";
import RegistrationCard from "@/components/Login/common/RegistrationCard";
import {
  RegistraionSVG1,
  RegistraionSVG2,
  RegistraionSVG3,
  RegistraionSVG4,
  RegistraionSVG5,
} from "@/components/Login/images/RegistraionSVG";
import { useRouter } from "next/router";

const RegisterationTypesData = [
  {
    url: "mau",
    type: "pm",
    title: "PropVIVO User Login",
    message: "Only for Propvivo staff members.",
    svg: <RegistraionSVG1 />,
  },
  {
    title: "Self Manged",
    message: "Empowering associations for independent management.",
    svg: <RegistraionSVG3 />,
  },
  {
    url: "mau",
    title: "Association User",
    message:
      "New additions managed by Propvivo, including homeowners and committee members.",
    svg: <RegistraionSVG5 />,
  },
  {
    title: "Vendor Portal",
    message: "Welcoming new vendors interested in collaborating with Propvivo.",
    svg: <RegistraionSVG4 />,
  },
  {
    title: "Freelanced Property Manager",
    message: "Offering freelancers a path for career growth with Propvivo.",
    svg: <RegistraionSVG2 />,
  },
];
const RegisterationTypes = () => {
  const router = useRouter();

  const handleNavigate = (url, type) => {
    if (type !== undefined) {
      router.push(
        `${process.env.NEXT_PUBLIC_APP_REGISTRTION}/${url}?userType=${type}`
      );
    } else {
      router.push(`${process.env.NEXT_PUBLIC_APP_REGISTRTION}/${url}`);
    }
  };

  return (
    <div className="font-poppins" id="RegistrationWrapper2Div">
      <div
        className="sticky top-0 flex justify-between items-center px-4 md:pl-11 md:pr-16 h-20 w-full"
        style={{
          background:
            "linear-gradient(126deg, rgba(220, 220, 220, 0.30) 3.84%, rgba(255, 255, 255, 0.10) 30.14%)",
          backdropFilter: "blur(100px)",
        }}
      >
        <span>
          <LogoSVG />
        </span>
        <div className=" flex justify-end items-center font-poppins opacity-100 z-50 text-md sm:text-xl">
          <span className="text-trustgreen">Trust . </span>
          <span className="text-transparencyyellow">Transparency . </span>
          <span className="text-excellenceBlue">Excellence</span>
        </div>
      </div>

      <div
        className="flex flex-col justify-center h-full font-poppins "
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <div className="flex flex-col justify-start  items-center p-4 w-full">
          <span className="text-black font-poppins text-3xl font-medium">
            Our Products & Services.
          </span>
          <span className="text-sm text-grayText font-normal">
            Please select one of the following options to proceed.
          </span>
        </div>
        <div className="flex flex-wrap mx-2 sm:gap-x-28 gap-y-3 h-full items-center justify-center my-5">
          {RegisterationTypesData.map((data) => (
            <RegistrationCard
              key={data.title}
              svg={data.svg}
              title={data.title}
              message={data.message}
              btnClick={() => handleNavigate(data.url, data.type)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisterationTypes;
