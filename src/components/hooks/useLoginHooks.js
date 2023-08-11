import { useState } from "react";
import { useAuthContext } from "./useAuthHook";
import { toast } from "react-toastify";

export const useLogin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const logIn = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        setLoading(false);
        setError(data.error);
        toast.error(data);
      }
      if (response.ok) {
        toast.success("User Login Sucessfully");
        localStorage.setItem("user", JSON.stringify(data));
        // update the auth Context.
        dispatch({ type: "LOGIN", payload: data });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { logIn, loading, error };
};
