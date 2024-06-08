import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "@/components/Login/Login";
import { authLoginState, setLoginState } from "@/slices/auth/loginStates";

const LoginIndexPage = () => {
  const dispatch = useDispatch();
  const state = useSelector(authLoginState);
  console.log(state, "hi");

  useEffect(() => {
    // const savedState = getSessionStorageObject("loginState");
    const savedState = "login";
    if (savedState) {
      dispatch(setLoginState(savedState));
    }
  }, [dispatch]);

  return (
    <>
      <Login />
    </>
  );
};

export default LoginIndexPage;
