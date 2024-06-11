import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchBaseQueryArgs } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import {AuthUser} from "../../stores/type"
import { apiSlice } from "../apiSlice";

export const prepareHeaders: FetchBaseQueryArgs["prepareHeaders"] = (
  headers,
  { getState }
) => {
  headers.set("accept", '*/*');
  return headers;
};

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, { userName: string; password: string,rememberMe:boolean }>({
      query: (body) => ({
        method: "POST",
        url: "/login",
        body,
      }),
      invalidatesTags: ["login"],
    }),
    // login: builder.mutation<AuthUser, { email: string; password: string }>({
    //   query: (body) => ({
    //     method: "POST",
    //     url: "/authenticate",
    //     body,
    //   }),
    //   invalidatesTags: ["login"],
    // }),
  }),
});

export const  { useLoginMutation} = authApi

// import { BaseQueryApi } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
// import { MaybePromise } from "@reduxjs/toolkit/dist/query/tsHelpers";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../../store";
// import { User } from "../../store/type";

// type Prepare = {
//   prepareHeaders?: (
//     headers: Headers,
//     api: Pick<BaseQueryApi, "getState" | "endpoint" | "type" | "forced">
//   ) => MaybePromise<Headers>;
// };

// const prepareHeaders: Prepare["prepareHeaders"] = (headers, { getState }) => {
//   const token = (getState() as RootState)?.auth?.api_token;
//   if (token) {
//     headers.set("accept", `application/json`);
//     headers.set("authorization", `Bearer ${token}`);
//   }
//   return headers;
// };

// export const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.REACT_APP_API_URL,
//     prepareHeaders,
//   }),
//   endpoints: (builder) => ({
//     login: builder.mutation<User, { email: string; password: string }>({
//       query: (body) => ({
//         method: "POST",
//         url: "/api/authAdmin",
//         body,
//       }),
//     }),
//   }),
// });

//export const { useLoginMutation } = api;
