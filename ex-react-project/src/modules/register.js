const REGISTER = 'register/REGISTER';

export const register = () => ({ type: REGISTER });

const initialState = {};

function registerReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER:
            return {...state, register: action.payload }
        default:
            return state;
    }
}

export default registerReducer;