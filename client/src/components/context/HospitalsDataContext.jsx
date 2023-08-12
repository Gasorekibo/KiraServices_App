import axios from "axios";
const { createContext, useState, useEffect } = require("react");

const HospitalsDataContext = createContext();

const HospitalsDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [hospitalId, setHospitalId] = useState("");

  const fetchHospitals = async () => {
    try {
      const hospitals = await axios.get("http://localhost:5000/api/hospitals");
      setData(hospitals.data);
      console.log(hospitals.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);
  return (
    <HospitalsDataContext.Provider
      value={{
        data,
        fetchHospitals,
        searchValue,
        setSearchValue,
        setData,
        filteredData,
        setFilteredData,
        hospitalId,
        setHospitalId,
      }}
    >
      {children}
    </HospitalsDataContext.Provider>
  );
};

export { HospitalsDataContext, HospitalsDataProvider };
