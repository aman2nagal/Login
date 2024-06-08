import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders(headers) {
      headers.set("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyNzVjZjE5LTkyNDctNDg4Yy1iZjA4LWEzNmJhY2I5YjQ4ZSIsIm5iZiI6MTY2OTI2Mjg2NSwiZXhwIjoxNjY5ODY3NjY1LCJpYXQiOjE2NjkyNjI4NjV9.fTvbETf2aLHsIIdoFrYzUSpT4EXrUlM7j6jLbyju1qk");
      return headers;
    },
  }),
  tagTypes: [
"login",
  ],
  endpoints: (builder) => ({}),
});
