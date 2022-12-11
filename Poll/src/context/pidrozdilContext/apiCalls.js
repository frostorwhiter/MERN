import axios from "axios"
import {
    createPidrozdilsFailure,
    createPidrozdilsStart,
    createPidrozdilsSuccess,
    deletePidrozdilsFailure,
    deletePidrozdilsStart,
    deletePidrozdilsSuccess,
    getPidrozdilsFailure,
    getPidrozdilsStart,
    getPidrozdilsSuccess,
    updatePidrozdilsFailure,
    updatePidrozdilsStart,
    updatePidrozdilsSuccess
} from "./PidrozdilAction";


//get
export const getPidrozdils = async (dispatch) => {
    dispatch(getPidrozdilsStart());
    try {
        const res = await axios.get("/pidrozdils" );
        
        dispatch(getPidrozdilsSuccess(res.data));
    } catch (err) {
       dispatch(getPidrozdilsFailure());
    }
};

//update
export const updatePidrozdils = async (id,dispatch) => {
    dispatch(updatePidrozdilsStart());
    try {
         await axios.put("/pidrozdil/" + id, {
        });
        dispatch(updatePidrozdilsSuccess(id));
    } catch (err) {
       dispatch(updatePidrozdilsFailure());
    }
};


//delete
export const deletePidrozdils = async (id, dispatch) => {
    dispatch(deletePidrozdilsStart());
    try {
        await axios.delete("/pidrozdils/" + id, {
        });
        dispatch(deletePidrozdilsSuccess(id))
    } catch (err) {
        dispatch(deletePidrozdilsFailure());
    }
};

//create
export const createPidrozdils = async (pidrozdils, dispatch) => {
    dispatch(createPidrozdilsStart());
    try {
        const res = await axios.post("/pidrozdils", pidrozdils, {
        });
        dispatch(createPidrozdilsSuccess(res.data))
    } catch (err) {
        createPidrozdilsFailure();
    }
};