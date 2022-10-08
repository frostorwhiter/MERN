const GroupReducer = (state, action) => {
    switch (action.type) {
        case "GET_GROUP_START":
            return {
                groups: [],
                isFetching: true,
                error: false,
            };
        case "GET_GROUP_SUCCESS":
            return {
                groups: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_GROUP_FAILURE":
            return {
                groups: [],
                isFetching: false,
                error: true,
            };

        case "DELETE_GROUP_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "DELETE_GROUP_SUCCESS":
            return {
                groups: state.groups.filter((group) => group._id !== action.payload),
                isFetching: false,
                error: false,
            };
        case "DELETE_GROUP_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };

        case "CREATE_GROUP_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "CREATE_GROUP_SUCCESS":
            return {
                groups: [...state.groups, action.payload],
                isFetching: false,
                error: false,
            };
        case "CREATE_GROUP_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };

        case "UPDATE_GROUP_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case "UPDATE_GROUP_SUCCESS":
            return {
                groups: state.groups.map(
                    (group) => group._id === action.payload._id && action.payload),
                isFetching: false,
                error: false,
            };
        case "UPDATE_GROUP_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };
           

        default:
            return { ...state };
    }
};

export default GroupReducer;