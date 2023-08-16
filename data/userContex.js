import { createContext, useReducer } from "react";

const userContext = createContext();
const initialState = {
  user: null,
  loading: false,
  error: false,
};

export const useReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
  }
};

export const userContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <userContext.Provider value={{ ...state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};
export { userContextProvider, userContext };
