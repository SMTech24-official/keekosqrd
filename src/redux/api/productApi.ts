import baseApi from "./baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET',
            })
        })
    })
})


export const {useGetProductsQuery} = productApi