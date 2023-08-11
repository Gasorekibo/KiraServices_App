import { useContext } from "react";
import { NotificationContext } from "../context/Notification";
import { HospitalDataContext } from "../context/HospitalDataPrivider";
import { HospitalHomeContext } from "../context/HospitalHomeContext";
import { HospitalsDataContext } from "../context/HospitalsDataContext";

const useNotification = () => {
  return useContext(NotificationContext);
};

const useHospitalsData = () => {
  return useContext(HospitalDataContext);
};

const useHospitalHomeProvider = () => {
  return useContext(HospitalHomeContext);
};

const useHospitals = () => {
  return useContext(HospitalsDataContext);
};

export {
  useNotification,
  useHospitalHomeProvider,
  useHospitals,
  useHospitalsData,
};
