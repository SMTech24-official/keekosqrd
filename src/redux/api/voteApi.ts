import baseApi from "./baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        giveVote: builder.mutation({
            query: (id) => ({
                url: `products/${id}/vote`,
                method: 'POST',
            }),
            invalidatesTags:["Vote"]
        })
    })
})


export const {useGiveVoteMutation} = productApi