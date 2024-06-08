import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RightImg from "@/components/Login/common/RightImg";
import LeftImg from "@/components/Login/common/LeftImg";
import { useDispatch, useSelector } from "react-redux";
import { authstatus, login } from "@/stores/auth";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("You've entered an invalid e-mail.")
    .required("Email is required"),
  password: Yup.string().required("Please enter your password"),
  username: Yup.string().required("Please enter your User Name"),
  number: Yup.string().required("Please enter your Contact Number"),
});

const RegisterationTypes = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector(authstatus); // renamed to authStatus
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);

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

  return (
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
            <div className="w-8/12">
              <h2 className="text-base md:text-[20px] text-black mt-1">
                Welcome to Lorem
              </h2>
              <h1 className="text-[40px] md:text-[55px] font-medium text-black">
                Sign up
              </h1>
            </div>
            <div className="w-1/3">
              <span className="text-sm text-[#8D8D8D] hover:text-gray-800">
                Have an Account?{" "}
              </span>
              <h1
                onClick={() => router.push("/login")}
                className="text-[#E48700] text-sm cursor-pointer"
              >
                Sign in
              </h1>
            </div>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              username: "",
              number: "",
            }}
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
                          htmlFor="username"
                          className="block text-sm md:text-base"
                        >
                          Enter your username or email address
                        </label>
                        <Field
                          type="text"
                          id="email"
                          name="email"
                          className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-[#808080] h-14"
                          placeholder="Username or email address"
                        />
                        {errors && (
                          <div className="text-status-danger-800 text-left text-xs mt-1 pl-1">
                            {errors?.email && touched?.email && errors?.email}
                          </div>
                        )}
                      </div>
                      <div className="mb-6 flex gap-4">
                        <div>
                          <label
                            htmlFor="username"
                            className="block text-sm md:text-base"
                          >
                            User name
                          </label>
                          <Field
                            type="text"
                            id="username"
                            name="username"
                            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-[#808080] h-14"
                            placeholder="Username"
                          />
                          {errors && (
                            <div className="text-status-danger-800 text-left text-xs mt-1 pl-1">
                              {errors?.username &&
                                touched?.username &&
                                errors?.username}
                            </div>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="number"
                            className="block text-sm md:text-base"
                          >
                            Contact Number
                          </label>
                          <Field
                            type="number"
                            id="number"
                            name="number"
                            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-[#808080] h-14"
                            placeholder="Contact Number"
                          />
                          {errors && (
                            <div className="text-status-danger-800 text-left text-xs mt-1 pl-1">
                              {errors?.number &&
                                touched?.number &&
                                errors?.number}
                            </div>
                          )}
                        </div>
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
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full py-3 px-4 bg-[#E48700] hover:bg-[#e5921d] text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e5921d]"
                        >
                          Sign in
                        </button>
                      </div>
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
  );
};

export default RegisterationTypes;
