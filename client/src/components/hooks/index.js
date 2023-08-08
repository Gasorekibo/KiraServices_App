import { useContext } from "react";
import { NotificationContext } from "../context/Notification";

const useNotification = () => {
  return useContext(NotificationContext);
};

export { useNotification };
