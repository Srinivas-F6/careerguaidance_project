import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authSlice = createApi({

    reducerPath : 'authenticationApi',
    baseQuery : fetchBaseQuery({
       baseUrl : 'http://localhost:8080'
    }),
    endpoints : (builder) => ({
        login : builder.mutation({
            query : (login) => ({
                url : '/login',
                method : 'POST',
                body : login
            })
        }),

        register : builder.mutation({
            query : (register) => ({
                url : '/register',
                method : 'POST',
                body : register
            })
        })
    })

})

export const {useRegisterMutation, useLoginMutation} = authSlice;