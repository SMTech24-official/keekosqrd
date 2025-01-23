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
       
    })
})


export const {useRegisterMutation,useCreatePaymentIntentMutation} = registerApi