import React from "react";

const Card = ({ imageSrc, index }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-3">
      <div className="relative">
        <img
          src={imageSrc}
          alt="Example "
          className="object-cover w-full h-48"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h2 className="text-xl font-semibold text-white">
            Hospital {index + 1}
          </h2>
        </div>
      </div>
      <div className="px-4 py-2">
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in magna
          tincidunt, ullamcorper nisi vel, sodales quam.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg focus:outline-none focus:shadow-outline">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
