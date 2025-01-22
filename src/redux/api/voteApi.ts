import baseApi from "./baseApi";

const voteApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        giveVote: builder.mutation({
            query: (id: number) => ({
                url: `products/${id}/vote`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {}, // Add payload if required by the backend
            }),
            
        })
    })
})


export const {useGiveVoteMutation} = voteApi