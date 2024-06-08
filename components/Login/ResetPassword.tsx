import { Field, Form, Formik } from "formik";
import React, {useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Button } from "@cpm/package-manager";
import PMC2 from "./images/PMC2";
import LoginFlowWrapper from "./common/LoginFlowWrapper";
import { setLoginState } from "@/slices/auth/loginStates";
import { useResetPasswordMutation } from "@/slices/auth";
import { Router, useRouter } from "next/router";
import PasswordStrengthChecker from "../Util/PasswordStrengthChecker";

const ValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain 8-20 characters with uppercase and lowercase, letters, numbers and symbols"
    ).max(20,"maxLength exceeded"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords don't match."),
});

const ResetPassword = () => {
const router = useRouter()
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [
    resetPassword,
    { data, isSuccess, isLoading },
  ] = useResetPasswordMutation();

  const handleSubmit = (
    values: { password: string; confirmPassword: string },
    { setFieldError }
  ) => {
    const payload = { 
      password: values?.password,
      confirmPassword: values?.confirmPassword,
    };
    resetPassword(payload)
      .unwrap()
      .then((data) => {
        if (data?.statusCode == 200) {
          console.log(data,'success')
          // router.push(data?.redirectUrl)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [password, setPassword] = useState<string>(""); 

  return (
    <LoginFlowWrapper
    svg={<PMC2 />}
      message={"Lost Your Password? Recover it in a few simple steps."}
    >
      <div className="h-full w-full flex  flex-col items-center justify-center">
        <div className="flex flex-col py-5 md:py-10 border border-BorderBlue justify-center items-center gap-4 md:gap-6 h-full md:h-[80%] w-[100%] md:w-[70%] rounded-2xl px-8 lg:px-12 md:mr-[16%] md:ml-[10.5%]">

          <div className="md:font-semibold md:text-2xl w-full">
            Reset Your Password
          </div>
          <div className="text-[.88rem] w-full">
          Please create your new password
          </div>
          <Formik
            initialValues={{
              password: "",
              confirmPassword: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={handleSubmit}
          >
            {({
              errors,
              touched,
              dirty,
              isValid,
              values,
              handleChange,
              setFieldValue,
            }) => (
              <>
                <Form className="px-1 flex flex-col justify-between gap-5 w-full h-full  overflow-hidden hover:overflow-y-auto">
                  <div>
                    <div className="mb-3">
                      
                      <label className="text-gray-800 md:font-medium">
                        Create New Password
                        <span className="text-red-500"> *</span>
                      </label>

                      <div
                        className={`flex border rounded-lg shadow-sm mb-1 ${
                          errors.password
                            ? "border-pvRed"
                            : "border-auth-gray"
                        }`}
                      >
                        <div className="flex-grow">
                          <Field
                            type={showPassword ? "text" : "password"}
                            id="togglePassword"
                            name="password"
                            placeholder="**********"
                            max={20}
                            className="w-full border-none px-3 rounded-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={(event: { target: { value: any } }) => {
                              const newData = event.target.value;
                              setFieldValue("password", newData);
                              setPassword(newData);
                              handleChange(event);
                            }}
                          />
                        </div>

                        <div className="cursor-pointer p-2 flex justify-center items-center -ml-1 rounded-r-md">
                          <div onClick={() => setShowPassword(!showPassword)}>
                            {showPassword == true ? (
                              <AiFillEye size={20} color="#9CA3AF" />
                            ) : (
                              <AiFillEyeInvisible size={20} color="#9CA3AF" />
                            )}
                          </div>
                        </div>
                      </div>
                      {!password?.length && !touched.password ? (
                        <span className="text-pvtextgray text-xs">
                          Must be at least 8 character{" "}
                        </span>
                      ) : null}

                      {errors.password && touched.password && (
                        <div className="text-pvRed text-left text-xs ">
                          {errors.password}
                        </div>
                      )}
                      <PasswordStrengthChecker password={password} />
                    </div>

                    {/* confirm pass */}

                    <label className="text-gray-800 md:font-medium">
                      Confirm Password
                      <span className="text-red-500"> *</span>
                    </label>

                    <div
                      className={`flex border rounded-lg shadow-sm mb-1  ${
                        errors.confirmPassword
                          ? "border-pvRed"
                          : "border-auth-gray"
                      }`}
                    >
                      <div className="flex-grow">
                        <Field
                          type={showConfirmPassword ? "text" : "password"}
                          id="togglePassword"
                          name="confirmPassword"
                          placeholder="**********"
                          max={20}
                          className="w-full border-none px-3 rounded-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          onChange={(event: { target: { value: any } }) => {
                            const newData = event.target.value;
                            setFieldValue("confirmPassword", newData);
                            handleChange(event);
                          }}
                          onPaste={(e) => {
                            e.preventDefault(); // Prevent pasting
                          }}
                        />
                      </div>
                      <div className="cursor-pointer p-2 flex justify-center items-center -ml-1 rounded-r-md">
                        <div
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword == true ? (
                            <AiFillEye size={20} color="#9CA3AF" />
                          ) : (
                            <AiFillEyeInvisible size={20} color="#9CA3AF" />
                          )}
                        </div>
                      </div>
                    </div>
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div className="text-pvRed text-left text-xs ">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>

                  <div className="w-full ">
                  <Button 
                  className="w-full"
                  onClick={() => dispatch(setLoginState("resetPasswordSuccess"))}
                //   type="submit"
                //   disabled={!agree || isLoading}
                  >
                    Reset Password{/* {isLoading ? "Registering .." : "Reset Password"} */}
                  </Button>
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

export default ResetPassword;
