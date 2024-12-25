import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE } from "../../../constants/api.js";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: (result, error, restaurantId) => [
        { type: "Reviews", restaurantId },
      ],
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query({
      query: (dishId) => `/dish/${dishId}`,
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: (result, error, { restaurantId }) => [
        { type: "Reviews", restaurantId },
      ],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetDishesByRestaurantIdQuery,
  useGetDishByIdQuery,
  useGetUsersQuery,
  useAddReviewMutation,
} = apiSlice;
