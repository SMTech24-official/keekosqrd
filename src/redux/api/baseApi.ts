import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie"; // Import js-cookie

export const baseApi = createApi({
  reducerPath: "baseApi", 
  baseQuery: fetchBaseQuery({
     baseUrl: "http://10.0.20.59:8001/api",
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");
      if (token) {
        headers.set("Authorization", `${token}`);
      } else {
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["Register"],
});



export default baseApi;
