export const getQuestionsStart = () => ({
    type: "GET_QUESTION_START",
});
export const getQuestionsSuccess = (questions) => ({
    type: "GET_QUESTION_SUCCESS",
    payload: questions,
});
export const getQuestionsFailure = () => ({
    type: "GET_QUESTION_FAILURE",
});


export const deleteQuestionsStart = () => ({
    type: "DELETE_QUESTION_START",
});
export const deleteQuestionsSuccess = (id) => ({
    type: "DELETE_QUESTION_SUCCESS",
    payload: id,
});
export const deleteQuestionsFailure = () => ({
    type: "DELETE_QUESTION_FAILURE",
});


export const createQuestionsStart = () => ({
    type: "CREATE_QUESTION_START",
});
export const createQuestionsSuccess = (questions) => ({
    type: "CREATE_QUESTION_SUCCESS",
    payload: questions,
});
export const createQuestionsFailure = () => ({
    type: "CREATE_QUESTION_FAILURE",
});

export const updateQuestionsStart = () => ({
    type: "UPDATE_QUESTION_START",
});
export const updateQuestionsSuccess = (questions) => ({
    type: "UPDATE_QUESTION_SUCCESS",
    payload: questions,
});
export const updateQuestionsFailure = () => ({
    type: "UPDATE_QUESTION_FAILURE",
});