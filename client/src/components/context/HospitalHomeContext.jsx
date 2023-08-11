import axios from "axios";
import { createContext, useEffect, useState } from "react";

const HospitalHomeContext = createContext();

const HospitalHomeProvider = ({ children }) => {
  const [hospitalInfo, setHospitalInfo] = useState([]);

  const fetchHospitalInfo = async (token) => {
    const res = await axios.get(
      `http://localhost:5000/api/hospitals/profile/${token}`
    );

    setHospitalInfo(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    const hospitalToken = localStorage.getItem("hospitalToken");
    hospitalToken && fetchHospitalInfo(hospitalToken);
  }, []);

  return (
    <HospitalHomeContext.Provider value={{ hospitalInfo }}>
      {children}
    </HospitalHomeContext.Provider>
  );
};

export { HospitalHomeContext, HospitalHomeProvider };
