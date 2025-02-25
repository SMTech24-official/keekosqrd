import baseApi from "./baseApi";
import Cookies from "js-cookie";

const CheckoutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    stripeCheckOut: builder.mutation({
      query: () => {
        const token = Cookies.get("token");
        console.log("checkout token: " + token);
        return {
          url: "/checkout",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        };
      },
      invalidatesTags: ["Checkout"],
    }),

    cancelSubscription: builder.mutation({
      query: () => {
        return {
          url: "/cancel-subscription",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        };
      },
      invalidatesTags: ["Checkout"],
    }),

    resumeSubscription: builder.mutation({
      query: () => {
        return {
          url: "/resume-subscription",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        };
      },
      invalidatesTags: ["Checkout"],
    }),

    updateSubsCard: builder.mutation({
      query: (id) => {
        return {
          url: `subscription/update-checkout`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: {
            id: id, 
          },
        };
      },
      invalidatesTags: ["Checkout"],
    }),
  }),
});

export const {
  useStripeCheckOutMutation,
  useCancelSubscriptionMutation,
  useResumeSubscriptionMutation,
  useUpdateSubsCardMutation,
} = CheckoutApi;
