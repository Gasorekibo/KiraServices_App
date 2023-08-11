import { useContext } from "react";
import { NotificationContext } from "../context/Notification";
import { HospitalDataContext } from "../context/HospitalDataPrivider";

const useNotification = () => {
  return useContext(NotificationContext);
};

const useHospitalsData = () => {
  return useContext(HospitalDataContext);
};

export { useNotification, useHospitalsData };
