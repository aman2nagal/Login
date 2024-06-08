import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";
import * as Yup from "yup";

import { Field, Form, Formik } from "formik";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";

import LeftImg from "./common/LeftImg";
import GoogleImg from "./common/GoogleImg";
import FacebookImg from "./common/Facebook";
import AppleImg from "./common/Apple";
import RightImg from "./common/RightImg";
import { authstatus, login } from "@/stores/auth";

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("You've entered an invalid e-mail.")
    .required("Email is required"),
  password: Yup.string().required("Please enter your password"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  const authStatus = useSelector(authstatus); // renamed to authStatus
  const router = useRouter();

  // redirect to / if local storage have value
  useEffect(() => {
    const authState = localStorage.getItem("auth");
    if (authState == "true") router.push("/");
  }, []);

  const handleSubmit = (values, { setFieldError }) => {
    if (values) {
      dispatch(login());
      let authState;
      if (typeof window !== "undefined") {
        authState = localStorage.setItem("auth", "true");
        router.push("/");
      }
    }
  };

  // }, [])

  return (
    <>
      <div className="flex h-screen">
        <div className="w-full md:w-1/2 bg-orange-100 flex items-center justify-center relative">
          <div className="hidden md:inline-block">
            <LeftImg />
          </div>
          <div className="absolute top-4 left-4 text-lg font-bold text-orange-400">
            Your Logo
          </div>
        </div>
        <div className="absolute z-10 inset-0 flex items-center justify-center p-4 md:p-0">
          <div className="max-w-md w-full p-6 md:p-8 rounded-3xl shadow-wrapShadow bg-white">
            <div className="flex">
              <div className="w-8/12 md:w-3/4">
                <h2 className="text-base md:text-[20px] text-black mt-1">
                  Welcome to Lorem
                </h2>
                <h1 className="text-[40px] md:text-[55px] font-medium text-black">
                  Sign in
                </h1>
              </div>
              <div className="w-1/3 md:w-1/4">
                <span className="text-sm text-[#8D8D8D] hover:text-gray-800">
                  No Account?{" "}
                </span>
                <h1
                  onClick={() => router.push("/signup")}
                  className="text-[#E48700] text-sm cursor-pointer"
                >
                  Sign up
                </h1>
              </div>
            </div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={ValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values, setFieldError }) => (
                <>
                  <Form className=" mt-8">
                    <div className="flex flex-col-reverse md:flex-col">
                      <div className="flex flex-col mt-7 md:mt-0">
                        <div className="mb-6">
                          <label
                            htmlFor="email"
                            className="block text-sm md:text-base"
                          >
                            Enter your email or email address
                          </label>
                          <Field
                            type="text"
                            id="email"
                            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-[#808080] h-14"
                            name="email"
                            placeholder="email or email address"
                          />
                          {errors && (
                            <div className="text-status-danger-800 text-left text-xs mt-1 pl-1">
                              {errors?.email && touched?.email && errors?.email}
                            </div>
                          )}
                        </div>
                        <div className="mb-6 relative">
                          <label
                            htmlFor="password"
                            className="block text-sm md:text-base"
                          >
                            Enter your Password
                          </label>
                          <Field
                            type={`${showPassword ? "password" : "text"}`}
                            id="password"
                            name="password"
                            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-[#808080] h-14"
                            placeholder="Password"
                          />
                          <div
                            className="absolute top-12 right-3"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword == true ? (
                              <AiFillEye size={20} color="#9CA3AF" />
                            ) : (
                              <AiFillEyeInvisible size={20} color="#9CA3AF" />
                            )}
                          </div>
                          {errors && (
                            <div className="text-status-danger-800 text-left text-xs mt-1 pl-1">
                              {errors?.password &&
                                touched?.password &&
                                errors?.password}
                            </div>
                          )}
                          <div className="flex items-center justify-end mt-4">
                            <a href="#" className="text-[13px] text-[#AD3113]">
                              Forgot Password?
                            </a>
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
                        <div className="hidden md:flex items-center justify-center my-6">
                          <span className="text-gray-500">OR</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-6 gap-3">
                        <button
                          type="button"
                          className="w-full py-3 px-4 h-[55px] bg-[#FFF4E3] text-[#B87514] rounded-lg shadow-sm flex items-center justify-center space-x-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 col-span-4 text-xs md:text-base"
                        >
                          <GoogleImg />
                          <span>Sign in with Google</span>
                        </button>
                        <button className="w-full h-[55px] bg-[#F6F6F6] shadow-sm flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg col-span-1">
                          <FacebookImg />
                        </button>
                        <button className="w-full h-[55px] bg-[#F6F6F6] shadow-sm flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg col-span-1">
                          <AppleImg />
                        </button>
                      </div>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
        <div className="w-1/2 bg-white hidden md:flex items-center justify-center relative">
          <RightImg />
        </div>
      </div>
    </>
  );
};

export default Login;
