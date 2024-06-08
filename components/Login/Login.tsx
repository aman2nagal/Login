import Link from "next/link";
import { Button } from "@cpm/package-manager";
import PMC1 from "@/components/Login/images/PMC1";
import LoginFlowWrapper from "@/components/Login/common/LoginFlowWrapper";
import LogoSVG from "@/components/Login/common/LogoSVG";
import { useDispatch } from "react-redux";
import { setLoginState } from "@/slices/auth/loginStates";
import { Router, useRouter } from "next/router";
import * as Yup from "yup";
import { useLoginMutation } from "@/slices/auth";
import { Field, Form, Formik } from "formik";
import LoginSvg from "./images/LoginSvg";
import { Textbox } from "@cpm/package-manager";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { myToast } from "../PVToast";
import jwt from "jsonwebtoken";
import { Cookies, getCookie, setCookie } from "typescript-cookie";
import axios from "axios";
import Swal from "sweetalert2"

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("You've entered an invalid e-mail.")
    .required("Email is required"),
  password: Yup.string().required("Please enter your password"),
  // .matches(
  //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //   "Password must contain 8-20 characters with uppercase and lowercase, letters, numbers and symbols"
  // ),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

  const redirectToHome = (data) => {
    const roleId = data?.authResult?.user?.userLegalEntities?.[0]?.role?.valueId;
    const subscriptionId = data?.authResult?.user?.userLegalEntities?.[0].subscriptionId;
    const redirectionLink = data?.authResult?.user?.userLegalEntities?.[0].website;
    const token = data?.authResult?.token;
    if (subscriptionId && roleId && redirectionLink && token) {

      // const urlWithToken = `${redirectionLink}/?token=${token}&subscriptionId=${subscriptionId}&roleId=${roleId}`;
      const urlWithToken = `http://localhost:8008/?token=${token}&subscriptionId=${subscriptionId}&roleId=${roleId}`;
      router.replace(urlWithToken);
    } else { 
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
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
          if(data?.statusMessage.includes("Email")){
            setFieldError("email", data?.statusMessage);
          }else{
            setFieldError("password", data?.statusMessage);
          }
        } else if (data?.statusCode == 200) {
          redirectToHome(data)
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Server ERROR</a>'
        });
        console.log(error);
      });
  };

  // useEffect(() => {
  //   const AUTH_TOKEN = getCookie('authToken');
  //   const REDIRECT_URL = getCookie('redirectUrl');
  //   if (AUTH_TOKEN) {
  //     const decodedToken = jwt.decode(AUTH_TOKEN, { complete: true });
  //     const expirationTime = decodedToken?.payload?.exp;
  //     if (expirationTime && expirationTime > Math.floor(Date.now() / 1000)) {
  //       const urlWithToken = `http://localhost:8000/?token=${AUTH_TOKEN}`;
  //       // const urlWithToken = `${REDIRECT_URL}?token=${AUTH_TOKEN}`;
  //       router.replace(urlWithToken);
  //     } else {
  //       Cookies.remove("authToken")
  //       Cookies.remove("redirectUrl")
  //       router.replace(http://localhost:3000/login);
  //       console.error('Token has expired.');
  //     }
  //   }
  // }, [])

  return (
    <>
      <LoginFlowWrapper
        svg={<LoginSvg />}
        message={"Access Your Space: Login to your property portal."}
      >
        <div className="h-full w-full flex  flex-col items-center justify-center">
          <div className="overflow-hidden flex flex-col md:py-6 border border-BorderBlue justify-center items-center gap-4 md:gap-6 h-full md:h-[80%] w-[100%] md:w-[70%] rounded-2xl px-7 lg:px-12 md:mr-[16%] md:ml-[10.5%]">
            <div className="w-full flex flex-col gap-2">
              <div className=" hidden sm:block ">
                <LogoSVG />
              </div>
              <h1 className="text-2xl font-medium ">Hello ! Welcome Back</h1>
              <h2 className="text-sm text-[#787878] font-medium">
                Login using your credentials
              </h2>
            </div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={ValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values, setFieldError }) => (
                <>
                  <Form className=" w-full ">
                    <div className="mb-2">
                      <Textbox
                        name="email"
                        FormikField={Field}
                        label="E-mail"
                        type="email"
                        placeholder="Your Email address"
                        error={errors.email && touched.email && errors.email}
                      />
                    </div>
                    <Textbox
                      name="password"
                      FormikField={Field}
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      placeholder="**********"
                      icon={
                        <div onClick={() => setShowPassword(!showPassword)}>
                          {showPassword == true ? (
                            <AiFillEye size={20} color="#9CA3AF" />
                          ) : (
                            <AiFillEyeInvisible size={20} color="#9CA3AF" />
                          )}
                        </div>
                      }
                      error={
                        errors.password && touched.password && errors.password
                      }
                    />
                    <div className="block text-sm text-pvBlue hover:underline font-medium text-right">
                      <Link href="/forgot-password">Forgot Password?</Link>
                    </div>
                    <Button
                      isLoading={isLoading}
                      type="submit"
                      className="w-full my-5"
                    >
                      {isLoading ? "Logging in .." : "Login"}
                    </Button>
                    <div className="text-center text-sm">
                      New User ?{" "}
                      <span className="text-pvBlue  cursor-pointer hover:underline">
                        <Link href="/register">Register Here</Link>
                      </span>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </LoginFlowWrapper>
    </>
  );
};

export default Login;
