import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers/rootReducer';


const store = createStore(rootReducer);
// const store = configureStore({
//     reducer: rootReducer
// });
console.log('statess', store.getState())

export default store;