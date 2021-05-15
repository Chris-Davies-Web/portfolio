

import { REPOS } from '../types/githubTypes';

const INITIAL_STATE = {
    activites: [],
};
const githubReducer = (state = INITIAL_STATE, action) => {
    console.log('github reducer state', state);
    switch (action.type) {
        case REPOS:
            return {
                ...state, repos: action
            };
        default:
            return state;
    }
};

export default githubReducer;