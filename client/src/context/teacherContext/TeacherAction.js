export const getTeachersStart = () => ({
    type: "GET_TEACHER_START",
});
export const getTeachersSuccess = (teachers) => ({
    type: "GET_TEACHER_SUCCESS",
    payload: teachers,
});
export const getTeachersFailure = () => ({
    type: "GET_TEACHER_FAILURE",
});

export const deleteTeachersStart = () => ({
    type: "DELETE_TEACHER_START",
});

export const deleteTeachersSuccess = (id) => ({
    type: "DELETE_TEACHER_SUCCESS",
    payload: id,
});
export const deleteTeachersFailure = () => ({
    type: "DELETE_TEACHER_FAILURE",
});


export const createTeachersStart = () => ({
    type: "CREATE_TEACHER_START",
});
export const createTeachersSuccess = (teachers) => ({
    type: "CREATE_TEACHER_SUCCESS",
    payload: teachers,
});
export const createTeachersFailure = () => ({
    type: "CREATE_TEACHER_FAILURE",
});

export const updateTeachersStart = () => ({
    type: "UPDATE_TEACHER_START",
});
export const updateTeachersSuccess = (teachers) => ({
    type: "UPDATE_TEACHER_SUCCESS",
    payload: teachers,
});
export const updateTeachersFailure = () => ({
    type: "UPDATE_TEACHER_FAILURE",
});