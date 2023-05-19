import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type RegistrationCredentials = {
    id: string;
    pw: string;
};

type RegistrationResponse = {
    success: boolean;
    message: string;
  };

export const registerApi = createApi({
  reducerPath: "registerApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:8000/users",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegistrationResponse, RegistrationCredentials>({
      query: (credentials) => ({
        url: 'register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = registerApi;
