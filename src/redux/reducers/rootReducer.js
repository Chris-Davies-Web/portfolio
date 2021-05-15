import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import stravaReducer from './stravaReducer';
import githubReducer from './githubReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    strava: stravaReducer,
    github: githubReducer
});

export default rootReducer;