import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/users-slice.js";
import { User } from "./user";

export const UserContainer = ({ id }) => {
  const user = useSelector((state) => selectUserById(state, id));

  if (!user) {
    return;
  }

  return <User {...user} />;
};
