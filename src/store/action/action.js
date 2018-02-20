import actionTypes from '../constant/constant';

export const changeState = (updateUserName) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.CHANGEUSERNAME, payload: updateUserName })
    }
}