import { RestaurantContainer } from "../restaurant/restaurant-container";

export const RestaurantPage = async ({ params, children }) => {
  const { restaurantId } = await params;

  return (
    <>
      <RestaurantContainer restaurantId={restaurantId} />
      {children}
    </>
  );
};
