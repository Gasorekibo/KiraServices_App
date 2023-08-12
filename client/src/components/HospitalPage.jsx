import { useNavigate } from "react-router-dom";
import { useHospitals } from "./hooks";
import Navbar from "./Navbar";

const HospitalPage = () => {
  const navigate = useNavigate();
  const { data, hospitalId } = useHospitals();
  const hospital = data.filter((hospital) => hospital._id === hospitalId)[0];

  if (!hospital) {
    navigate("/");
    return;
  }

  console.log(hospital);
  console.log(hospital.status);

  return (
    <>
      <Navbar />
      <div className=" grid grid-cols-2 h-screen justify-center items-center gap-8 p-4">
        <div className=" mt-24 text-black p-4 max-w-5xl shadow-md h-[75%] bg-grey rounded flex justify-center items-center">
          <div className=" block p-2">
            <div className="">
              <img
                src={hospital.image}
                alt={hospital.name}
                className=" w-80 h-80 bg-blue-300 rounded-full object-cover"
              />
              <h1 className=" font-bold text-2xl">{hospital.name}</h1>
              <p>{hospital.location}</p>
              <p>Status: {hospital.status}</p>
              <p>Phone: {hospital.phone}</p>
              <p>Email: {hospital.email}</p>
            </div>
          </div>
        </div>

        <div className=" mt-24 text-black p-4 max-w-5xl shadow-md h-[75%] bg-grey rounded flex justify-center items-center">
          <div className=" flex flex-col gap-4">
            <h1 className=" font-extrabold ">SERVICES</h1>
            {hospital.services.length > 0 ? (
              hospital.services.map((service) => (
                <div key={service._id} className=" bg-blue-200 p-2 rounded">
                  <h2>
                    <span className=" font-bold text-yellow-800">Name</span>:{" "}
                    {service.name}
                  </h2>
                  <p>
                    <span className=" font-bold">Description</span>:{" "}
                    {service.description}
                  </p>
                </div>
              ))
            ) : (
              <h1 className=" text-center">No services available</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalPage;
