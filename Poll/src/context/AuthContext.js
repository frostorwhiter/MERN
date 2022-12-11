import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  group: JSON.parse(localStorage.getItem("group")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        group: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        group: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        group: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        group: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("group", JSON.stringify(state.group));
  }, [state.group]);

  return (
    <AuthContext.Provider
      value={{
        group: state.group,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};