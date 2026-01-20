
import {configureStore} from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
export const authStore = configureStore({
    reducer : {
        [authSlice.reducerPath] : authSlice.reducer ,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(authSlice.middleware),
})