import { Button } from "../button/button.jsx";
import { useAuth } from "../auth-context/use-auth.js";
import { useState } from "react";
import style from "./login-form.module.css";

export const LoginForm = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={() => {
        login({
          name,
          id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
        });
      }}
    >
      <div className={style.wrapper}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder={"Ваше имя"}
        />
        <Button type={"secondary"} buttonType={"submit"}>
          Войти
        </Button>
      </div>
    </form>
  );
};
