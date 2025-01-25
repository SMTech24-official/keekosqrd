import baseApi from "./baseApi";

const registerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body:data
            })
        }),

        createPaymentIntent: builder.mutation({
            query: (data) => ({
              url: "/create-payment-intent",
              method: "POST",
              body: data,
            }),
          }),
          subscribtion: builder.mutation({
            query: (data) => ({
              url: "/subscribe",
              method: "POST",
              body: data,
            }),
          }),
          login: builder.mutation({
            query: (data) => ({
              url: "/login",
              method: "POST",
              body: data,
            }),
          }),
          getUser: builder.query({
            query: (data) => ({
              url: "/user",
              method: "GET",
              body: data,
            }),
          }),
          
          
       
    })
})


export const {useRegisterMutation,useCreatePaymentIntentMutation,useSubscribtionMutation,useLoginMutation,useGetUserQuery} = registerApi