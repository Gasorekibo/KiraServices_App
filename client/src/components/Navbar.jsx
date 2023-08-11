import React, { useState, useEffect } from "react";
import { useLogout } from "../components/hooks/useLogoutHook";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useAuthContext } from "./hooks/useAuthHook";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [nav, setNav] = useState(false);
  const { logout } = useLogout();
  const { user } = useAuthContext();

  useEffect(() => {
    if (window.location.pathname === "/") {
      setShowSearch(true);
    }
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className=" flex justify-between items-center h-24 bg-[#000300] mx-auto px-4 text-white py-2 fixed top-0 left-0 right-0 z-10 w-full">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[#068FFF]">
          <Link to="/">Kira Services</Link>
        </h1>
        {showSearch && <SearchBar />}
      </div>
      {!user ? (
        <div className="hidden md:flex items-center space-x-4 mr-36">
          <Link to="/" className="p-4">
            Home
          </Link>
        </div>
      ) : (
        <div className="mr-36">
          <Link to="/" className="p-4">
            Home
          </Link>
          <Link to="/logout" className="p-4" onClick={handleLogout}>
            Logout
          </Link>
        </div>
      )}

      <div className="md:hidden flex items-center">
        <button onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      </div>

      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#068FFF] m-4">
          Kira Services
        </h1>

        <Link to="/" className="p-4 border-b border-gray-600">
          Home
        </Link>

        <Link to="/register" className="p-4 border-b border-gray-600">
          Register
        </Link>

        <Link to="/login" className="p-4 border-b border-gray-600">
          Login
        </Link>

        <Link to="/logout" className="p-4 border-b border-gray-600">
          Logout
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
