import QuestionReducer from "./QuestionReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    questions: [],
    isFetching: false,
    error: false,
};

export const QuestionContext = createContext(INITIAL_STATE);

export const QuestionContextProvaider = ({ children }) => {
    const [state, dispatch] = useReducer(QuestionReducer, INITIAL_STATE);

    return (
        <QuestionContext.Provider
            value={{
                questions: state.questions,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </QuestionContext.Provider>
    );
};