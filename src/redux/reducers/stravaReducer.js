

import { ACTIVITIES, STATS } from '../types/stravaTypes';

const INITIAL_STATE = {
    activites: [],
    stats: {}
};
const stravaReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIVITIES:
            return {
                ...state, activities: action
            };
        case STATS:
            return {
                ...state, stats: action
            };
        default:
            return state;
    }
};

export default stravaReducer;