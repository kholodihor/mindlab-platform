import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {RootState} from "@/store/store.tsx";

const BASE_URL = "http://localhost:3000";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders(headers: Headers, {getState}): void {
            const token =( getState() as RootState).auth.token;
            headers.set('Authorization', `Bearer ${token}`);
        },
    }),
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (option) => ({
                url: "api/users/signin",
                method: "POST",
                body: option,
            }),
            invalidatesTags: ["Auth"],
        }),
        logout: builder.mutation({
            query: () => ({
                url: "api/users/signout",
                method: "POST",
            }),
            invalidatesTags: ["Auth"],
        }),
    }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;