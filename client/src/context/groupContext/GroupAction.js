export const getGroupsStart = () => ({
    type: "GET_GROUP_START",
});
export const getGroupsSuccess = (groups) => ({
    type: "GET_GROUP_SUCCESS",
    payload: groups,
});
export const getGroupsFailure = () => ({
    type: "GET_GROUP_FAILURE",
});


export const deleteGroupsStart = () => ({
    type: "DELETE_GROUP_START",
});
export const deleteGroupsSuccess = (id) => ({
    type: "DELETE_GROUP_SUCCESS",
    payload: id,
});
export const deleteGroupsFailure = () => ({
    type: "DELETE_GROUP_FAILURE",
});


export const createGroupsStart = () => ({
    type: "CREATE_GROUP_START",
});
export const createGroupsSuccess = (groups) => ({
    type: "CREATE_GROUP_SUCCESS",
    payload: groups,
});
export const createGroupsFailure = () => ({
    type: "CREATE_GROUP_FAILURE",
});

export const updateGroupsStart = () => ({
    type: "UPDATE_GROUP_START",
});
export const updateGroupsSuccess = (groups) => ({
    type: "UPDATE_GROUP_SUCCESS",
    payload: groups,
});
export const updateGroupsFailure = () => ({
    type: "UPDATE_GROUP_FAILURE",
});