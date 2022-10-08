import axios from "axios"
import {
    createGroupsFailure,
    createGroupsStart,
    createGroupsSuccess,

    deleteGroupsFailure,
    deleteGroupsStart,
    deleteGroupsSuccess,

    getGroupsFailure,
    getGroupsStart,
    getGroupsSuccess,

    updateGroupsFailure,
    updateGroupsStart,
    updateGroupsSuccess
} from "./GroupAction";


//get
export const getGroups = async (dispatch) => {
    dispatch(getGroupsStart());
    try {
        const res = await axios.get("/groups", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getGroupsSuccess(res.data));
    } catch (err) {
       dispatch(getGroupsFailure());
    }
};

//update
export const updateGroups = async (id,dispatch) => {
    dispatch(updateGroupsStart());
    try {
         await axios.put("/groups/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(updateGroupsSuccess(id));
    } catch (err) {
       dispatch(updateGroupsFailure());
    }
};


//delete
export const deleteGroups = async (id, dispatch) => {
    dispatch(deleteGroupsStart());
    try {
        await axios.delete("/groups/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteGroupsSuccess(id))
    } catch (err) {
        dispatch(deleteGroupsFailure());
    }
};

//create
export const createGroups = async (groups, dispatch) => {
    dispatch(createGroupsStart());
    try {
        const res = await axios.post("/groups", groups, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createGroupsSuccess(res.data))
    } catch (err) {
        createGroupsFailure();
    }
};
