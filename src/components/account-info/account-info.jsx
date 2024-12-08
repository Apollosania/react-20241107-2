import { useAuth } from "../auth-context/use-auth.js";
import { Button } from "../button/button.jsx";
import style from "./account-info.module.css";

export const AccountInfo = () => {
  const { auth, logout } = useAuth();

  return (
    <div className={style.wrapper}>
      <p>Здравствуйте, {auth.user}!</p>

      <Button type={"secondary"} onClick={logout}>
        Выйти
      </Button>
    </div>
  );
};
