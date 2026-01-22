import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authSlice = createApi({

    reducerPath: 'authenticationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (login) => ({
                url: '/login',
                method: 'POST',
                body: login
            })
        }),

        register: builder.mutation({
            query: (register) => ({
                url: '/register',
                method: 'POST',
                body: register
            })
        })
    })

})

export const { useRegisterMutation, useLoginMutation } = authSlice;