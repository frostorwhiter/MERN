import axios from "axios"
import {
    createTeachersFailure,
    createTeachersStart,
    createTeachersSuccess,

    deleteTeachersFailure,
    deleteTeachersStart,
    deleteTeachersSuccess,

    getTeachersFailure,
    getTeachersStart,
    getTeachersSuccess,

    updateTeachersFailure,
    updateTeachersStart,
    updateTeachersSuccess
} from "./TeacherAction";


//get
export const getTeachers = async (dispatch) => {
    dispatch(getTeachersStart());
    try {
        const res = await axios.get("/teachers", {
        });
        dispatch(getTeachersSuccess(res.data));
    } catch (err) {
       dispatch(getTeachersFailure());
    }
};

//update
export const updateTeachers = async (id,dispatch) => {
    dispatch(updateTeachersStart());
    try {
         await axios.put("/Teacher/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(updateTeachersSuccess(id));
    } catch (err) {
       dispatch(updateTeachersFailure());
    }
};


//delete
export const deleteTeachers = async (id, dispatch) => {
    dispatch(deleteTeachersStart());
    try {
        await axios.delete("/Teachers/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteTeachersSuccess(id))
    } catch (err) {
        dispatch(deleteTeachersFailure());
    }
};

//create
export const createTeachers = async (teachers, dispatch) => {
    dispatch(createTeachersStart());
    try {
        const res = await axios.post("/Teachers", teachers, {
        });
        dispatch(createTeachersSuccess(res.data))
    } catch (err) {
        createTeachersFailure();
    }
};
