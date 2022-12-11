import PidrozdilReducer from "./PidrozdilReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    pidrozdils: [],
    isFetching: false,
    error: false,
};

export const PidrozdilContext = createContext(INITIAL_STATE);

export const PidrozdilContextProvaider = ({ children }) => {
    const [state, dispatch] = useReducer(PidrozdilReducer, INITIAL_STATE);

    return (
        <PidrozdilContext.Provider
            value={{
                pidrozdils: state.pidrozdils,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </PidrozdilContext.Provider>
    );
};