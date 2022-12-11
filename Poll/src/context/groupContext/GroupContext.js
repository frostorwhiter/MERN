import GroupReducer from "./GroupReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    groups: [],
    isFetching: false,
    error: false,
};

export const GroupContext = createContext(INITIAL_STATE);

export const GroupContextProvaider = ({ children }) => {
    const [state, dispatch] = useReducer(GroupReducer, INITIAL_STATE);

    return (
        <GroupContext.Provider
            value={{
                groups: state.groups,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </GroupContext.Provider>
    );
};