import { Outlet } from "react-router-dom";
import { NavTab } from "../nav-tab/nav-tab";

export const Restaurant = ({ id }) => {
  return (
    <div>
      <div>
        <NavTab title={"Меню"} to={`/restaurants/${id}/menu`} />
        <NavTab title={"Отзывы"} to={`/restaurants/${id}/reviews`} />
      </div>

      <Outlet />
    </div>
  );
};
