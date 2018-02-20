import actionTypes from '../constant/constant';

const INITIAL_STATE = {
    name: 'Sohaib'
}

export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CHANGEUSERNAME:
            return ({
                ...states,
                name: action.payload
            });
        default:
            return states;
    }
};

