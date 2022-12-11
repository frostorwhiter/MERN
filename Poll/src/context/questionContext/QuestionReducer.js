const QuestionReducer = (state, action) => {
    switch (action.type) {
        case "GET_QUESTION_START":
            return {
                questions: [],
                isFetching: true,
                error: false,
            };
        case "GET_QUESTION_SUCCESS":
            return {
                questions: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_QUESTION_FAILURE":
            return {
                questions: [],
                isFetching: false,
                error: true,
            };

        case "DELETE_QUESTION_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "DELETE_QUESTION_SUCCESS":
            return {
                questions: state.questions.filter((question) => question._id !== action.payload),
                isFetching: false,
                error: false,
            };
        case "DELETE_QUESTION_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };

        case "CREATE_QUESTION_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "CREATE_QUESTION_SUCCESS":
            return {
                questions: [...state.questions, action.payload],
                isFetching: false,
                error: false,
            };
        case "CREATE_QUESTION_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };

        case "UPDATE_QUESTION_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "UPDATE_QUESTION_SUCCESS":
            return {
                questions: state.questions.map(
                    (question) => question._id === action.payload._id && action.payload),
                isFetching: false,
                error: false,
            };
        case "UPDATE_QUESTION_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
           

        default:
            return { ...state };
    }
};

export default QuestionReducer;