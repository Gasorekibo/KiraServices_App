import { useContext } from "react";
import { NotificationContext } from "../context/Notification";
import { HospitalHomeContext } from "../context/HospitalHomeContext";

const useNotification = () => {
  return useContext(NotificationContext);
};

const useHospitalHomeProvider = () => {
  return useContext(HospitalHomeContext);
};

export { useNotification, useHospitalHomeProvider };
