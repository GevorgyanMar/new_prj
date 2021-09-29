import { userActionTypes } from '../actionTypes/actionTypes';

const initialState = {
    token: null,
    userData: {}
};


const loginUserAction = payload => ({
    type: userActionTypes.LOGIN_SUCCESS,
    payload
})


const loginUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case userActionTypes.LOGIN_SUCCESS:
            return { ...payload }
        default:
            return state;
    }
};

export {
    loginUserAction,
    loginUserReducer
}


