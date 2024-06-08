import { Field, Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import * as Yup from "yup";
import toast from "react-hot-toast";
import { Button, Textbox } from "@cpm/package-manager";
import LoginFlowWrapper from "./common/LoginFlowWrapper";
import PMC2 from "./images/PMC2";
import { setLoginState } from "@/slices/auth/loginStates";
import Link from "next/link";

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("You've entered an invalid e-mail.")
    .max(50, "max 50 character allowed")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  //   const {
  //     data: userVerifyData,
  //     isLoading: verifyEmailLoading,
  //     isSuccess: userVerifyQuerySuccess,
  //     isError,
  //   } = useVarifyUserEmailQuery({ email: email }, { skip: !email?.length }); //userEmail exist or not

  //   useEffect(() => {
  //     if (userVerifyQuerySuccess) {
  //       if (userVerifyData?.statusCode == 200) {//user alredy registered with this email
  //         sessionStorage.setItem("email", email);
  //         dispatch(setRegitrationState("SameEmail"));
  //       }
  //     }
  //   }, [userVerifyQuerySuccess, userVerifyData]);

  const handleSubmit = (values: { email: string }, { setFieldError }) => {
    setEmail(values.email);
    dispatch(setLoginState("forgotPasswordSuccess"));
  };

  return (
    <LoginFlowWrapper
      svg={<PMC2 />}
      message={"Lost Your Password? Recover it in a few simple steps."}
    >
      <div className="h-full w-full flex  flex-col items-center justify-center">
        <div className="flex flex-col py-5 md:py-10 border border-BorderBlue justify-center items-start gap-4 md:gap-6 h-full md:h-[70%] w-[100%] md:w-[70%] rounded-2xl px-8 lg:px-12 md:mr-[16%] md:ml-[10.5%]">
          {/* <div className="flex flex-col w-full gap-6"> */}
          <div className="md:font-semibold	md:text-2xl md:w-full">
            Forgot Password
          </div>
          <div className="text-[.87rem] md:w-full">
            Don’t worry! It happens. Please enter your E-mail that is associated
            with your account.
          </div>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={ValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <>
                <Form className=" flex flex-col w-full justify-between h-full">
                  <Textbox
                  FormikField={Field}
                    name="email"
                    type="email"
                    label="Enter your e-mail"
                    placeholder="xyz.demo.com"
                    error={errors.email && touched.email && errors.email}
                  />
                  <div className="w-full justify-center">
                    <div className="flex justify-between  gap-4 lg:gap-9">
                      <Link href="/login">
                        <Button
                          className="w-[50%]"
                          variant="secondary"
                          // onClick={() => dispatch(setLoginState("login"))}
                        >
                          Back
                        </Button>
                      </Link>
                      <Button
                        className="w-[50%]"
                        onClick={() =>
                          dispatch(setLoginState("forgotPasswordSuccess"))
                        }
                        // type="submit"
                        // disabled={verifyEmailLoading || generateOtpLoading}
                      >
                        Submit{" "}
                        {/* {generateOtpLoading || verifyEmailLoading ? "Verifying.." : "Submit"} */}
                      </Button>
                    </div>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>
    </LoginFlowWrapper>
  );
};

export default ForgotPassword;
