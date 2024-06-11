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
  }),
});

export const  { useLoginMutation} = authApi
