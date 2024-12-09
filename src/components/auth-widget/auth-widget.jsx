import { AccountInfo } from "../account-info/account-info.jsx";
import { LoginForm } from "../login-form/login-form.jsx";
import { useAuth } from "../auth-context/use-auth.js";

export const AuthWidget = () => {
  const { auth } = useAuth();

  return auth.isAuthorized ? <AccountInfo /> : <LoginForm />;
};
