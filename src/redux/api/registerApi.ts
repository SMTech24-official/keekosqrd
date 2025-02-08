import baseApi from "./baseApi";

const registerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body:data
            }),
            invalidatesTags:["User"]
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
            invalidatesTags:["User"]


          }),
          getUser: builder.query({
            query: (data) => ({
              url: "/user",
              method: "GET",
              body: data,
            }),
            providesTags:["User"]

          }),
          forgotPass: builder.mutation({
            query: (data) => ({
              url: "/forgot-password",
              method: "POST",
              body: data,
            }),
            invalidatesTags:["User"]

          }),
          otp: builder.mutation({
            query: (data) => ({
              url: "/verify-otp",
              method: "POST",
              body: data,
            }),
            invalidatesTags:["User"]

          }),
          resetPass: builder.mutation({
            query: (data) => ({
              url: "/reset-password",
              method: "POST",
              body: data,
            }),
            invalidatesTags:["User"]

          }),
          
          
       
    })
})


export const {useRegisterMutation,useCreatePaymentIntentMutation,useSubscribtionMutation,useLoginMutation,useGetUserQuery,useForgotPassMutation,useOtpMutation,useResetPassMutation} = registerApi