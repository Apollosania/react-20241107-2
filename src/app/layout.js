import { AuthContextProvider } from "../components/auth-context/auth-context-provider.jsx";
import { ThemeContextProvider } from "../components/theme-context/theme-context-provider.jsx";
import ReduxProvider from "../redux/provider";
import { Layout } from "../components/layout/layout";
import "../style.css";
import "../variables.css";

export const metadata = {
  title: "Список ресторанов",
  description: "Описание списка ресторанов",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <ReduxProvider>
            <AuthContextProvider>
              <ThemeContextProvider>
                <Layout>{children}</Layout>
              </ThemeContextProvider>
            </AuthContextProvider>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
