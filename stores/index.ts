import {configureStore} from "@reduxjs/toolkit"

import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
import  authReducer from "./auth";
import {authApi} from "../slices/auth"

import { apiSlice } from '../slices/apiSlice';
import { loginStateSlice } from "@/slices/auth/loginStates";




export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {

    if (isRejectedWithValue(action)) {
      console.warn(`We got a rejected action! ${action.error.message}`)
  
    }
    return next(action)
}

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [loginStateSlice.name]: loginStateSlice.reducer,
        auth: authReducer,
  
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware,rtkQueryErrorLogger),
    devTools: true
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;

