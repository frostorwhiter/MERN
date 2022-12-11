export const getPidrozdilsStart = () => ({
    type: "GET_PIDROZDIL_START",
});
export const getPidrozdilsSuccess = (pidrozdils) => ({
    type: "GET_PIDROZDIL_SUCCESS",
    payload: pidrozdils,
});
export const getPidrozdilsFailure = () => ({
    type: "GET_PIDROZDIL_FAILURE",
});


export const deletePidrozdilsStart = () => ({
    type: "DELETE_PIDROZDIL_START",
});
export const deletePidrozdilsSuccess = (id) => ({
    type: "DELETE_PIDROZDIL_SUCCESS",
    payload: id,
});
export const deletePidrozdilsFailure = () => ({
    type: "DELETE_PIDROZDIL_FAILURE",
});


export const createPidrozdilsStart = () => ({
    type: "CREATE_PIDROZDIL_START",
});
export const createPidrozdilsSuccess = (pidrozdils) => ({
    type: "CREATE_PIDROZDIL_SUCCESS",
    payload: pidrozdils,
});
export const createPidrozdilsFailure = () => ({
    type: "CREATE_PIDROZDIL_FAILURE",
});

export const updatePidrozdilsStart = () => ({
    type: "UPDATE_PIDROZDIL_START",
});
export const updatePidrozdilsSuccess = (pidrozdils) => ({
    type: "UPDATE_PIDROZDIL_SUCCESS",
    payload: pidrozdils,
});
export const updatePidrozdilsFailure = () => ({
    type: "UPDATE_PIDROZDIL_FAILURE",
});