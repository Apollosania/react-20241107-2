import { User } from "./user";
import { useGetUsersQuery } from "../../redux/services/api/index.js";

export const UserContainer = ({ id }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (state) => ({
      ...state,
      data: state?.data?.find(({ id: userId }) => userId === id),
    }),
  });

  if (!user) {
    return;
  }

  return <User {...user} />;
};
