const PidrozdilReducer = (state, action) => {
    switch (action.type) {
        case "GET_PIDROZDIL_START":
            return {
                pidrozdils: [],
                isFetching: true,
                error: false,
            };
        case "GET_PIDROZDIL_SUCCESS":
            return {
                pidrozdils: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_PIDROZDIL_FAILURE":
            return {
                pidrozdils: [],
                isFetching: false,
                error: true,
            };

        case "DELETE_PIDROZDIL_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "DELETE_PIDROZDIL_SUCCESS":
            return {
                pidrozdils: state.pidrozdils.filter((pidrozdil) => pidrozdil._id !== action.payload),
                isFetching: false,
                error: false,
            };
        case "DELETE_PIDROZDIL_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };

        case "CREATE_PIDROZDIL_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "CREATE_PIDROZDIL_SUCCESS":
            return {
                pidrozdils: [...state.pidrozdils, action.payload],
                isFetching: false,
                error: false,
            };
        case "CREATE_PIDROZDIL_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };

        case "UPDATE_PIDROZDIL_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "UPDATE_PIDROZDIL_SUCCESS":
            return {
                pidrozdils: state.pidrozdils.map(
                    (pidrozdil) => pidrozdil._id === action.payload._id && action.payload),
                isFetching: false,
                error: false,
            };
        case "UPDATE_PIDROZDIL_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };

        default:
            return { ...state };
    }
};

export default PidrozdilReducer;