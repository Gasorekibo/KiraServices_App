import React, { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import FormInput from "../FormInput";
import { useNotification } from "../hooks";
import { useSignUp } from "../hooks/useSignUp";
import { toast } from "react-toastify";
import Spinner from "../Spinner";

const validateUserInfo = ({ username, email, password }) => {
  if (!username.trim()) return { ok: false, error: "Name is missing" };
  if (!email.trim()) return { ok: false, error: "Email is missing" };
  if (!password.trim()) return { ok: false, error: "Password is missing" };
  if (password.length < 6)
    return { ok: false, error: "Password must be 6 characters long" };

  return { ok: true };
};

const Register = () => {
  const navigate = useNavigate();
  const { signUp, error, loading } = useSignUp();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    sex: "",
    status: "",
    location: "",
    hospital: "",
    image: "",
  });
  const {
    username,
    email,
    password,
    confirmPassword,
    phoneNumber,
    sex,
    status,
    location,
    type,
  } = formData;

  const handleChange = (e) => {
    if (type === "file") {
      console.log(e.target.files[0]);
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { updateNotification } = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signUp(
      username,
      email,
      password,
      confirmPassword,
      phoneNumber,
      sex,
      status,
      location
    );

    const { ok, error } = validateUserInfo(formData);

    if (!ok) return updateNotification("error", error);
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
    navigate("/login");
    console.log("navigate");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex justify-center items-center mt-16">
        <div className="max-w-md p-6 bg-white rounded shadow-md w-full">
          <h1 className="w-full text-2xl font-bold text-[#068FFF] mb-6 pl-14 items-center">
            {" "}
            Register Kira Services
          </h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              name="username"
              type="text"
              placeholder="Enter your username"
              label="Username"
              value={username}
              onChange={handleChange}
              required
            />
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
            <FormInput
              name="confirmPassword"
              placeholder="******"
              type="password"
              label="ConfirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            />
            <FormInput
              name="phoneNumber"
              placeholder="+250 78......"
              type="phoneNumber"
              label="Phone Number"
              value={phoneNumber}
              onChange={handleChange}
            />
            <FormInput
              name="location"
              placeholder="ex: Kigali-Gasabo-Remera"
              type="text"
              label="Location"
              value={location}
              onChange={handleChange}
            />

            {/* Verify  who is registering user/Hospital*/}

            <FormInput
              name="status"
              type="text"
              placeholder="User/Hospital"
              label="Register As"
              value={status}
              onChange={handleChange}
            />

            {/* ========================== Show for hospital only */}

            {status.toUpperCase() === "HOSPITAL" ? (
              <>
                <FormInput
                  name="image"
                  type="file"
                  label="Upload hospital image"
                  value={image}
                  accept=".jpeg, .png, .jpg"
                  onChange={handleChange}
                />
                <FormInput
                  name="type"
                  type="text"
                  label="Hospital Status"
                  value={type}
                  placeholder="Private/Public"
                  onChange={handleChange}
                />
              </>
            ) : (
              <FormInput
                name="sex"
                placeholder="Male"
                type="text"
                label="Sex"
                value={sex}
                onChange={handleChange}
              />
            )}

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
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

export default Register;
