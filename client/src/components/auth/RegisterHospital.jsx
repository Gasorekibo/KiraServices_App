import React, { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import FormInput from "../FormInput";
import { useSignUp } from "../hooks/useSignUp";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import axios from "axios";

const RegisterHospital = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const { error, loading } = useSignUp();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNUmber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneNUmber(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("signing up ...");
    const formData = new FormData();
    formData.append("name", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("location", location);
    formData.append("phone", phoneNumber);
    formData.append("status", status);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/hospitals",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  if (error) {
    toast.error(error);
  }
  if (loading) {
    return (
      <div className="flex content-center items-center mt-80">
        <Spinner />
      </div>
    );
  }

  const handleNavigate = () => {
    navigate("/login-hospital");
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex justify-center items-center mt-16">
        <div className="max-w-md p-6 bg-white rounded shadow-md w-full">
          <h1 className="w-full text-2xl font-bold text-[#068FFF] mb-6 pl-14 items-center">
            {" "}
            RegisterHospital Kira Services
          </h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              name="username"
              type="text"
              placeholder="Enter your username"
              label="Username"
              value={username}
              onChange={handleNameChange}
              required
            />
            <FormInput
              name="email"
              type="email"
              placeholder="gasore@gmail.com"
              label="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <FormInput
              name="password"
              type="password"
              placeholder="******"
              label="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <FormInput
              name="confirmPassword"
              placeholder="******"
              type="password"
              label="ConfirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <FormInput
              name="phoneNumber"
              placeholder="+250 78......"
              type="phoneNumber"
              label="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
            <FormInput
              name="location"
              placeholder="ex: Kigali-Gasabo-Remera"
              type="text"
              label="Location"
              value={location}
              onChange={handleLocationChange}
            />

            {/* ================================================================ */}

            <FormInput
              name="image"
              type="file"
              label="Upload hospital image"
              onChange={handleFileInputChange}
            />
            {/* ================================================================ */}
            <FormInput
              name="status"
              type="text"
              label="Hospital Status"
              value={status}
              placeholder="Private/Public"
              onChange={handleStatusChange}
            />

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                RegisterHospital
              </button>
              <p
                className="flex text-blue-500 font-bold cursor-pointer "
                onClick={handleNavigate}
              >
                Have Account ? Login
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterHospital;