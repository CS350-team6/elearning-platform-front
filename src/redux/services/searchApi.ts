import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// type SearchResult = {
//   result: string;
//   title: string[];
// };

export const searchApi = createApi({
  reducerPath: "searchApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: () =>  "user_account/searchTest/",
    }),
  }),
});

export const { useGetSearchResultsQuery } = searchApi;
