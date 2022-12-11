import axios from "axios"
import {
    createQuestionsFailure,
    createQuestionsStart,
    createQuestionsSuccess,

    deleteQuestionsFailure,
    deleteQuestionsStart,
    deleteQuestionsSuccess,

    getQuestionsFailure,
    getQuestionsStart,
    getQuestionsSuccess,

    updateQuestionsFailure,
    updateQuestionsStart,
    updateQuestionsSuccess
} from "./QuestionAction";


//get
export const getQuestions = async (dispatch) => {
    dispatch(getQuestionsStart());
    try {
        const res = await axios.get("/questions", {
        });
        dispatch(getQuestionsSuccess(res.data));
    } catch (err) {
       dispatch(getQuestionsFailure());
    }
};

//update
export const updateQuestions = async (id,dispatch) => {
    dispatch(updateQuestionsStart());
    try {
         await axios.put("/question/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(updateQuestionsSuccess(id));
    } catch (err) {
       dispatch(updateQuestionsFailure());
    }
};


//delete
export const deleteQuestions = async (id, dispatch) => {
    dispatch(deleteQuestionsStart());
    try {
        await axios.delete("/questions/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteQuestionsSuccess(id))
    } catch (err) {
        dispatch(deleteQuestionsFailure());
    }
};

//create
export const createQuestions = async (questions, dispatch) => {
    dispatch(createQuestionsStart());
    try {
        const res = await axios.post("/Questions", questions, {
        });
        dispatch(createQuestionsSuccess(res.data))
    } catch (err) {
        createQuestionsFailure();
    }
};
