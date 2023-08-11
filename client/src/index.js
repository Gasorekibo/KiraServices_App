import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { NotificationProvider } from "./components/context/Notification";
import { AuthContextProvider } from "./components/context/authContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HospitalDataProvider } from "./components/context/HospitalDataPrivider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <NotificationProvider>
          <HospitalDataProvider>
            <App />
          </HospitalDataProvider>
        </NotificationProvider>
      </AuthContextProvider>
    </Router>
    <ToastContainer />
  </React.StrictMode>
);
