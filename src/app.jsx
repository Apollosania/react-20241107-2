import { Layout } from "./components/layout/layout.jsx";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import "./style.css";
import { ThemeContextProvider } from "./components/theme-context/theme-context-provider";
import { AuthContextProvider } from "./components/auth-context/auth-context-provider";

export const App = () => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Layout title={"Список ресторанов"}>
          <RestaurantsPage />
        </Layout>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};
