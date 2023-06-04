import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type videoType ={
  source : string;
  id : number;
  title: string;
  thumbnailUrl: string;
  views: number;
  duration: string
}

export const searchApi = createApi({
  reducerPath: "searchApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000",
  }),
  endpoints: (builder) => ({
    getLectureSearchResults: builder.query<{result:string, title:string[]}, {year:string, semester:string}>({
      query: ({year, semester}) =>  `/user_account/searchTest/?year=${year}&semester=${semester}/`,
    }),
    getVideoSearchResults: builder.query<{result:string, data:videoType[], }, {year:string, semester:string, lecture:string}>({
      query: ({year, semester, lecture}) =>  `/video/?search=${year}&search_fields=year/`,
    }),
  })
});

export const { useGetLectureSearchResultsQuery, useGetVideoSearchResultsQuery} = searchApi;
