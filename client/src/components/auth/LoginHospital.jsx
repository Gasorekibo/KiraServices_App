import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FormInput from "../FormInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useHospitalAuth } from "../hooks/useHospitalAuth";

const LoginHospital = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleReload = () => {
    window.location.reload();
  };
  const { email, password } = formData;
  const { changeHospitalToken } = useHospitalAuth();

  const handleNavigate = () => {
    navigate("/register-hospital");
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:5000/api/hospitals/auth",
        formData
      );
      const { jwtToken } = result.data;
      if (jwtToken) {
        changeHospitalToken(jwtToken);
      } else console.log("Something else happened");
    } catch (error) {
      console.error(error);
    }
    if (localStorage.getItem("hospitalToken")) navigate("/hospital-home");
    handleReload();
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="max-w-md p-6 bg-white rounded shadow-md w-full">
          <h1 className="w-full text-3xl font-bold text-[#068FFF] mb-7 items-center">
            {" "}
            Login Kira Services
          </h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              name="email"
              type="email"
              placeholder="gasore@gmail.com"
              label="Email"
              value={email}
              onChange={handleChange}
              required
            />
            <FormInput
              name="password"
              type="password"
              placeholder="******"
              label="Password"
              value={password}
              onChange={handleChange}
              required
            />

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <p
                className="flex text-blue-500 font-bold cursor-pointer "
                onClick={handleNavigate}
              >
                Don't have Account? Register
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginHospital;
