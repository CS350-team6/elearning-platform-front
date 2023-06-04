import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


type Return = {
  result : string
}

type UploadInput = {
  file: File;
  title: string;
};


export const uploadApi = createApi({
  reducerPath: "uploadApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://127.0.0.1:8000',
    prepareHeaders: (headers) => {

      return headers;
    },
  }),
  endpoints: (builder) => ({
    uploadVideo: builder.mutation<Return, UploadInput>({
      query: ({file, title}) => {
        // FormData 객체 생성
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);

        return {
          url: `/video/`,
          method: 'POST',
          body: formData,
        };
    }
  }),
  })
});

export const { useUploadVideoMutation } = uploadApi;