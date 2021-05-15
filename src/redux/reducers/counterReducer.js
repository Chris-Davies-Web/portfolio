

import { INCREMENT, DECREMENT } from '../types/counterTypes';

const INITIAL_STATE = {
    count: 2,
};
const reducer = (state = INITIAL_STATE, action) => {
    console.log('state', state);
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default:
            return state;
    }
};

export default reducer;