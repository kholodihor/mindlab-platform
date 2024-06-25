import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "@/store/store.tsx"
import { BASE_URL } from "@/lib/const.ts"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers: Headers, { getState }): void {
      const token = (getState() as RootState).auth.token
      headers.set("Authorization", `Bearer ${token}`)
    }
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (option) => ({
        url: "/auth/login",
        method: "POST",
        body: option
      }),
      invalidatesTags: ["Auth"]
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST"
      }),
      invalidatesTags: ["Auth"]
    })
  })
})

export const { useLoginMutation, useLogoutMutation } = authApi
