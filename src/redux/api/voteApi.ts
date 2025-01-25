import baseApi from "./baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        giveVote: builder.mutation({
            query: (id) => ({
                url: `products/${id}/vote`,
                method: 'POST',
            }),
            invalidatesTags:["Vote"]
        }),
        voteMe: builder.query({
            query: () => ({
                url: `/users/voting-history`,
                method: 'GET',
            }),
            providesTags:["Vote"]
        })
    })
})


export const {useGiveVoteMutation,useVoteMeQuery} = productApi