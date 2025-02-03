import baseApi from "./baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // get products
        getProducts: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET',
            }),
            providesTags:["products"]
        }),

         // GET products endpoint (unchanged)
      getAllCommunity: builder.query({
        query: () => ({
          url: `/community`,
          method: "GET",
        }),
        providesTags: ["community"],
      }),
    })
})


export const {useGetProductsQuery, useGetAllCommunityQuery} = productApi