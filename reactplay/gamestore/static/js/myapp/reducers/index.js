// Reducer is function which take the state and the action as parameters, and it return a new state base on the action
// You can write a very long single reducer, but for most of the case, we will write many reducers and combine them together
// Every reducer should be pure function! You are recommended to learn reducer more from internet, it's easy

import {REQUEST_DATA, RECEIVE_DATA, CLEAR_DATA} from '../actions';
import { combineReducers } from 'redux';

const name = (state='unknown',action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.name;
        case CLEAR_DATA:
            return 'unknown-cleared';
        default:
            return state;
    }
};

const games = (state=[],action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.games;
        case CLEAR_DATA:
            return [];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
  name,
  games
});

export default rootReducer;