import { useState } from "react";
import FormInput from "./FormInput";
import Navbar from "./Navbar";
import { useHospitalHomeProvider } from "./hooks";
import axios from "axios";

const HospitalHome = () => {
  const { hospitalInfo } = useHospitalHomeProvider();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // const [update, setUpdate] = useState("");

  const handleReload = () => {
    window.location.reload();
  };

  const nameInputChangeHandler = (e) => {
    setName(e.target.value);
  };

  const descriptionInputChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(hospitalInfo._id);
    console.log("Submitting ...");
    const res = await axios.post("http://localhost:5000/api/services", {
      hospital_id: hospitalInfo._id,
      name,
      description,
    });
    handleReload();

    // setUpdate(res.data);

    console.log(res.data);
  };

  return (
    <>
      <Navbar />
      <div className=" grid grid-cols-3 h-screen justify-center items-center gap-8 p-4">
        <div className=" mt-24 text-black p-4 max-w-5xl shadow-md h-[75%] bg-grey rounded flex justify-center items-center">
          {hospitalInfo && (
            <div className=" block p-2">
              <div className="">
                <img
                  src={hospitalInfo.image}
                  alt={hospitalInfo.name}
                  className=" w-80 h-80 bg-blue-300 rounded-full object-cover"
                />
                <h1 className=" font-bold text-2xl">{hospitalInfo.name}</h1>
                <p>{hospitalInfo.location}</p>
                <p>Status: {hospitalInfo.status}</p>
                <p>Phone: {hospitalInfo.phone}</p>
                <p>Email: {hospitalInfo.email}</p>
              </div>
            </div>
          )}
        </div>
        <div className=" mt-24 text-black p-4 max-w-5xl shadow-md h-[75%] bg-grey rounded flex justify-center items-center">
          <div className=" flex flex-col gap-4">
            <h1 className=" font-extrabold">SERVICES</h1>
            {hospitalInfo.services && hospitalInfo.services.length > 0 ? (
              hospitalInfo.services.map((service) => (
                <div key={service._id}>
                  <h2>Name: {service.name}</h2>
                  <p>Description: {service.description}</p>
                </div>
              ))
            ) : (
              <h1 className=" text-center">No services available</h1>
            )}
          </div>
        </div>
        <div className=" mt-24 text-black p-4 max-w-5xl shadow-md h-[75%] bg-grey rounded flex justify-center items-center">
          <form onSubmit={handleSubmit}>
            <h1 className=" p-4 text-2xl font-bold text-center">
              Create a Service
            </h1>
            <div className=" font-bold flex flex-col gap-2">
              <label htmlFor="name">Enter ServiceName</label>
              <FormInput
                type="text"
                placeholder="Enter the service name here .."
                value={name}
                onChange={nameInputChangeHandler}
                required
              />
              <label htmlFor="description">Description</label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                rows="4"
                placeholder="Enter your description"
                value={description}
                onChange={descriptionInputChangeHandler}
                required
              />
              <button
                type="submit"
                className=" bg-blue-800 hover:bg-blue-700 px4 py-2 rounded text-[#F7E987]"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HospitalHome;
