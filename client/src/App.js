import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginHospital from "./components/auth/LoginHospital";
import RegisterHospital from "./components/auth/RegisterHospital";
import LoginUser from "./components/auth/LoginUser";
import RegisterUser from "./components/auth/RegisterUser";
import HospitalHome from "./components/HospitalHome";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-hospital" element={<RegisterHospital />} />
        <Route path="/login-hospital" element={<LoginHospital />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/login-user" element={<LoginUser />} />
        <Route path="/hospital-home" element={<HospitalHome />} />
      </Routes>
    </div>
  );
}

export default App;