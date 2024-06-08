import Link from "next/link";
import { Button } from "@cpm/package-manager";
import React from "react";

import LoginFlowWrapper from "@/components/Login/common/LoginFlowWrapper";

import { useDispatch } from "react-redux";

import { useRouter } from "next/router";
import * as Yup from "yup";
import { useLoginMutation } from "@/slices/auth";
import { Field, Form, Formik } from "formik";
import LoginSvg from "./images/LoginSvg";
import { Textbox } from "@cpm/package-manager";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import LeftImg from "./common/LeftImg";
import GoogleImg from "./common/GoogleImg";
import FacebookImg from "./common/Facebook";
import AppleImg from "./common/Apple";
import RightImg from "./common/RightImg";

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("You've entered an invalid e-mail.")
    .required("Email is required"),
  password: Yup.string().required("Please enter your password"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

  const redirectToHome = (data) => {
    const roleId =
      data?.authResult?.user?.userLegalEntities?.[0]?.role?.valueId;
    const subscriptionId =
      data?.authResult?.user?.userLegalEntities?.[0].subscriptionId;
    const redirectionLink =
      data?.authResult?.user?.userLegalEntities?.[0].website;
    const token = data?.authResult?.token;

    if (data) {
      router.push("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  const handleSubmit = (values, { setFieldError }) => {
    const payload = {
      password: values.password,
      rememberMe: true,
      userName: values.email,
    };
    login(payload)
      .unwrap()
      .then((data) => {
        if (data?.statusCode == 400) {
          if (data?.statusMessage.includes("Email")) {
            setFieldError("email", data?.statusMessage);
          } else {
            setFieldError("password", data?.statusMessage);
          }
        } else if (data?.statusCode == 200) {
          redirectToHome(data);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Server ERROR</a>',
        });
        console.log(error);
      });
  };

  // }, [])

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 bg-[#ECBC76] flex items-center justify-center relative">
          <LeftImg />
          <div className="absolute top-4 left-4 text-lg font-bold text-[#CA5821]">
            Your Logo
          </div>
        </div>
        <div className="absolute z-10 inset-0 flex items-center justify-center">
          <div className="max-w-md w-full p-8 rounded-3xl shadow-lg bg-white">
            <div className="flex">
              <div className="w-3/4">
                <h2 className="text-[20px] text-black mt-1">
                  Welcome to Lorem
                </h2>
                <h1 className="text-[55px] font-medium text-black">Sign in</h1>
              </div>
              <div className="w-1/4">
                <span className="text-sm text-[#8D8D8D] hover:text-gray-800">
                  No Account?{" "}
                </span>
                <a href="/register" className="text-[#B87514]">
                  Sign up
                </a>
              </div>
            </div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={ValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values, setFieldError }) => (
                <>
                  <Form className=" mt-8 ">
                    <div className="mb-6">
                      <label htmlFor="username" className="block text-base">
                        Enter your username or email address
                      </label>
                      <Field
                        type="text"
                        id="userName"
                        name="userName"
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-[#808080]"
                        placeholder="Username or email address"
                      />
                      {errors && (
                        <div className="text-status-danger-800 text-left text-xs mt-1 pl-1">
                          {errors?.email && touched?.email && errors?.email}
                        </div>
                      )}
                      {console.log(errors?.email, "asdasdasd")}
                    </div>
                    <div className="mb-6 relative">
                      <label htmlFor="password" className="block text-base">
                        Enter your Password
                      </label>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-[#808080]"
                        placeholder="Password"
                      />
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
                    <div className="flex items-center justify-center my-6">
                      <span className="text-gray-500">OR</span>
                    </div>
                    <div className="grid grid-cols-6 gap-3">
                      <button
                        type="button"
                        className="w-full py-3 px-4 h-[55px] bg-[#FFF4E3] text-[#B87514] rounded-lg shadow-sm flex items-center justify-center space-x-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 col-span-4"
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
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
        <div className="w-1/2 bg-white flex items-center justify-center relative">
          <RightImg />
        </div>
      </div>
    </>
  );
};

export default Login;
