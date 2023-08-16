import { useState, useContext } from "react";
import { userContext } from "./userContex";

export const useUserContext = useContext(userContext);

const useLogin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = userContextContext();
  const navigate = useNavigate();

  const login = (email, password) => {
    setLoading(true);
    setError(null);
    const response = fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user_token}`,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const Data = response.json();
    localStorage.setItem({ user: JSON.stringify(Data) });
    dispatch({ type: "LOGIN", payload: user });
    navigate("/");
  };

  if (error) {
    console.log(error.message);
  }
  if (loading) {
    console.log("The page is loadding ....");
  }
  return { login };
};
