import { AuthContext } from "./index";
import { useReducer } from "react";

const INITIAL_STATE = {
  isAuthorized: false,
  user: null,
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { isAuthorized: true, user: payload };
    case LOGOUT:
      return { isAuthorized: false, user: null };
  }
};

export const AuthContextProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(reducer, INITIAL_STATE);

  const login = (user) => {
    dispatch({ type: LOGIN, payload: user });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
