import { useContext } from "react";
import { NotificationContext } from "../context/Notification";
import { HospitalDataContext } from "../context/HospitalDataPrivider";
import { HospitalHomeContext } from "../context/HospitalHomeContext";

const useNotification = () => {
  return useContext(NotificationContext);
};

const useHospitalsData = () => {
  return useContext(HospitalDataContext);
};

export { useNotification, useHospitalsData };
const useHospitalHomeProvider = () => {
  return useContext(HospitalHomeContext);
};

export { useNotification, useHospitalHomeProvider };
