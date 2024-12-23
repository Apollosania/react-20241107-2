import { Layout } from "./components/layout/layout.jsx";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import "./style.css";
import { ThemeContextProvider } from "./components/theme-context/theme-context-provider";
import { AuthContextProvider } from "./components/auth-context/auth-context-provider";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./components/home-page/home-page.jsx";
import { RestaurantPage } from "./components/restaurant-page/restaurant-page.jsx";
import { RestaurantMenuPage } from "./components/restaurant-menu-page/restaurant-menu-page";
import { ReviewsPage } from "./components/reviews-page/reviews-page";
import { DishPage } from "./components/dish-page/dish-page";
import { NotFoundPage } from "./components/not-found-page/not-found-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "restaurants",
        element: <RestaurantsPage />,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantPage />,
            children: [
              { index: true, element: <Navigate to={"menu"} replace /> },
              { path: "menu", element: <RestaurantMenuPage /> },
              { path: "reviews", element: <ReviewsPage /> },
            ],
          },
        ],
      },
      {
        path: "dish/:dishId",
        element: <DishPage />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
