import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "@/components/Login/Login";
import { authLoginState, setLoginState } from "@/slices/auth/loginStates";
import {
  getSessionStorageObject,
  setSessionStorageObject,
} from "@/lib/loginLocalStates";

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

  useEffect(() => {
    // Whenever the state changes, save it to sessionStorage
    setSessionStorageObject("loginState", state);
  }, [state]);

  return (
    <>
      <Login />
    </>
  );
};

export default LoginIndexPage;
