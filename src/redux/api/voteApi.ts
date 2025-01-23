import baseApi from "./baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        giveVote: builder.mutation({
            query: (id) => ({
                url: 'products/${id}/vote',
                method: 'POST',
            })
        })
    })
})


export const {useGiveVoteMutation} = productApi