import {
  PENDING_REQUEST_STATUS,
  REJECTED_REQUEST_STATUS,
} from "../../constants/request-status.js";

export const RequestPreloader = ({ requestStatus, children }) => {
  if (requestStatus === PENDING_REQUEST_STATUS) {
    return <p>Загрузка...</p>;
  }

  if (requestStatus === REJECTED_REQUEST_STATUS) {
    return <p>При загрузке произошла ошибка...</p>;
  }

  return children;
};
